import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany();

  const response = new NextResponse(
    JSON.stringify({ status: "success", products }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );

  return response;
}
