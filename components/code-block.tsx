"use client";

import { useState, useRef } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "python",
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    if (!codeRef.current) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Split code into lines for line numbering
  const codeLines = code.split("\n");

  // 1️⃣ Handler untuk buka tab baru
  const openTerminal = () => {
    // encode kode menjadi Base64 supaya aman di URL
    const encoded = btoa(code);
    // buka tab baru ke dynamic route /terminal?code=[encoded]
    window.open(`/terminal?code=${encoded}`, "_blank");
  };

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900",
        className
      )}
    >
      {/* Language badge */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {language}
        </span>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={{
                    pathname: "/terminal",
                  }}
                  target="_blank"
                  passHref
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={openTerminal}
                    className="flex items-center hover:cursor-pointer gap-1 text-sm h-8 px-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Terminal size={16} className="text-purple-500" />
                    <span>Terminal</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Buka terminal Python</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Code content */}
      <div className="relative overflow-x-auto p-4">
        {/* Desktop copy button - visible only on screens > sm */}
        <button
          onClick={copyToClipboard}
          className="flex absolute top-3 right-3 p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
          aria-label={copied ? "Kode disalin" : "Salin kode"}
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} />
          )}
        </button>

        <pre
          ref={codeRef}
          className="font-mono text-sm text-gray-800 dark:text-gray-200"
        >
          <code>
            {showLineNumbers ? (
              <table className="border-collapse">
                <tbody>
                  {codeLines.map((line, i) => (
                    <tr key={i} className="leading-relaxed">
                      <td className="pr-4 text-right select-none text-gray-400 dark:text-gray-600">
                        {i + 1}
                      </td>
                      <td className="whitespace-pre">{line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="whitespace-pre">{code}</div>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
