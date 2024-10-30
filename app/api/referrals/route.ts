import { Referral } from "@/app/types/referral.types";
import { NextResponse } from "next/server";
import { addReferral, getAllReferrals } from "../../../lib/dataStore";

export async function GET() {
  const referrals = await getAllReferrals();
  return NextResponse.json(referrals);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newReferral = await addReferral(body);
  return NextResponse.json(newReferral, { status: 201 });
}
