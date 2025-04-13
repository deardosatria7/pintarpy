import { auth } from "@/auth";
import { redirect } from "next/navigation";
import IntroductionContent from "./content";

export default async function IntroductionPage() {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  return <IntroductionContent />;
}
