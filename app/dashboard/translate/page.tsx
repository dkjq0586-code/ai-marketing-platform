"use client";

import { useState } from "react";

export default function TranslatePage() {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("العربية");
  const [to, setTo] = useState("الإنجليزية");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function translate() {
    if (!text) {
      alert("اكتب النص أولاً");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          from,
          to,
        }),
      });

      const data = await res.json();

      setResult(data.result);

    } catch (err) {
      console.error(err);
      alert("حدث خطأ");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        🌍 الترجمة
      </h1>

      <div className="bg-white rounded-2xl shadow p-8">

        <textarea
          rows={8}
          className="w-full border rounded-xl p-4"
          placeholder="اكتب النص هنا..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">

          <select
            className="border rounded-xl p-3"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option>العربية</option>
            <option>الإنجليزية</option>
            <option>الفرنسية</option>
            <option>الإسبانية</option>
            <option>الألمانية</option>
          </select>

          <select
            className="border rounded-xl p-3"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option>الإنجليزية</option>
            <option>العربية</option>
            <option>الفرنسية</option>
            <option>الإسبانية</option>
            <option>الألمانية</option>
          </select>

        </div>

        <button
          onClick={translate}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "⏳ جاري الترجمة..." : "✨ ترجمة"}
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          النتيجة
        </h2>

        <textarea
          rows={10}
          readOnly
          value={result}
          className="w-full border rounded-xl p-4 bg-gray-50"
        />

        {result && (
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            📋 نسخ
          </button>
        )}

      </div>

    </main>
  );
}