"use client";

import { useState } from "react";

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("1024x1024");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateImage() {
    if (!prompt.trim()) {
      alert("اكتب وصف الصورة أولاً");
      return;
    }

    setLoading(true);

    try {
      const width = size.split("x")[0];
      const height = size.split("x")[1];

      const seed = Math.floor(Math.random() * 2147483647);

      const url =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(
          prompt
        )}?width=${width}&height=${height}&seed=${seed}`;

      console.log("Image URL:", url);

      setImageUrl(url);

    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء إنشاء الصورة");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        🖼️ توليد الصور بالذكاء الاصطناعي
      </h1>

      <div className="bg-white rounded-2xl shadow p-6">

        <label className="font-bold block mb-3">
          وصف الصورة
        </label>

        {/* صندوق التعليمات */}

        <div className="mb-6 rounded-2xl border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
              🌍
            </div>

            <div>

              <h3 className="text-lg font-bold text-gray-800">
                تعليمات مهمة
              </h3>

              <p className="mt-2 text-gray-600 leading-7">
                يجب كتابة وصف الصورة
                <span className="font-bold text-red-600">
                  {" "}باللغة الإنجليزية فقط{" "}
                </span>
                حتى يتمكن الذكاء الاصطناعي من إنشاء الصورة بشكل صحيح.
              </p>

              <div className="mt-4 rounded-xl bg-gray-900 p-4">

                <p className="mb-2 text-sm text-gray-400">
                  مثال:
                </p>

                <code className="text-green-400 break-all">
                  Luxury black smartwatch on white background, professional product photography
                </code>

              </div>

            </div>

          </div>

        </div>

        <textarea
          rows={5}
          className="w-full border rounded-xl p-4"
          placeholder="Write your image description in English..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />


        <button
          onClick={generateImage}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "⏳ جاري التوليد..." : "✨ توليد الصورة"}
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          النتيجة
        </h2>

        <div className="border-2 border-dashed rounded-2xl min-h-[500px] flex items-center justify-center">

          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Generated Image"
              className="rounded-xl max-h-[500px] max-w-full object-contain"
            />
          ) : (
            <span className="text-gray-400">
              ستظهر الصورة هنا
            </span>
          )}

        </div>

      </div>

    </main>
  );
}