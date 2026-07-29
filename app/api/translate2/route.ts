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

ترجم النص فقط.

لا تضف أي شرح.
لا تضف علامات تنصيص.
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
      temperature: 0,
    });

    return NextResponse.json({
      result: completion.choices[0].message.content?.trim(),
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Translation failed",
      },
      {
        status: 500,
      }
    );
  }
}