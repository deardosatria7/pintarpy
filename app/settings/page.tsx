import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Trash2 } from "lucide-react";
import SidebarNavigation from "@/components/sidebar-navigation";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import DeleteActions from "./delete-button";

export default async function SettingsPage() {
  const session = await auth();
  if (!session) return redirect("/login");

  const userData = {
    id: session.user?.id || "",
    name: session.user?.name || "User",
    email: session.user?.email || "",
    image: session.user?.image || "https://via.placeholder.com/150",
  };

  return (
    <SidebarNavigation
      name={userData.name}
      email={userData.email}
      image={userData.image}
      pageTitle="Pengaturan"
    >
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Pengaturan</h1>
            <p className="text-muted-foreground mt-2">
              Kelola akun dan preferensi Anda.
            </p>
          </div>

          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>
                Informasi profil Anda yang digunakan di platform ini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={userData.image || "/placeholder.svg"}
                    alt={userData.name}
                  />
                  <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">{userData.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {userData.email}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>

          {/* Account Management Card */}
          <Card>
            <CardHeader>
              <CardTitle>Manajemen Akun</CardTitle>
              <CardDescription>
                Kelola data dan informasi akun Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-amber-600 dark:text-amber-500">
                    Hapus Progress Belajar
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hapus semua progress belajar Anda. Tindakan ini tidak dapat
                  dibatalkan.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <Trash2 className="h-4 w-4 text-red-500" />
                  <span className="text-red-600 dark:text-red-500">
                    Hapus Akun
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hapus akun Anda secara permanen. Semua data Anda akan dihapus
                  dan tidak dapat dikembalikan.
                </p>
              </div>

              {/* Tambahkan tombol-tombol interaktif */}
              <DeleteActions userId={userData.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarNavigation>
  );
}
