"use client";
import { Clock, Rocket, Star } from "lucide-react";

import SidebarNavigation from "@/components/sidebar-navigation";
import { useUser } from "@/hooks/use-user";

export default function MiniProjectsContent() {
  const { userData, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <SidebarNavigation
      name={userData.name}
      email={userData.email}
      image={userData.image}
      pageTitle="Mini Projects"
    >
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg m-6">
        <div className="relative mb-8">
          <Rocket className="h-20 w-20 text-blue-500 dark:text-blue-400 animate-bounce" />
          <Star className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Segera Hadir!
        </h1>

        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dalam Pengembangan
          </p>
        </div>

        <p className="max-w-md text-center text-gray-500 dark:text-gray-400 mb-8">
          Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda. Fitur
          baru ini akan segera tersedia dengan pengalaman yang lebih baik.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <p className="text-sm text-center text-gray-400 dark:text-gray-500">
            Terimakasih telah belajar bersama kami ❤️
          </p>
        </div>
      </div>
    </SidebarNavigation>
  );
}
