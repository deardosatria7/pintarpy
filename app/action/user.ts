"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { user, userCourseProgress } from "@/db/schema";

export async function deleteUserProgress(userId: string) {
  await db
    .delete(userCourseProgress)
    .where(eq(userCourseProgress.userId, userId));

  revalidatePath("/settings"); // atau path yang sesuai
}

export async function deleteUserAccount(userId: string) {
  // session & account ikut terhapus lewat ON DELETE CASCADE.
  // Progress dihapus eksplisit supaya urutannya jelas.
  await db
    .delete(userCourseProgress)
    .where(eq(userCourseProgress.userId, userId));

  await db.delete(user).where(eq(user.id, userId));

  redirect("/");
}
