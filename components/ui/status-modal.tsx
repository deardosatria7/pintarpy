"use client";

import {
  type FC,
  type ReactNode,
  useState,
  createContext,
  useContext,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Modal types
export type ModalType = "success" | "warning" | "error";

// Modal configuration
export interface ModalConfig {
  title?: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
}

// Context for modal state
interface ModalContextType {
  showModal: (type: ModalType, config: ModalConfig) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modal Provider component
export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("success");
  const [config, setConfig] = useState<ModalConfig>({
    title: "",
    description: "",
    confirmLabel: "OK",
    cancelLabel: "Cancel",
    showCancel: false,
  });

  const showModal = (type: ModalType, config: ModalConfig) => {
    setModalType(type);
    setConfig({
      ...config,
      confirmLabel: config.confirmLabel || "OK",
      cancelLabel: config.cancelLabel || "Cancel",
      showCancel:
        config.showCancel !== undefined
          ? config.showCancel
          : type === "warning",
    });
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <StatusModal
        open={open}
        onOpenChange={setOpen}
        type={modalType}
        {...config}
      />
    </ModalContext.Provider>
  );
};

// Hook to use the modal
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// Modal component props
interface StatusModalProps extends ModalConfig {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: ModalType;
}

// Helper function to get modal styles based on type
const getModalStyles = (type: ModalType) => {
  switch (type) {
    case "success":
      return {
        icon: (
          <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400" />
        ),
        headerClass:
          "bg-green-50 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/30",
        iconContainerClass:
          "bg-green-100 dark:bg-green-900/40 ring-4 ring-green-50 dark:ring-green-900/20",
        buttonClass:
          "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white",
        titleClass: "text-green-800 dark:text-green-300",
      };
    case "warning":
      return {
        icon: (
          <AlertTriangle className="h-6 w-6 text-amber-500 dark:text-amber-400" />
        ),
        headerClass:
          "bg-amber-50 dark:bg-amber-950/30 border-b border-amber-100 dark:border-amber-900/30",
        iconContainerClass:
          "bg-amber-100 dark:bg-amber-900/40 ring-4 ring-amber-50 dark:ring-amber-900/20",
        buttonClass:
          "bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white",
        titleClass: "text-amber-800 dark:text-amber-300",
      };
    case "error":
      return {
        icon: <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />,
        headerClass:
          "bg-red-50 dark:bg-red-950/30 border-b border-red-100 dark:border-red-900/30",
        iconContainerClass:
          "bg-red-100 dark:bg-red-900/40 ring-4 ring-red-50 dark:ring-red-900/20",
        buttonClass:
          "bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white",
        titleClass: "text-red-800 dark:text-red-300",
      };
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: {
      duration: 0.2,
    },
  },
};

// Status Modal Component
export const StatusModal: FC<StatusModalProps> = ({
  open,
  onOpenChange,
  type,
  title,
  description,
  confirmLabel = "OK",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  showCancel = false,
}) => {
  const styles = getModalStyles(type);

  // Default titles based on type if not provided
  const defaultTitles = {
    success: "Berhasil",
    warning: "Perhatian",
    error: "Terjadi Kesalahan",
  };

  const modalTitle = title || defaultTitles[type];

  const handleConfirm = () => {
    onOpenChange(false);
    if (onConfirm) onConfirm();
  };

  const handleCancel = () => {
    onOpenChange(false);
    if (onCancel) onCancel();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md p-0 gap-0 border-0 shadow-xl dark:shadow-2xl dark:bg-gray-900 overflow-hidden"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="flex flex-col"
        >
          <DialogHeader
            className={cn(
              "p-6 flex flex-row items-start gap-4",
              styles.headerClass
            )}
          >
            <div className={cn("p-2 rounded-full", styles.iconContainerClass)}>
              {styles.icon}
            </div>
            <div className="flex-1">
              <DialogTitle
                className={cn("text-lg font-semibold", styles.titleClass)}
              >
                {modalTitle}
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter className="p-4 sm:p-6 pt-2 sm:justify-end gap-3 bg-white dark:bg-gray-900">
            {showCancel && (
              <Button
                variant="outline"
                onClick={handleCancel}
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {cancelLabel}
              </Button>
            )}
            <Button
              className={cn(
                styles.buttonClass,
                "transition-all duration-200 shadow-sm hover:shadow"
              )}
              onClick={handleConfirm}
            >
              {confirmLabel}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

// Standalone functions to show modals without context
export const showSuccessModal = (config: ModalConfig) => {
  const modal = document.createElement("div");
  modal.id = "success-modal-container";
  document.body.appendChild(modal);

  const cleanup = () => {
    document.body.removeChild(modal);
  };

  // This is a simplified version - in a real app you'd use ReactDOM.render or similar
  // This is just to illustrate the concept
  console.log("Success modal would show with config:", config);

  return cleanup;
};

export const showWarningModal = (config: ModalConfig) => {
  console.log("Warning modal would show with config:", config);
};

export const showErrorModal = (config: ModalConfig) => {
  console.log("Error modal would show with config:", config);
};
