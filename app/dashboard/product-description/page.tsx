"use client";

import { useState } from "react";

export default function ProductDescriptionPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateDescription() {
    if (!name || !description) {
      alert("املأ جميع الحقول");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/product-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const data = await res.json();

      setResult(data.result);
    } catch (error) {
      console.error(error);
      alert("حدث خطأ");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        📦 تحسين وصف المنتجات
      </h1>

      <div className="bg-white rounded-2xl shadow p-8">

        <label className="font-bold">
          اسم المنتج
        </label>

        <input
          className="w-full border rounded-xl p-3 mt-2 mb-6"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="مثال: سماعة بلوتوث"
        />

        <label className="font-bold">
          الوصف الحالي
        </label>

        <textarea
          rows={6}
          className="w-full border rounded-xl p-4 mt-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="اكتب وصف المنتج..."
        />

        <button
          onClick={generateDescription}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "⏳ جاري التحسين..." : "✨ تحسين الوصف"}
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          الوصف الاحترافي
        </h2>

        <textarea
          value={result}
          readOnly
          rows={12}
          className="w-full border rounded-xl p-4 bg-gray-50"
        />

        {result && (
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            📋 نسخ الوصف
          </button>
        )}

      </div>

    </main>
  );
}