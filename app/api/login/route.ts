import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "البريد الإلكتروني غير موجود" },
        { status: 400 }
      );
    }
if (!user.password) {
  return Response.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}

const validPassword = await bcrypt.compare(
  password,
  user.password
);

    if (!validPassword) {
      return NextResponse.json(
        { error: "كلمة المرور غير صحيحة" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ في تسجيل الدخول" },
      { status: 500 }
    );
  }
}