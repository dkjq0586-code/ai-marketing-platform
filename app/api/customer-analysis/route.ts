import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const {
      customers,
      newCustomers,
      returningCustomers,
      orders,
      sales,
      averageOrder,
    } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
أنت خبير تسويق وتحليل بيانات.

حلل بيانات العملاء وأعط تقريرًا احترافيًا باللغة العربية.

يجب أن يحتوي التقرير على:

- ملخص عام.
- نقاط القوة.
- نقاط الضعف.
- اقتراحات لتحسين المبيعات.
- اقتراحات لزيادة العملاء العائدين.
- اقتراحات لحملات تسويقية.
- خاتمة قصيرة.

اجعل التقرير منظمًا وواضحًا.
          `,
        },
        {
          role: "user",
          content: `
عدد العملاء: ${customers}

العملاء الجدد: ${newCustomers}

العملاء العائدون: ${returningCustomers}

عدد الطلبات: ${orders}

إجمالي المبيعات: ${sales}

متوسط قيمة الطلب: ${averageOrder}
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
        error: "حدث خطأ أثناء التحليل",
      },
      {
        status: 500,
      }
    );
  }
}