// lib/actions/sessions.ts

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { auth } from "../auth";

// =======================
// CORE SESSION FUNCTION
// =======================
export async function getSessionFromHeaders(headers: Headers) {
  return auth.api.getSession({ headers });
}

// =======================
// GET SESSION FOR SSR PAGES (tanpa redirect)
// =======================
export async function getSession() {
  const cookieStore = await cookies();

  return getSessionFromHeaders(
    new Headers({
      cookie: cookieStore.toString(),
    })
  );
}

// =======================
// GET SESSION FOR SSR PAGES (redirect ke /login kalau kosong)
// =======================
export async function getUserSessionSSR() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}

// =======================
// GET SESSION FOR API ROUTE (route.ts)
// =======================
export async function getUserSessionAPI(req: NextRequest) {
  return getSessionFromHeaders(req.headers);
}
