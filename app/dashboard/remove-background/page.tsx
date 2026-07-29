"use client";

import { useState } from "react";

export default function RemoveBackgroundPage() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function removeBackground() {
    if (!image) {
      alert("اختر صورة أولاً");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("/api/remove-background", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.url) {
        setResult(data.url);
      } else {
        alert("حدث خطأ");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        🎨 إزالة خلفية الصور
      </h1>

      <div className="bg-white rounded-2xl shadow p-8">

        <label className="border-2 border-dashed rounded-xl p-10 flex flex-col items-center cursor-pointer hover:border-blue-500 transition">

          <span className="text-6xl">
            📷
          </span>

          <span className="mt-4 text-xl font-bold">
            اختر صورة
          </span>

          <span className="text-gray-500">
            JPG - PNG - WEBP
          </span>

          {image && (
            <span className="mt-3 text-green-600 font-bold">
              ✅ {image.name}
            </span>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) {
                setImage(e.target.files[0]);
              }
            }}
          />

        </label>

        <button
          onClick={removeBackground}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "⏳ جاري إزالة الخلفية..." : "✨ إزالة الخلفية"}
        </button>

      </div>

      {result && (

        <div className="bg-white rounded-2xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            النتيجة
          </h2>

          <img
            src={result}
            className="rounded-xl max-h-[500px]"
          />

          <a
            href={result}
            download
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            📥 تحميل الصورة
          </a>

        </div>

      )}

    </main>
  );
}