import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, phone, company } = await req.json();

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        company,
      },
    });

    return NextResponse.json(customer);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء إضافة العميل" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(customers);
}

export async function PUT(req: Request) {
  try {
    const { id, name, email, phone, company } = await req.json();

    const customer = await prisma.customer.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        company,
      },
    });

    return NextResponse.json(customer);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء تعديل العميل" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.customer.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء الحذف" },
      { status: 500 }
    );
  }
}