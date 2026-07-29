"use client";

import { useState } from "react";

export default function CreateCampaignPage() {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("Facebook");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("نشطة");
  const [description, setDescription] = useState("");
async function saveCampaign() {
  if (
    !name ||
    !platform ||
    !budget ||
    !startDate ||
    !endDate
  ) {
    alert("يرجى تعبئة جميع الحقول المطلوبة");
    return;
  }

  try {
    const response = await fetch("/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        platform,
        budget,
        startDate,
        endDate,
        status,
        description,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "فشل حفظ الحملة");
    }

    alert("✅ تم إنشاء الحملة بنجاح");

window.location.href = "/dashboard/campaigns2";

  } catch (error) {
    console.error(error);
    alert("❌ حدث خطأ أثناء حفظ الحملة");
  }
}

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        ➕ إنشاء حملة جديدة
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <label className="font-bold">
          اسم الحملة
        </label>

        <input
          className="w-full border rounded-xl p-3 mt-2 mb-6"
          placeholder="مثال: حملة الجمعة البيضاء"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="font-bold">
          المنصة
        </label>

        <select
          className="w-full border rounded-xl p-3 mt-2 mb-6"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Google Ads</option>
          <option>TikTok</option>
          <option>LinkedIn</option>
        </select>

        <label className="font-bold">
          الميزانية ($)
        </label>

        <input
          type="number"
          className="w-full border rounded-xl p-3 mt-2 mb-6"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-bold">
              تاريخ البداية
            </label>

            <input
              type="date"
              className="w-full border rounded-xl p-3 mt-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="font-bold">
              تاريخ النهاية
            </label>

            <input
              type="date"
              className="w-full border rounded-xl p-3 mt-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

        </div>

        <div className="mt-6">

          <label className="font-bold">
            الحالة
          </label>

          <select
            className="w-full border rounded-xl p-3 mt-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>نشطة</option>
            <option>مجدولة</option>
            <option>متوقفة</option>
            <option>منتهية</option>
          </select>

        </div>

        <div className="mt-6">

          <label className="font-bold">
            وصف الحملة
          </label>

          <textarea
            rows={6}
            className="w-full border rounded-xl p-4 mt-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

        </div>

        <button
          onClick={saveCampaign}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          💾 حفظ الحملة
        </button>

      </div>

    </main>
  );
}