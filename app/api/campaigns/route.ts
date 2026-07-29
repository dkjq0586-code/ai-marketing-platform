import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      name,
      platform,
      budget,
      startDate,
      endDate,
      status,
      description,
    } = await req.json();

    const campaign = await prisma.campaign.create({
      data: {
        name,
        platform,
        budget: Number(budget),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status,
        description,
      },
    });

    return NextResponse.json(campaign);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "حدث خطأ أثناء حفظ الحملة",
      },
      {
        status: 500,
      }
    );
  }
}