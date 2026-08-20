"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

export default function LogoutMenuItem() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    setPending(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
        onError: () => setPending(false),
      },
    });
  };

  return (
    <DropdownMenuItem
      className="hover:cursor-pointer"
      disabled={pending}
      onSelect={(event) => {
        event.preventDefault();
        handleSignOut();
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Keluar</span>
    </DropdownMenuItem>
  );
}
