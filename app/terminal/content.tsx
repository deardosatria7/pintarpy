"use client";
import { useState } from "react";
import SidebarNavigation from "@/components/sidebar-navigation";
import PyScriptTerminal from "@/components/pyscipt-terminal";
import { useUser } from "@/hooks/use-user";
import { AlertCircle, TerminalIcon, Info, Play } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import BackButton from "@/components/back-button";

interface TerminalProps {
  code?: string;
}
export default function TerminalContent({ code }: TerminalProps) {
  const { userData } = useUser();
  const [showTip] = useState(true);

  return (
    <SidebarNavigation
      name={userData.name}
      email={userData.email}
      image={userData.image}
      pageTitle="Python Terminal"
    >
      <div className="container mx-auto px-2 sm:px-4 py-4 space-y-4 sm:space-y-6 max-w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-xl sm:text-2xl font-bold">
              Python Terminal Interaktif
            </h1>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base">
          <p>
            Terminal Python interaktif ini memungkinkan Anda untuk menjalankan
            kode Python langsung di browser. Anda dapat menguji potongan kode,
            bereksperimen dengan algoritma, atau mempelajari Python tanpa perlu
            menginstal apapun.
          </p>
        </div>

        {showTip && (
          <Alert
            variant="default"
            className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-sm"
          >
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-800 dark:text-amber-300">
              Penting!
            </AlertTitle>
            <AlertDescription className="text-amber-700 dark:text-amber-400">
              Jangan tutup halaman ini jika Anda ingin menjalankan kode yang
              telah disalin sebelumnya. Terminal ini akan tetap aktif selama
              halaman terbuka.
            </AlertDescription>
          </Alert>
        )}

        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              Python v3.10
            </span>
          </div>

          <div className="p-1 sm:p-2">
            <PyScriptTerminal code={code} />
          </div>
        </div>

        <Alert
          variant="default"
          className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-sm"
        >
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="text-blue-800 dark:text-blue-300">
            Tips Penggunaan
          </AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-400">
            <ul className="list-disc list-inside space-y-1 mt-2 text-xs sm:text-sm">
              <li>
                Gunakan{" "}
                <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
                  print()
                </code>{" "}
                untuk menampilkan output
              </li>
              <li>
                Tekan <Play className="h-4 w-4 inline" /> untuk menjalankan kode
              </li>
              <li>
                Variabel yang Anda definisikan akan tetap tersimpan selama Anda
                tidak menutup halaman ini
              </li>
            </ul>
          </AlertDescription>
        </Alert>
        <BackButton className="w-full hover:cursor-pointer" />
      </div>
    </SidebarNavigation>
  );
}
