"use client";

import {useEffect, useState} from "react";
import Head from "next/head";
import {Skeleton} from "./ui/skeleton";

interface PyScriptTerminalProps {
  code?: string; // Bisa menerima kode Python dari props
}

export default function PyScriptTerminal({
  code = 'print("Ayo belajar Python!")', // Default kode jika tidak ada input
}: PyScriptTerminalProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Pastikan PyScript sudah dimuat
    const script = document.createElement("script");
    script.src = "https://pyscript.net/releases/2025.3.1/core.js";
    script.type = "module";
    script.onload = () => {
      setTimeout(() => setLoading(false), 800); // Jeda 0.8 detik sebelum loading selesai
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Tambahkan PyScript ke dalam head */}
      <Head>
        <link
          rel="stylesheet"
          href="https://pyscript.net/releases/2025.3.1/core.css"
        />
      </Head>

      {/* Render PyScript dengan dangerouslySetInnerHTML */}
      {loading ? (
        <>
          <div className="flex flex-col items-center justify-center gap-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div>
            <style>
                /* Styling untuk Editor */
                .mpy-editor-box,
                .py-editor-box {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                    padding: 10px;
                    font-family: "Fira Code", monospace;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                }

                .mpy-editor-input,
                .py-editor-input {
                    position: relative;
                }

                /* Styling untuk Tombol Run */
                .mpy-editor-run-button,
                .py-editor-run-button {
                    bottom: 0.5rem;
                    right: 0rem;
                    display: flex;
                    position: absolute;
                    opacity: 1;
                    transition: opacity 0.25s;
                    z-index: 10;
                    background-color: none;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                }

                .mpy-editor-box:hover .mpy-editor-run-button,
                .mpy-editor-run-button.running,
                .mpy-editor-run-button:focus,
                .py-editor-box:hover .py-editor-run-button,
                .py-editor-run-button.running,
                .py-editor-run-button:focus {
                    opacity: 1 !important;
                }

                /* Styling untuk Output */
                .mpy-editor-output,
                .py-editor-output {
                    white-space: pre;
                    background-color: #333;
                    color: #f8f8f8;
                    padding: 10px;
                    border-radius: 5px;
                    font-family: "Courier New", monospace;
                    margin-top: 10px;
                    overflow-x: auto;
                }
            </style>

            <script type="mpy-editor">
              ${code}
            </script>

            <py-terminal></py-terminal>
            </div>
          `,
          }}
        />
      )}
    </>
  );
}
