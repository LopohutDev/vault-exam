import { NextResponse } from "next/server";
import { deleteReferral, updateReferral } from "../../../../lib/dataStore";

export async function PUT(req: Request, context: { params: { id: string } }) {
  const { id: idParam } = await context.params;
  const id = parseInt(idParam, 10);
  const body = await req.json();

  const updatedReferral = await updateReferral(id, body);

  if (!updatedReferral) {
    return NextResponse.json({ error: "Referral not found" }, { status: 404 });
  }

  return NextResponse.json(updatedReferral, { status: 200 });
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
  const { id: idParam } = await context.params;
  const id = parseInt(idParam, 10);

  console.log(id);

  const deletedReferral = await deleteReferral(id);

  if (!deletedReferral) {
    return NextResponse.json({ error: "Referral not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Referral deleted successfully" },
    { status: 200 }
  );
}
