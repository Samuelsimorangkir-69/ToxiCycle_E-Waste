import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { KompartemenContent } from "@/components/pages/KompartemenContent";

export const Route = createFileRoute("/kompartemen")({
  head: () => ({
    meta: [
      { title: "Detail Kompartemen — ToxiCycle IoT Admin" },
      { name: "description", content: "Telemetri kapasitas, massa, dan nilai ekonomi tiap kompartemen." },
      { property: "og:title", content: "Detail Kompartemen — ToxiCycle IoT Admin" },
      { property: "og:description", content: "Telemetri kapasitas, massa, dan nilai ekonomi tiap kompartemen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell><KompartemenContent /></AppShell>,
});
