import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { userCourseProgress } from "@/db/schema";
import { getSession } from "@/lib/actions/sessions";
import { redirect } from "next/navigation";
import ErrorHandlingContent from "./content";

export default async function ErrorHandlingPage() {
  const session = await getSession();
  if (!session?.user) return redirect("/login");

  // Check if the user is enrolled in the course
  const userId = session.user.id;
  const courseId = "cm9b0ic9q0004txs8mudwhsln"; // Replace with the actual course ID
  const currentUserCourses = await db
    .select()
    .from(userCourseProgress)
    .where(
      and(
        eq(userCourseProgress.userId, userId),
        eq(userCourseProgress.courseId, courseId)
      )
    );

  if (
    currentUserCourses[0]?.status != "in_progress" &&
    currentUserCourses[0]?.status != "completed"
  ) {
    // Redirect to the error page
    return redirect(
      "/error?message=Anda belum menyelesaikan materi sebelumnya. Selesaikan dahulu materi sebelumnya baru melanjutkan ke materi ini!&title=Materi terkunci!&code=403&returnUrl=/courses"
    );
  }

  return <ErrorHandlingContent />;
}
