import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { revalidated: false, message: "SANITY_WEBHOOK_SECRET no configurado" },
      { status: 500 },
    );
  }

  const signature = request.headers.get(SIGNATURE_HEADER_NAME) ?? "";
  const body = await request.text();

  const valid = await isValidSignature(body, signature, secret);
  if (!valid) {
    return NextResponse.json(
      { revalidated: false, message: "Firma inválida" },
      { status: 401 },
    );
  }

  revalidatePath("/", "page");
  return NextResponse.json({ revalidated: true });
}