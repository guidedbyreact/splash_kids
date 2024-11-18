import { getAuth } from "@clerk/nextjs/server";
import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  try {
    const { productId, quantity } = await req.json();

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        cart: true,
      },
    });

    if (!user?.cart) {
      const cart = await prisma.cart.create({
        data: {
          user: {
            connect: { clerkId: userId },
          },
          items: {
            create: {
              productId,
              quantity,
            },
          },
        },
        include: {
          items: true,
        },
      });
      return NextResponse.json({ items: cart.items });
    }

    const updatedCart = await prisma.cart.update({
      where: { id: user.cart.id },
      data: {
        items: {
          create: {
            productId,
            quantity,
          },
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({ items: updatedCart.items });
  } catch (error) {
    console.error('Erreur lors de l\'ajout au panier:', error);
    return new NextResponse('Erreur serveur', { status: 500 });
  }
} 