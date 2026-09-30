import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      verification,
      session,
      account,
    },
  }),
  // Login email/password dibuka supaya akun finance-zenio bisa dipakai di sini (tabel user-nya
  // sama), tapi daftarnya ditutup: email tidak diverifikasi, jadi siapa pun bisa mendaftar dengan
  // email orang lain lalu ikut masuk setelah pemiliknya login Google/GitHub (auto-link).
  // Harus sama dengan finance-zenio.
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    },
    github: {
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    },
  },
  // Satu email = satu user, walaupun login lewat provider berbeda.
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
});
