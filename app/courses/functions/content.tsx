"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  BookOpen,
  CheckCircle,
  Clock,
  PlayCircle,
  Circle,
} from "lucide-react";

import SidebarNavigation from "@/components/sidebar-navigation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList } from "@/components/ui/tabs";
import PyScriptTerminal from "@/components/pyscipt-terminal";
import {
  PrevButton,
  NextButton,
  NextCourseButton,
} from "@/components/button-courses-navigation";
import axios from "axios";
import { Toaster } from "sonner";
import { showErrorToast } from "@/components/ui/error-toast";

export default function FunctionsContent() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "User",
    email: "",
    image: "https://via.placeholder.com/150",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Fetch user data on component mount
    const checkAuth = async () => {
      try {
        // Replace this with your actual auth check method
        const response = await axios.get("/api/fetch-user-data");
        const userData = await response.data.data;
        setUserData({
          name: userData.name,
          email: userData.email,
          image: userData.image,
        });
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          console.error("Authentication error:", error.response);
          router.push(
            `/error?message=${error.response.data.message}&title=${error.response.data.title}&code=${error.response.status}&showRefresh=true&returnUrl=/login`
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Definisi konten untuk setiap tahap pembelajaran
  const lessonSteps = [
    {
      id: 1,
      title: "Pengenalan Fungsi dalam Python",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan
            tugas tertentu. Dengan menggunakan fungsi, kamu dapat mengelompokkan
            kode yang sering digunakan agar lebih mudah dipelihara dan diuji.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Di Python, fungsi didefinisikan menggunakan kata kunci{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              def
            </code>
            . Setelah fungsi didefinisikan, kamu dapat memanggilnya dengan
            menyebutkan namanya beserta tanda kurung.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`# Mendefinisikan fungsi sederhana
def sapa(nama):
    """
    Menyapa pengguna dengan nama yang diberikan.
    """
    return f"Halo, {nama}!"
  
# Memanggil fungsi
hasil = sapa("Budi")
print(hasil)  # Output: Halo, Budi!
`}
            ></PyScriptTerminal>
          </div>
          <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
            <h3 className="font-medium text-purple-800 dark:text-purple-300 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Fakta Menarik
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Fungsi di Python adalah <em>first class citizens</em> yang artinya
              fungsi dapat diperlakukan seperti variabel. Kamu bisa menyimpan
              fungsi dalam variabel, mengirimnya sebagai argumen, atau bahkan
              mengembalikannya dari fungsi lain.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "Parameter dan Argumen",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Fungsi di Python dapat menerima input berupa parameter. Parameter
            memungkinkan kamu untuk mengirim data ke dalam fungsi. Parameter
            juga bisa memiliki nilai default sehingga tidak wajib diberikan saat
            pemanggilan.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`def perkenalan(nama, usia=18):
    """
    Mengenalkan seseorang dengan nama dan usia.
    """
    print(f"Halo, saya {nama} dan saya berusia {usia} tahun.")
  
# Pemanggilan fungsi
perkenalan("Andi")           # Menggunakan usia default
perkenalan("Budi", 25)        # Menentukan usia secara eksplisit
`}
            ></PyScriptTerminal>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Pada contoh di atas, parameter{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              usia
            </code>{" "}
            memiliki nilai default 18, sehingga fungsi dapat dipanggil tanpa
            memberikan nilai untuk parameter tersebut.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Nilai Kembalian (Return) dan Docstring",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Fungsi dapat mengembalikan nilai menggunakan kata kunci{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              return
            </code>
            . Selain itu, kamu bisa menambahkan docstring (dalam triple quotes)
            untuk mendokumentasikan fungsi.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`def tambah(a, b):
    """
    Mengembalikan hasil penjumlahan dari dua angka.
    """
    return a + b
  
# Menggunakan fungsi tambah
hasil = tambah(5, 7)
print("Hasil:", hasil)  # Output: Hasil: 12
  `}
            ></PyScriptTerminal>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Docstring pada fungsi di atas menjelaskan apa yang dilakukan fungsi
            tersebut, sehingga memudahkan pemahaman bagi pengguna lain atau saat
            kamu kembali membaca kode tersebut.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Variabel Lokal dan Global",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Variabel yang didefinisikan di dalam sebuah fungsi bersifat lokal,
            artinya hanya dapat diakses di dalam fungsi tersebut. Sedangkan
            variabel yang didefinisikan di luar fungsi adalah variabel global
            yang dapat diakses di mana saja.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`x = "global"
  
def contoh():
    x = "lokal"
    print("Di dalam fungsi:", x)
  
contoh()
print("Di luar fungsi:", x)
  `}
            ></PyScriptTerminal>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Pada contoh di atas, variabel{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              x
            </code>{" "}
            yang didefinisikan di dalam fungsi{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
              contoh
            </code>{" "}
            hanya berlaku di dalam fungsi tersebut.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "Fungsi Rekursif",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri untuk
            menyelesaikan suatu masalah. Teknik ini sering digunakan untuk
            memecahkan masalah yang bisa dipecah menjadi sub-masalah yang lebih
            kecil.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`def faktorial(n):
    """
    Menghitung faktorial dari sebuah angka secara rekursif.
    """
    if n == 0:
        return 1
    else:
        return n * faktorial(n - 1)
  
print("Faktorial 5:", faktorial(5))  # Output: Faktorial 5: 120
  `}
            ></PyScriptTerminal>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Contoh di atas menggunakan rekursi untuk menghitung faktorial dari
            angka 5.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "Fungsi Lambda (Anonim)",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            Fungsi lambda adalah fungsi anonim yang dituliskan dalam satu baris
            kode. Fungsi ini sangat berguna untuk operasi sederhana dan sering
            digunakan sebagai argumen untuk fungsi lain.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mt-4">
            <PyScriptTerminal
              code={`# Fungsi lambda untuk menjumlahkan dua angka
tambah = lambda a, b: a + b
  
print("Hasil lambda:", tambah(3, 4))  # Output: Hasil lambda: 7
  `}
            ></PyScriptTerminal>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Fungsi lambda memungkinkan penulisan fungsi secara ringkas tanpa
            harus menggunakan definisi fungsi standar.
          </p>
        </>
      ),
    },
    {
      id: 7,
      title: "Ringkasan & Langkah Selanjutnya",
      content: (
        <>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mb-6">
            <h3 className="font-medium text-purple-800 dark:text-purple-300 text-lg mb-3">
              Apa yang sudah kita pelajari:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Fungsi dasar dan cara mendefinisikannya menggunakan{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                    def
                  </code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Penggunaan parameter, argumen, dan nilai kembali (
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400">
                    return
                  </code>
                  )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Perbedaan antara variabel lokal dan global</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Fungsi rekursif dan fungsi lambda (anonim)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 text-lg mb-3">
              Langkah Selanjutnya:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pada materi berikutnya, kita akan mempelajari struktur data array
              di Python. Kamu akan belajar mengenai:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Pratinjau Materi Berikutnya
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Materi struktur data array akan mencakup:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>
                    <strong>List</strong>: struktur data berurutan yang bersifat
                    mutable
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>
                    <strong>Tuple</strong>: struktur data berurutan yang
                    bersifat immutable
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-500" />
                  <span>
                    <strong>Dictionary</strong>: struktur data berbasis
                    key-value yang tidak berurutan
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Mendapatkan konten untuk tahap saat ini
  const currentLesson =
    lessonSteps.find((step) => step.id === currentStep) || lessonSteps[0];

  // Menghitung progress berdasarkan tahap saat ini
  const stepProgress = Math.round((currentStep / lessonSteps.length) * 100);

  // handler update progress user
  const handleUpdateProgress = async (courseId?: string, progress?: 0) => {
    try {
      setIsSubmitting(true);
      // Replace with your actual API call to update progress
      await axios.post("/api/update-user-progress", {
        courseId: courseId ?? "cm9b0ic7d0003txs8xg8ziq6b",
        progress: progress ?? stepProgress,
      });
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      if (axios.isAxiosError(error)) {
        console.error("Failed to update progress:", error);
        showErrorToast({
          title: "Gagal menyimpan progress anda.",
          description: `Silahkan coba lagi nanti. Pesan: ${error.response?.data?.message}`,
        });
      }
    }
  };

  // Add these functions before the return statement
  const handlePrevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
    }
  };

  const handleNextStep = () => {
    if (currentStep < lessonSteps.length) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
    }
  };

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
      pageTitle="Fungsi"
    >
      <div className="flex flex-col w-full space-y-6 p-4 md:p-8">
        {/* Header dengan Progress */}
        <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl shadow-sm dark:shadow-md dark:border dark:border-purple-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl text-purple-800 dark:text-purple-300">
                Fungsi
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-2xl">
                Di materi ini, kamu akan belajar mengenai fungsi yang ada dalam
                bahasa pemrograman Python.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm self-start">
              <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                50 menit
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                Progress Materi
              </span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                {stepProgress}%
              </span>
            </div>
            <Progress value={stepProgress} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>
                Tahap {currentStep} dari {lessonSteps.length}
              </span>
              <span>{stepProgress}% selesai</span>
            </div>
          </div>
        </div>

        {/* Navigasi Tahap */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <Tabs defaultValue={currentStep.toString()} className="w-full">
              <div className="px-4 py-2 overflow-x-auto">
                <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                  {lessonSteps.map((step) => (
                    <button
                      key={step.id}
                      // onClick={() => {
                      //   setCurrentStep(step.id);
                      // }}
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
                        ${
                          currentStep === step.id
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300"
                            : "text-gray-600 dark:text-gray-400"
                        }
                        ${
                          step.id < currentStep
                            ? "text-green-600 dark:text-green-400"
                            : ""
                        }
                      `}
                    >
                      {step.id < currentStep && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      {step.id === currentStep && (
                        <PlayCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      )}
                      {step.id > currentStep && (
                        <Circle className="h-4 w-4 text-gray-400" />
                      )}
                      <span>{step.title}</span>
                    </button>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </div>

          {/* Konten Materi */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {currentLesson.title}
            </h2>
            <div className="space-y-4">{currentLesson.content}</div>
          </div>
        </div>

        {/* Navigasi Bawah */}
        <div className="flex justify-between mt-4">
          {currentStep > 1 ? (
            <PrevButton
              variant="outline"
              className="gap-1 hover:cursor-pointer"
              onClick={handlePrevStep}
            ></PrevButton>
          ) : (
            <PrevButton
              className="gap-1 hover:cursor-pointer"
              disabled={true}
            ></PrevButton>
          )}
          {currentStep < lessonSteps.length ? (
            <NextButton
              className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:text-white dark:hover:bg-purple-700 gap-1 hover:cursor-pointer"
              onClick={async () => {
                await handleUpdateProgress();
                handleNextStep();
              }}
              isLoading={isSubmitting}
            ></NextButton>
          ) : (
            <NextCourseButton
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 dark:text-white gap-1"
              onClick={async () => {
                await handleUpdateProgress();
                await handleUpdateProgress("cm9b0ic9q0004txs8mudwhsln", 0);
                router.push("/courses/arrays");
              }}
              isLoading={isSubmitting}
            ></NextCourseButton>
          )}
        </div>
        {/* This is required for the Sonner toast notifications to work */}
        <Toaster />
      </div>
    </SidebarNavigation>
  );
}
