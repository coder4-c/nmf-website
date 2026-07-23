import { NextResponse } from "next/server";

// STUB ENDPOINT: validates and logs the intake submission.
// Contains health/nutrition information - before going live, route this
// somewhere that meets the confidentiality commitments in the Privacy
// Policy (e.g. an encrypted DB write, not a plain email).
export async function POST(request: Request) {
  const data = await request.json();

  if (!data.fullName || !data.email || !data.agree) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and agreement acknowledgment are required." },
      { status: 400 }
    );
  }

  console.log("New client intake submitted:", data);

  return NextResponse.json({ ok: true });
}
