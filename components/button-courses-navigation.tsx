"use client";

import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function PrevButton({
  onClick,
  disabled = false,
  className = "",
  variant = "default",
  href = "#",
}: {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
    >
      <Link href={href} className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        Sebelumnya
      </Link>
    </Button>
  );
}

export function NextButton({
  onClick,
  disabled = false,
  isLoading = false,
  className = "",
  variant = "default",
  href = "#",
}: {
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  href?: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={className}
      variant={variant}
    >
      <Link href={href} className="flex items-center gap-2">
        {isLoading ? "Loading..." : "Selanjutnya"}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export function NextCourseButton({
  onClick,
  disabled = false,
  isLoading = false,
  className = "",
  variant = "default",
  href = "#",
}: {
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  href?: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={className}
      variant={variant}
    >
      <Link href={href} className="flex items-center gap-2">
        {isLoading ? "Loading..." : "Materi Selanjutnya"}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
