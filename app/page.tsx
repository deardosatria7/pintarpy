import Link from "next/link";
import dynamic from "next/dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRight,
  Code,
  BookOpen,
  Users,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollAnimation } from "@/components/animation/animation-collection";
import { auth, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  const defaultCode: string = `# Selamat datang di PintarPy!
print("Halo, Dunia Python!")

# Mari belajar variabel
nama = "PintarPy"
tahun = 2025
print(f"{nama} adalah platform belajar Python terbaik di {tahun}")

# Coba fungsi sederhana
def sapa(nama):
    return f"Halo {nama}, selamat belajar Python!"

print(sapa(${
    session?.user?.name ? `"${session.user.name}"` : `"Programmer"`
  }))`;

  // add dynamic import
  const PyScriptTerminal = dynamic(
    () => import("@/components/pyscipt-terminal"),
    { ssr: true } // this is server side rendered
  );

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 flex justify-center items-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6">
            <MobileNav />
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PintarPy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Fitur
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Cara Kerja
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />

            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full hover:cursor-pointer"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={session.user.image || ""}
                        alt={session.user.name || "User"}
                      />
                      <AvatarFallback>
                        {session.user.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Pengaturan</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span
                      onClick={async () => {
                        "use server";
                        await signOut();
                      }}
                    >
                      Keluar
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login" className="hidden md:block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:cursor-pointer"
                  >
                    Masuk
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="sm" className="hover:cursor-pointer">
                    <span className="hidden md:block">Daftar Gratis</span>
                    <span className="block md:hidden">Daftar</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-background to-muted min-h-[90vh] md:min-h-screen flex justify-center items-center min-w-screen">
            <div className="container px-4 sm:px-6 md:px-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                      Belajar Python dengan Mudah dan Interaktif
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
                      PintarPy membantu Anda menguasai Python langsung dari
                      browser. Tulis, jalankan, dan pelajari kode Python secara
                      gratis.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/playground"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 sm:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:outline-none focus-visible:ring-offset-2"
                    >
                      Coba Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/courses"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 sm:px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:outline-none focus-visible:ring-offset-2"
                    >
                      Lihat Materi
                    </Link>
                  </div>
                </div>
                <div className="mx-auto lg:mx-0 relative mt-8 lg:mt-0 w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-none">
                  <div className="relative rounded-lg border bg-card p-2 sm:p-3 md:p-4 shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between border-b pb-2 mb-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-destructive"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-medium">
                        python-playground.py
                      </div>
                    </div>
                    <div className="text-xs md:text-sm overflow-x-auto rounded-md p-2">
                      <PyScriptTerminal code={defaultCode}></PyScriptTerminal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        {/* Features Section */}
        <section
          id="features"
          className="py-12 md:py-16 lg:py-24 bg-background flex justify-center items-center min-w-screen"
        >
          <ScrollAnimation>
            <div className="container px-4 sm:px-6 md:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Fitur Unggulan
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                    Belajar Python Jadi Lebih Menyenangkan
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                    PintarPy menyediakan berbagai fitur untuk memudahkan Anda
                    belajar Python dari dasar hingga mahir.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-8 md:mt-12">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-center">
                    Playground Interaktif
                  </h3>
                  <p className="text-center text-sm md:text-base text-muted-foreground">
                    Tulis dan jalankan kode Python langsung di browser tanpa
                    perlu instalasi apapun.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-center">
                    Materi Lengkap
                  </h3>
                  <p className="text-center text-sm md:text-base text-muted-foreground">
                    Akses materi pembelajaran Python dari dasar hingga lanjutan
                    dengan contoh praktis.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm sm:col-span-2 md:col-span-1 transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-center">
                    Komunitas Aktif
                  </h3>
                  <p className="text-center text-sm md:text-base text-muted-foreground">
                    Bergabung dengan komunitas pembelajar Python Indonesia untuk
                    diskusi dan berbagi pengetahuan.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-12 md:py-16 lg:py-24 bg-muted flex justify-center items-center min-w-screen"
        >
          <ScrollAnimation>
            <div className="container px-4 sm:px-6 md:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                    Cara Kerja
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                    Mulai Belajar Python dalam 3 Langkah Mudah
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                    PintarPy dirancang untuk memudahkan siapa saja belajar
                    Python, bahkan untuk pemula sekalipun.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 mt-8 md:mt-12">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary text-lg md:text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Daftar Akun</h3>
                  <p className="text-center text-sm md:text-base text-muted-foreground">
                    Buat akun gratis di PintarPy untuk mulai menyimpan progres
                    belajar Anda.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary text-lg md:text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Pilih Materi</h3>
                  <p className="text-center text-sm md:text-base text-muted-foreground">
                    Pilih materi pembelajaran sesuai level kemampuan Anda, dari
                    pemula hingga ahli.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary text-lg md:text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    Praktik Langsung
                  </h3>
                  <p className="text-center text-sm md:text-base text-muted-foreground">
                    Praktikkan kode Python langsung di browser dan lihat
                    hasilnya secara instan.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 lg:py-24 bg-background flex justify-center items-center min-w-screen">
          <ScrollAnimation>
            <div className="container px-4 sm:px-6 md:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Testimoni
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                    Apa Kata Mereka Tentang PintarPy
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                    Ribuan pengguna telah merasakan manfaat belajar Python di
                    PintarPy.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8 md:mt-12">
                <div className="rounded-lg border p-4 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center shrink-0">
                      <span className="font-medium">BP</span>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold">
                        Budi Pratama
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Mahasiswa Informatika
                      </p>
                      <p className="mt-2 md:mt-3 text-sm md:text-base">
                        &#34;PintarPy sangat membantu saya memahami konsep dasar
                        Python. Playground interaktifnya membuat saya bisa
                        langsung praktik tanpa ribet instalasi.&#34;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center shrink-0">
                      <span className="font-medium">DS</span>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold">
                        Dewi Sartika
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Data Analyst
                      </p>
                      <p className="mt-2 md:mt-3 text-sm md:text-base">
                        &#34;Sebagai profesional yang ingin belajar Python untuk
                        analisis data, PintarPy menyediakan materi yang tepat
                        dan mudah dipahami. Sangat direkomendasikan!&#34;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-12 md:py-16 lg:py-24 bg-muted flex justify-center items-center min-w-screen"
        >
          <ScrollAnimation>
            <div className="container px-4 sm:px-6 md:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                    FAQ
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                    Pertanyaan yang Sering Diajukan
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
                    Jawaban untuk pertanyaan umum tentang PintarPy.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 mt-8 md:mt-12">
                <div className="rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold">
                      Apakah PintarPy benar-benar gratis?
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Ya, PintarPy dapat diakses secara gratis. Kami menyediakan
                      materi dasar dan playground Python tanpa biaya apapun.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold">
                      Apakah saya perlu menginstal Python di komputer saya?
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Tidak perlu. PintarPy menggunakan PyScript yang
                      memungkinkan Anda menulis dan menjalankan kode Python
                      langsung di browser.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold">
                      Apakah PintarPy cocok untuk pemula?
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                      Sangat cocok! PintarPy dirancang dengan mempertimbangkan
                      pemula, dengan materi yang disusun secara bertahap dari
                      dasar hingga lanjutan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-primary text-primary-foreground flex justify-center items-center min-w-screen">
          <ScrollAnimation>
            <div className="container px-4 sm:px-6 md:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                    Mulai Perjalanan Python Anda Sekarang
                  </h2>
                  <p className="max-w-[700px] text-sm md:text-base lg:text-xl">
                    Bergabunglah dengan ribuan pembelajar Python di Indonesia
                    dan kuasai keterampilan yang dibutuhkan industri.
                  </p>
                </div>
                <div className="flex flex-col justify-center sm:flex-row gap-3 w-full max-w-md mx-auto">
                  <Link
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-4 sm:px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto focus:outline-none focus-visible:ring-offset-2"
                  >
                    Daftar Gratis
                  </Link>
                  <Link
                    href="/playground"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-4 sm:px-8 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full sm:w-auto focus:outline-none focus-visible:ring-offset-2"
                  >
                    Coba Playground
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted flex justify-center items-center min-w-screen">
        <div className="container px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4 col-span-2 md:col-span-1">
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">PintarPy</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Platform belajar Python interaktif terbaik di Indonesia.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider">
                Produk
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/playground"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Playground
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Materi Belajar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/challenges"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Tantangan Koding
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider">
                Perusahaan
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Karir
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs md:text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-12 border-t pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PintarPy. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
