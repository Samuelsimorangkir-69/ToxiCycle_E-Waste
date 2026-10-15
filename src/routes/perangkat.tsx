import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PerangkatContent } from "@/components/pages/PerangkatContent";

export const Route = createFileRoute("/perangkat")({
  head: () => ({
    meta: [
      { title: "Device Management — ToxiCycle IoT Admin" },
      { name: "description", content: "Diagnostik, kalibrasi load cell, dan status hardware drop-box." },
      { property: "og:title", content: "Device Management — ToxiCycle IoT Admin" },
      { property: "og:description", content: "Diagnostik, kalibrasi load cell, dan status hardware drop-box." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell><PerangkatContent /></AppShell>,
});
