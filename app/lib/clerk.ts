import { getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/app/lib/prisma";
import { NextRequest } from "next/server";

interface ClerkUser {
  id: string;
  emailAddresses: Array<{
    emailAddress: string;
  }>;
  firstName: string | null;
  lastName: string | null;
}

export async function createOrUpdateUser(clerkUser: ClerkUser, req: NextRequest) {
  const { userId } = getAuth(req);
  if (!userId) return null;

  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {
      email: clerkUser.emailAddresses[0].emailAddress,
      name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim(),
    },
    create: {
      clerkId: userId,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim(),
    },
  });

  return user;
} 