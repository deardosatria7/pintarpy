import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PintarPy",
    short_name: "PintarPy",
    description: "Platform belajar Python dengan intergated IDE.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/pintarpy-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pintarpy-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
