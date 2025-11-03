import { NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { OrderConfirmationEmail } from "@/app/email/OrderConfirmationEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const buf = await req.arrayBuffer();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(buf),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const sessionFull = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items", "customer_details"],
    });

    const items =
      sessionFull.line_items?.data.map((item) => ({
        name: item.description ?? "Unknown Item",
        quantity: item.quantity ?? 1,
        price: (item.amount_total ?? 0) / 100,
      })) ?? [];

    const total = (sessionFull.amount_total ?? 0) / 100;
    const email = sessionFull.customer_details?.email!;
    const name = sessionFull.customer_details?.name ?? "Customer";
    const orderId = sessionFull.id;

    await resend.emails.send({
      from: "Your Store <orders@yourdomain.com>",
      to: email,
      subject: `Order Confirmation #${orderId}`,
      react: OrderConfirmationEmail({
        orderId,
        customerName: name,
        items,
        total,
      }),
    });
  }

  return new Response("ok", { status: 200 });
}
