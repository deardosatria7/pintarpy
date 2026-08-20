import { getSession } from "@/lib/actions/sessions";
import { redirect } from "next/navigation";
import IntroductionContent from "./content";

export default async function IntroductionPage() {
  const session = await getSession();
  if (!session?.user) return redirect("/login");

  return <IntroductionContent />;
}
