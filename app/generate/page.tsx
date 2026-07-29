"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState("Facebook");
  const [tone, setTone] = useState("احترافية");
  const [length, setLength] = useState("متوسط");
  const [language, setLanguage] = useState("العربية");

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        {/* Header */}

        <div className="text-center mb-12">

          <h1 className="text-5xl font-extrabold text-blue-600">
            ✨ إنشاء محتوى بالذكاء الاصطناعي
          </h1>

          <p className="text-gray-500 text-lg mt-4">
            اكتب فكرتك وسيقوم الذكاء الاصطناعي بإنشاء محتوى احترافي خلال ثوانٍ.
          </p>

        </div>

        {/* نوع المحتوى */}

        <div className="mb-6">

          <label className="block mb-3 font-bold text-lg">
            📂 نوع المحتوى
          </label>

          <select className="w-full border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none">

            <option>📱 منشور سوشيال ميديا</option>

            <option>🛒 وصف منتج</option>

            <option>📢 إعلان تسويقي</option>

            <option>📧 رسالة بريد إلكتروني</option>

          </select>

        </div>

        {/* الوصف */}

        <div className="mb-6">

          <label className="block mb-3 font-bold text-lg">
            📝 صف ما تريد إنشاءه
          </label>

          <textarea
            rows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="مثال:

اكتب منشورًا لفيسبوك للترويج لمقهى جديد مع عرض خصم 30٪ لمدة أسبوع."
            className="w-full border rounded-2xl p-5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="flex justify-between mt-2 text-sm text-gray-500">

            <span>{prompt.length} حرف</span>

            <button
              type="button"
              onClick={() => setPrompt("")}
              className="text-red-500 hover:text-red-700"
            >
              مسح
            </button>

          </div>

        </div>

        {/* أمثلة */}

        <div className="mb-8">

          <p className="font-bold text-lg mb-4">
            💡 أمثلة سريعة
          </p>

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() =>
                setPrompt("اكتب منشورًا احترافيًا لمطعم جديد مع عرض خصم 30٪.")
              }
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              🍔 منشور مطعم
            </button>

            <button
              type="button"
              onClick={() =>
                setPrompt("اكتب وصفًا احترافيًا لحذاء رياضي جديد.")
              }
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              👟 وصف منتج
            </button>

            <button
              type="button"
              onClick={() =>
                setPrompt("اكتب إعلانًا احترافيًا لعطر فاخر.")
              }
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              💎 إعلان
            </button>

            <button
              type="button"
              onClick={() =>
                setPrompt("اكتب رسالة ترحيب احترافية للعملاء.")
              }
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              💬 رسالة عميل
            </button>

          </div>

        </div>
                {/* المنصة */}

        <div className="mb-6">

          <label className="block mb-3 font-bold text-lg">
            📱 المنصة
          </label>

          <select
  value={platform}
  onChange={(e) => setPlatform(e.target.value)}
  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
>

            <option>Facebook</option>

            <option>Instagram</option>

            <option>X (Twitter)</option>

            <option>LinkedIn</option>

            <option>TikTok</option>

          </select>

        </div>

        {/* نبرة الكتابة */}

        <div className="mb-6">

          <label className="block mb-3 font-bold text-lg">
            😊 نبرة الكتابة
          </label>

          <select
  value={tone}
  onChange={(e) => setTone(e.target.value)}
  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
>

            <option>احترافية</option>

            <option>ودية</option>

            <option>تسويقية</option>

            <option>رسمية</option>

            <option>إبداعية</option>

            <option>مرحة</option>

          </select>

        </div>

        {/* طول المحتوى */}

        <div className="mb-8">

          <label className="block mb-3 font-bold text-lg">
            📏 طول المحتوى
          </label>

<select
  value={length}
  onChange={(e) => setLength(e.target.value)}
  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
>
            <option>قصير</option>

            <option>متوسط</option>

            <option>طويل</option>

          </select>

        </div>

        {/* زر الإنشاء */}

        <button
          onClick={async () => {

            if (!prompt.trim()) return;

            setLoading(true);

            setResult("");

            try {

              const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
body: JSON.stringify({
  prompt,
  platform,
  tone,
  length,
}),
              });
const data = await res.json();

console.log(data);

setResult(data.result);

            } catch (error) {

              console.error(error);

              setResult("❌ حدث خطأ أثناء إنشاء المحتوى.");

            }

            setLoading(false);

          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold shadow-lg transition"
        >

          {loading
            ? "⏳ جاري إنشاء المحتوى..."
            : "✨ إنشاء المحتوى الآن"}

        </button>
                {/* النتيجة */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            📄 المحتوى الذي تم إنشاؤه
          </h2>

          <div className="bg-gray-50 border rounded-2xl p-6 min-h-[250px] whitespace-pre-wrap text-gray-700 leading-8">

            {result ? (
              result
            ) : (
              <div className="flex items-center justify-center h-[200px] text-gray-400 text-lg">
                سيظهر المحتوى هنا بعد الإنشاء...
              </div>
            )}

          </div>

          {/* الأزرار */}

          {result && (

            <div className="flex flex-wrap gap-4 mt-6">

              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
              >
                📋 نسخ
              </button>

              <button
                onClick={() => {

                  const blob = new Blob([result], {
                    type: "text/plain",
                  });

                  const url = URL.createObjectURL(blob);

                  const a = document.createElement("a");

                  a.href = url;

                  a.download = "content.txt";

                  a.click();

                  URL.revokeObjectURL(url);

                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
              >
                📥 تنزيل
              </button>

              <button
                onClick={() => {

                  setResult("");

                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
              >
                🔄 إعادة التوليد
              </button>

            </div>

          )}

        </div>

      </div>

    </main>

  );

}