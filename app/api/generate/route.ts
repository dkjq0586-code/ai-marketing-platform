import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      prompt,
      platform,
      tone,
      length,
    } = await req.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "أنت خبير تسويق محترف. أنشئ محتوى تسويقي احترافي باللغة العربية حسب طلب المستخدم.",
            },
            {
              role: "user",
              content: `
أنشئ محتوى تسويقي احترافي.

المنصة:
${platform}

النبرة:
${tone}

طول المحتوى:
${length}

طلب العميل:
${prompt}

اكتب المحتوى فقط بدون أي شرح إضافي.
`,
            },
          ],
          temperature: 0.8,
          max_tokens: 1000,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: data.choices[0].message.content,
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}