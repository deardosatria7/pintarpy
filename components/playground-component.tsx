"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code } from "lucide-react";
import BackButton from "./back-button";

// Import PyScriptTerminal dynamically with SSR enabled
const PyScriptTerminal = dynamic(
  () => import("@/components/pyscipt-terminal"),
  { ssr: false }
);

export default function PlaygroundComponent() {
  // Use useState instead of searchParams
  const [selectedExample, setSelectedExample] = useState("fibonacci");

  const codeExamples = {
    fibonacci: {
      title: "Deret Fibonacci",
      description: "Menghitung deret Fibonacci menggunakan fungsi rekursif",
      code: `# Menghitung deret Fibonacci
print("Deret Fibonacci:")

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Menampilkan 10 angka pertama dari deret Fibonacci
for i in range(10):
    print(fibonacci(i), end=" ")
print()  # Untuk pindah baris`,
    },
    factorial: {
      title: "Faktorial",
      description: "Menghitung faktorial menggunakan fungsi rekursif",
      code: `# Menghitung faktorial menggunakan fungsi rekursif
print("Faktorial:")

def faktorial(n):
    if n == 0:
        return 1
    else:
        return n * faktorial(n-1)

# Menampilkan faktorial dari 0 hingga 5
for i in range(6):
    print(f"{i}! = {faktorial(i)}")
print()
`,
    },
    bubbleSort: {
      title: "Bubble Sort",
      description: "Mengurutkan data angka menggunakan algoritma bubble sort",
      code: `# Mengurutkan data angka menggunakan algoritma bubble sort sederhana
print("Mengurutkan Data:")

data = [8, 3, 6, 1, 9, 2]
n = len(data)

for i in range(n):
    for j in range(0, n - i - 1):
        if data[j] > data[j + 1]:
            # Tukar posisi jika elemen lebih besar daripada elemen berikutnya
            data[j], data[j + 1] = data[j + 1], data[j]

print("Data yang sudah diurutkan:", data)
`,
    },
    enkripsi: {
      title: "Hitung Investasi",
      description: "Menghitung hasil akhir untuk investasi per bulan.",
      code: `# ============================================
# Parameter (silakan ubah sesuai kebutuhan)
# ============================================
total_pmt = 1_000_000   # setoran bulanan total (Rp)
years = 10              # jangka waktu (tahun)
porsi_pasaruang = 0.3   # proporsi ke pasar uang (0.0 - 1.0)
porsi_obligasi = 0.7    # proporsi ke obligasi (0.0 - 1.0)

rate_pasaruang = 0.06   # return tahunan pasar uang per tahun
rate_obligasi = 0.077   # return tahunan obligasi per tahun
# ============================================

# Fungsi menghitung Future Value Anuitas
def future_value_annuity(pmt, annual_rate, years):
    r = (1 + annual_rate) ** (1/12) - 1   # konversi bunga bulanan
    n = years * 12                        # total bulan
    fv = pmt * ((1 + r) ** n - 1) / r
    return fv

# Fungsi format rupiah
def format_rupiah(angka: int) -> str:
    return f"Rp {angka:,.0f}".replace(",", ".")

# Hitung modal
modal = total_pmt * 12 * years

# Hitung setoran ke masing-masing instrumen
pmt_pasaruang = total_pmt * porsi_pasaruang
pmt_obligasi = total_pmt * porsi_obligasi

# Hitung akumulasi
fv_pasaruang = future_value_annuity(pmt_pasaruang, rate_pasaruang, years)
fv_obligasi = future_value_annuity(pmt_obligasi, rate_obligasi, years)
fv_total = fv_pasaruang + fv_obligasi

# Cetak hasil
print(f"Skema investasi {format_rupiah(total_pmt)} per bulan dalam {years} tahun")
print(f"Pembagian: {int(porsi_pasaruang*100)}% Pasar Uang, {int(porsi_obligasi*100)}% Obligasi")
print("")
print("Hasil")
print("Pasar Uang (6%):", format_rupiah(round(fv_pasaruang)))
print("Obligasi (7.7%):", format_rupiah(round(fv_obligasi)))
print("")
print("Total Modal:", format_rupiah(modal))
print("Total Akumulasi:", format_rupiah(round(fv_total)))
print("Total Untung:", format_rupiah(round(fv_total - modal)))
`,
    },
  };

  // Get the current example data
  const currentExample =
    codeExamples[selectedExample as keyof typeof codeExamples];

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <BackButton className="hover:cursor-pointer" />
          {/* <Link href={"/"} className="max-w-fit">
            <div className="max-w-[200px] bg-gray-200 dark:bg-white dark:text-black py-3 px-4 flex items-center gap-2 rounded-md">
              <ArrowLeftCircle />
              kembali ke home
            </div>
          </Link> */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Python Playground
            </h1>
            <p className="text-muted-foreground">
              Pilih contoh kode Python dan jalankan langsung di browser, atau
              coba isi dengan kode python Anda sendiri.
            </p>
          </div>
        </div>

        {/* Responsive tabs with CSS-based responsiveness */}
        <div className="w-full">
          {/* Desktop tabs */}
          <div className="hidden md:block">
            <Tabs
              value={selectedExample}
              onValueChange={setSelectedExample}
              className="w-full"
            >
              <TabsList className="grid grid-cols-4 w-full">
                {Object.entries(codeExamples).map(([key, example]) => (
                  <TabsTrigger key={key} value={key}>
                    {example.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Mobile dropdown (styled as a select) */}
          <div className="md:hidden">
            <div className="relative w-full border rounded-md">
              <select
                className="w-full p-2 bg-background appearance-none focus:outline-none"
                value={selectedExample}
                onChange={(e) => setSelectedExample(e.target.value)}
              >
                {Object.entries(codeExamples).map(([key, example]) => (
                  <option key={key} value={key}>
                    {example.title}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <CardTitle>{currentExample.title}</CardTitle>
            </div>
            <CardDescription>{currentExample.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md overflow-hidden border">
              <Suspense
                fallback={<div className="p-4">Loading Python terminal...</div>}
              >
                <PyScriptTerminal code={currentExample.code} />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
