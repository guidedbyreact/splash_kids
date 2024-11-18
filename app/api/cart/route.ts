import { getAuth } from "@clerk/nextjs/server";
import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        cart: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!user?.cart) {
      const cart = await prisma.cart.create({
        data: {
          user: {
            connect: { clerkId: userId },
          },
        },
        include: {
          items: true,
        },
      });
      return NextResponse.json({ items: cart.items });
    }

    return NextResponse.json({ items: user.cart.items });
  } catch (error) {
    console.error('Erreur lors de la récupération du panier:', error);
    return new NextResponse('Erreur serveur', { status: 500 });
  }
} 