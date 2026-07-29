import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "لم يتم اختيار صورة" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName =
      Date.now() + "-" + file.name.replace(/\s/g, "-");

    const uploadPath = path.join(
      process.cwd(),
      "public/uploads",
      fileName
    );

    await writeFile(uploadPath, buffer);

    return NextResponse.json({
      success: true,
      url: "/uploads/" + fileName,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "فشل رفع الصورة" },
      { status: 500 }
    );
  }
}