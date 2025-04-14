"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Trash2, AlertTriangle } from "lucide-react";
import { useTransition } from "react";
import { deleteUserAccount, deleteUserProgress } from "../action/user";

export default function DeleteActions({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Hapus Progress Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            disabled={isPending}
            className="bg-orange-400 hover:cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Hapus Progress Belajar
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Yakin ingin menghapus progress belajar?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini akan menghapus semua progress Anda dan tidak bisa
              dikembalikan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              disabled={isPending}
              onClick={() =>
                startTransition(() => {
                  deleteUserProgress(userId);
                })
              }
            >
              Lanjutkan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Hapus Akun Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            disabled={isPending}
            className="hover:cursor-pointer"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Hapus Akun
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus akun secara permanen?</AlertDialogTitle>
            <AlertDialogDescription>
              Akun Anda dan seluruh datanya akan dihapus selamanya. Tindakan ini
              tidak bisa dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              disabled={isPending}
              onClick={() =>
                startTransition(() => {
                  deleteUserAccount(userId);
                })
              }
            >
              Ya, Hapus Akun
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
