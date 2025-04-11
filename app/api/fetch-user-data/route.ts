// app/api/fetch-user-data/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await auth();

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
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email ?? undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
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

    return NextResponse.json({ success: true, data: user }, { status: 200 });
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
