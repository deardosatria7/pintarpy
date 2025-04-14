"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteUserProgress(userId: string) {
  await prisma.userCourseProgress.deleteMany({
    where: { userId },
  });

  revalidatePath("/settings"); // atau path yang sesuai
}

export async function deleteUserAccount(userId: string) {
  await prisma.userCourseProgress.deleteMany({
    where: { userId },
  });

  await prisma.user.delete({
    where: { id: userId },
  });

  redirect("/login");
}
