"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Settings,
  HelpCircle,
  ChevronDown,
  Code,
  LogOutIcon,
  FlaskConical,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { signOut } from "next-auth/react";

// Navigation data structure dengan penambahan grup "Materi"
const navigationItems = [
  {
    title: "Beranda",
    icon: Home,
    href: "/",
  },
  {
    title: "Materi",
    icon: Code,
    href: "/courses",
    subItems: [
      { title: "Pengenalan Python", href: "/courses/introduction" },
      {
        title: "Variabel dan Tipe Data",
        href: "/courses/variables-and-data-types",
      },
      { title: "Struktur Kontrol", href: "/courses/control-structures" },
      { title: "Fungsi", href: "/courses/functions" },
      { title: "Array", href: "/courses/struktur-data" },
      { title: "Error Handling", href: "/courses/error-handling" },
      { title: "OOP", href: "/courses/oop" },
      { title: "File Handling", href: "/courses/file-handling" },
      { title: "Proyek Mini", href: "/courses/proyek-mini" },
    ],
  },
  {
    title: "Playground",
    icon: FlaskConical,
    href: "/playground",
  },
  {
    title: "Pengaturan",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Logout akun",
    icon: LogOutIcon,
    href: "/login",
    onclick: () => {
      // Logout logic here
      signOut();
    },
  },
];

interface SidebarNavigationProps {
  name: string;
  email: string;
  image: string;
  children: React.ReactNode;
  pageTitle?: string;
}

export default function SidebarNavigation({
  name,
  email,
  image,
  children,
  pageTitle = "Dashboard",
}: SidebarNavigationProps) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex h-screen min-w-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-semibold text-xl">PintarPy</span>
              </div>
              <ThemeToggle />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <SidebarMenuButton
                          isActive={pathname.startsWith(item.href)}
                          className="gap-2"
                        >
                          <item.icon className="h-4 w-4" />
                          <Link href={item.href ?? "#"}>{item.title}</Link>
                          <ChevronDown className="ml-auto h-4 w-4" />
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.href}
                              >
                                <Link href={subItem.href}>{subItem.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        onClick={item.onclick}
                        className="gap-2"
                      >
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <div className="mt-auto p-4 border-t">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={image} alt="User" />
                <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">{email}</span>
              </div>
            </div>
          </div>

          <SidebarRail />
        </Sidebar>

        <SidebarInset className="flex flex-col w-full overflow-hidden">
          <header className="h-14 border-b flex items-center px-4 sticky top-0 bg-background z-10 w-full">
            <SidebarTrigger className="mr-2" />
            <div className="flex-1 font-medium">{pageTitle}</div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </header>

          <main className="flex-1 overflow-auto w-full">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
