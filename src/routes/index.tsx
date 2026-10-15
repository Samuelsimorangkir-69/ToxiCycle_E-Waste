import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { DashboardContent } from "@/components/pages/DashboardContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — ToxiCycle IoT Admin" },
      { name: "description", content: "Monitoring smart drop-box e-waste ToxiCycle secara realtime." },
      { property: "og:title", content: "Dashboard — ToxiCycle IoT Admin" },
      { property: "og:description", content: "Monitoring smart drop-box e-waste ToxiCycle secara realtime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AppShell><DashboardContent /></AppShell>,
});
