import { createServerFn } from "@tanstack/react-start";

// Demo admin check runs on the server. Replace with real accounts later.
export const loginAdmin = createServerFn({ method: "POST" })
  .inputValidator((d: { email: string; password: string }) => d)
  .handler(async ({ data }) => {
    const ok = data.email.trim().toLowerCase() === "admin@toxicycle.id" && data.password === "admin123";
    return ok
      ? { ok: true as const, message: "" }
      : { ok: false as const, message: "Email atau kata sandi salah." };
  });
