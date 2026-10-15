import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { MitraContent } from "@/components/pages/MitraContent";

export const Route = createFileRoute("/mitra")({
  head: () => ({
    meta: [
      { title: "Mitra & Logistik — ToxiCycle IoT Admin" },
      { name: "description", content: "Direktori kontak mitra penampung limbah e-waste resmi." },
      { property: "og:title", content: "Mitra & Logistik — ToxiCycle IoT Admin" },
      { property: "og:description", content: "Direktori kontak mitra penampung limbah e-waste resmi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell><MitraContent /></AppShell>,
});
