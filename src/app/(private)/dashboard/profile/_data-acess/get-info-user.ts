import PrismaClient from "@/lib/prisma";

interface GetUserProps {
  userId: string;
}

export async function getUserInfo({ userId }: GetUserProps) {
  try {
    if (!userId || userId === "") {
      return null;
    }

    const user = await PrismaClient.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        subscription: true,
      },
    });

    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}
