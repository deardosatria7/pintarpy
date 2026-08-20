// app/api/fetch-user-data/route.ts
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { user } from "@/db/schema";
import { getUserSessionAPI } from "@/lib/actions/sessions";

export async function GET(req: NextRequest) {
  const session = await getUserSessionAPI(req);

  if (!session || !session.user) {
    return NextResponse.json(
      {
        success: false,
        title: "Unauthorized",
        message: "Data user tidak ditemukan! Apakah Anda sudah login?",
        code: 401,
      },
      { status: 401 }
    );
  }

  try {
    const [currentUser] = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
      })
      .from(user)
      .where(eq(user.email, session.user.email))
      .limit(1);

    if (!currentUser) {
      return NextResponse.json(
        {
          success: false,
          title: "Not Found",
          message: "User tidak ditemukan di database.",
          code: 404,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: currentUser },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        title: "Internal Server Error",
        message: "Terjadi kesalahan saat mengambil data user.",
        code: 500,
      },
      { status: 500 }
    );
  }
}
