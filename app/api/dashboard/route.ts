import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.customer.count();

  const products = await prisma.product.count();

  const campaigns = await prisma.campaign.count();

  return NextResponse.json({
    users,
    products,
    campaigns,
  });
}