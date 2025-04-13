import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import slugify from "slugify";
import { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
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

  // only spesific user can access this route
  if (session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return NextResponse.redirect(
      "/error?title=Unauthorized&message=Anda tidak memiliki akses ke halaman ini.&code=401&showRefresh=false&returnUrl=/"
    );
  }

  try {
    const body = await req.json();
    const { title, content, imgLink } = body;

    // API untuk menambahkan post baru
    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Judul dan konten tidak boleh kosong.",
          code: 400,
        },
        { status: 400 }
      );
    }

    await prisma.blogPost.create({
      data: {
        title,
        slug: slugify(title, {
          lower: true,
        }),
        content,
        imgLink: imgLink || null,
      },
    });

    return NextResponse.json(
      { success: true, message: "Blog post berhasil ditambahkan." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Internal server error:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Record not found" },
          { status: 404 }
        );
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { message: "Slug must be unique" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: `Error: ${
          error instanceof Error ? error.message : "Internal server error."
        }`,
        code: 500,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
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

  // only spesific user can access this route
  if (session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return NextResponse.redirect(
      "/error?title=Unauthorized&message=Anda tidak memiliki akses ke halaman ini.&code=401&showRefresh=false&returnUrl=/"
    );
  }

  try {
    const body = await req.json();
    const { id, title, content, imgLink } = body;

    if (!id || !title || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Judul dan konten tidak boleh kosong.",
          code: 400,
        },
        { status: 400 }
      );
    }

    // Update post
    await prisma.blogPost.update({
      where: {
        id,
      },
      data: {
        title,
        slug: slugify(title, {
          lower: true,
        }),
        content,
        imgLink: imgLink || null,
      },
    });

    return NextResponse.json(
      { success: true, message: "Blog post berhasil diupdate." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Internal server error:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Record not found" },
          { status: 404 }
        );
      }
      if (error.code === "P2002") {
        return NextResponse.json(
          { message: "Slug must be unique" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: `Error: ${
          error instanceof Error ? error.message : "Internal server error."
        }`,
        code: 500,
      },
      { status: 500 }
    );
  }
}
