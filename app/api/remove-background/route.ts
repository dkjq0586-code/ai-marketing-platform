import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const image = form.get("image") as File;

    if (!image) {
      return NextResponse.json(
        { error: "لا توجد صورة" },
        { status: 400 }
      );
    }

    const body = new FormData();

    body.append("image_file", image);
    body.append("size", "auto");

    const response = await fetch(
      "https://api.remove.bg/v1.0/removebg",
      {
        method: "POST",
        headers: {
          "X-Api-Key": process.env.REMOVE_BG_API_KEY!,
        },
        body,
      }
    );

    if (!response.ok) {
      const text = await response.text();

      console.log("REMOVE.BG RESPONSE:");
      console.log(text);

      return NextResponse.json(
        { error: text },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const base64 =
      "data:image/png;base64," +
      buffer.toString("base64");

    return NextResponse.json({
      url: base64,
    });

  } catch (err: any) {
    console.error("REMOVE BG ERROR:");
    console.error(err);

    return NextResponse.json(
      {
        error: err?.message || String(err),
      },
      {
        status: 500,
      }
    );
  }
}