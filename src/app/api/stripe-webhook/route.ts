import { NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export const runtime = "nodejs";

// ---- Setup Stripe & Resend ----

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const resendApiKey = process.env.RESEND_API_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}
if (!stripeWebhookSecret) {
  throw new Error("Missing STRIPE_WEBHOOK_SECRET");
}
if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-08-27.basil",
});

const resend = new Resend(resendApiKey);

// ---- Webhook handler ----

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    console.error("❌ Missing stripe-signature header");
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  const buf = await req.arrayBuffer();
  let event: Stripe.Event;

  // Verify Stripe signature
  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(buf),
      sig,
      stripeWebhookSecret!
    );
  } catch (err: any) {
    console.error("❌ Stripe signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log("✅ Stripe webhook received:", event.type);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log("💰 Checkout completed:", session.id);
    console.log(
      "Customer email from Stripe:",
      session.customer_details?.email || "(none)"
    );

    try {
      // 🔥 SIMPLE RESEND TEST:
      // Always send to YOUR Gmail for now
      const { data, error } = await resend.emails.send({
        from: "Jobobike <onboarding@resend.dev>", // safe test sender
        to: ["kashankhalid429@gmail.com"],        // 👈 your test email
        subject: `New Stripe order (${session.id})`,
        text:
          `A new Stripe checkout was completed.\n\n` +
          `Session ID: ${session.id}\n` +
          `Customer email: ${session.customer_details?.email ?? "unknown"}\n` +
          `Amount total: ${(session.amount_total ?? 0) / 100} NOK`,
      });

      if (error) {
        console.error("❌ Resend returned error:", error);
        // 500 so you SEE the failure clearly in Stripe webhook logs while testing
        return new Response("Resend email error", { status: 500 });
      }

      console.log("📨 Resend email sent. Data:", data);
    } catch (err) {
      console.error("❌ Resend threw an exception:", err);
      return new Response("Resend exception", { status: 500 });
    }
  }

  return new Response("OK", { status: 200 });
}
