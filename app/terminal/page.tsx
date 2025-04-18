import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TerminalContent from "./content";
import { AlertCircle } from "lucide-react";

export default async function TerminalPage({
  searchParams,
}: {
  searchParams?: Promise<{ code: string }>;
}) {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  // tunggu promise (demo penggunaan Promise)
  const raw = (await searchParams)?.code || "";
  let decoded = "";
  try {
    decoded = atob(raw);
    decoded = Buffer.from(raw, "base64").toString("utf-8");
  } catch {
    // kalau decode gagal, redirect atau notFound()
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <AlertCircle className="h-16 w-16 text-red-500 dark:text-red-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Oops! Terjadi Kesalahan
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Error: Internal server error (500).
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <TerminalContent code={decoded} />;
}
