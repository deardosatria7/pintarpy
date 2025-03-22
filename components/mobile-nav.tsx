"use client";

import * as React from "react";
import Link from "next/link";
import {Menu} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="px-2">
          <div className="flex items-center justify-between pb-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">Menu</span>
            </div>
          </div>
          <nav className="flex flex-col space-y-4 pt-6">
            <SheetClose asChild>
              <Link
                href="#features"
                className="text-base font-medium hover:text-primary"
              >
                Fitur
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#how-it-works"
                className="text-base font-medium hover:text-primary"
              >
                Cara Kerja
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="#faq"
                className="text-base font-medium hover:text-primary"
              >
                FAQ
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/login"
                className="text-base font-medium hover:text-primary"
              >
                Masuk
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/register"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Daftar Gratis
              </Link>
            </SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
