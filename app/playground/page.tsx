import PlaygroundComponent from "@/components/playground-component";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function PlaygroundPage() {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  return (
    <>
      <PlaygroundComponent />
    </>
  );
}
