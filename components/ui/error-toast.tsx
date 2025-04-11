"use client";

import type { FC } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorToastProps {
  title?: string;
  description: string;
  /**
   * Optional action button configuration
   */
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Shows an error toast notification using Sonner
 */
export const showErrorToast = ({
  title = "Error",
  description,
  action,
}: ErrorToastProps) => {
  toast.error(title, {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    className: "border-destructive bg-destructive/10 text-destructive",
  });
};

/**
 * Error toast component for displaying inline error messages
 */
export const ErrorToast: FC<ErrorToastProps & { className?: string }> = ({
  title = "Error",
  description,
  action,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-2 rounded-md border border-destructive bg-destructive/10 p-4 text-destructive",
        className
      )}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium">{title}</p>
          <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full">
            <X className="h-3 w-3" />
          </Button>
        </div>
        <p className="mt-1 text-sm text-destructive/90">{description}</p>
      </div>
      {action && (
        <Button variant="outline" size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
};
