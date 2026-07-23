import { NextResponse } from "next/server";

// STUB ENDPOINT: validates and logs the application.
// Wire this up to real delivery before launch - e.g. send via an email
// provider (Resend/SendGrid), push to a CRM, or write to MongoDB the same
// way the e-commerce project connects to Atlas.
export async function POST(request: Request) {
  const data = await request.json();

  if (!data.fullName || !data.email) {
    return NextResponse.json(
      { ok: false, error: "Full name and email are required." },
      { status: 400 }
    );
  }

  console.log("New Start Your Mission application:", data);

  return NextResponse.json({ ok: true });
}
