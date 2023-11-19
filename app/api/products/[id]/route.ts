import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();

    const quantity = parseInt(data);

    const product = await prisma.product.findUnique({
      where: { id: params.id },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: quantity,
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price! * 100),
        },
      },
    ];

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/products/${params.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      metadata: {
        productId: product.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("[COURSE_ID_CHECKOUT] ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
    });

    if (!product) {
      return new NextResponse("Course not found", { status: 404 });
    }

    return NextResponse.json({ data: product });
  } catch (error) {
    console.log("[COURSE_ID_CHECKOUT] ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
