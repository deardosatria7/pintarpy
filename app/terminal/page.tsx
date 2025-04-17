import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TerminalContent from "./content";

export default async function StructureControlPage() {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  return <TerminalContent />;
}
