import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { name, description } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "أنت خبير تسويق إلكتروني. قم بتحويل أوصاف المنتجات إلى أوصاف احترافية وجذابة باللغة العربية مع إبراز المميزات وإضافة نقاط تسويقية دون المبالغة.",
        },
        {
          role: "user",
          content: `
اسم المنتج:
${name}

الوصف الحالي:
${description}

اكتب وصفًا احترافيًا جاهزًا للمتاجر الإلكترونية.
          `,
        },
      ],
      temperature: 0.8,
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "حدث خطأ أثناء تحسين الوصف",
      },
      {
        status: 500,
      }
    );
  }
}