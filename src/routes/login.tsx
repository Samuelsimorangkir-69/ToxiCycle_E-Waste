import { createFileRoute } from "@tanstack/react-router";
import { LoginContent } from "@/components/pages/LoginContent";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Masuk Admin — ToxiCycle IoT" },
      { name: "description", content: "Masuk ke konsol web admin ToxiCycle Smart E-Waste." },
      { property: "og:title", content: "Masuk Admin — ToxiCycle IoT" },
      { property: "og:description", content: "Masuk ke konsol web admin ToxiCycle Smart E-Waste." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginContent,
});
