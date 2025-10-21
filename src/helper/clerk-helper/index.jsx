import { auth } from "@clerk/nextjs/server";

export const authData = async () => {
  const { userId } = await auth();

  return { userId };
};
