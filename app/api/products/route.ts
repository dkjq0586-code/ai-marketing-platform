import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء جلب المنتجات" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const {
      name,
      price,
      category,
      description,
      image,
    } = await req.json();

    const product = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        category,
        description,
        image,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء إضافة المنتج" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const {
      id,
      name,
      price,
      category,
      description,
      image,
    } = await req.json();

    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        price: Number(price),
        category,
        description,
        image,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء تعديل المنتج" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.product.delete({
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
      { error: "حدث خطأ أثناء حذف المنتج" },
      { status: 500 }
    );
  }
}