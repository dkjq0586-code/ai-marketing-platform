import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { text, from, to } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
أنت مترجم احترافي.

ترجم النص من اللغة المحددة إلى اللغة المطلوبة.

لا تشرح.
لا تضف أي مقدمة.
أرجع الترجمة فقط.
          `,
        },
        {
          role: "user",
          content: `
الترجمة من:
${from}

إلى:
${to}

النص:
${text}
          `,
        },
      ],
      temperature: 0.2,
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "حدث خطأ أثناء الترجمة",
      },
      {
        status: 500,
      }
    );
  }
}