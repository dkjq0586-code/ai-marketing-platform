"use client";

import { useState } from "react";

export default function CustomerAnalysisPage() {
  const [customers, setCustomers] = useState("");
  const [newCustomers, setNewCustomers] = useState("");
  const [returningCustomers, setReturningCustomers] = useState("");
  const [orders, setOrders] = useState("");
  const [sales, setSales] = useState("");
  const [averageOrder, setAverageOrder] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (
      !customers ||
      !newCustomers ||
      !returningCustomers ||
      !orders ||
      !sales ||
      !averageOrder
    ) {
      alert("املأ جميع الحقول");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/customer-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customers,
          newCustomers,
          returningCustomers,
          orders,
          sales,
          averageOrder,
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
        📊 تحليل العملاء
      </h1>

      <div className="bg-white rounded-2xl shadow p-8">

        <div className="grid md:grid-cols-2 gap-4">

          <input
            className="border rounded-xl p-3"
            placeholder="عدد العملاء"
            value={customers}
            onChange={(e) => setCustomers(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="العملاء الجدد"
            value={newCustomers}
            onChange={(e) => setNewCustomers(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="العملاء العائدون"
            value={returningCustomers}
            onChange={(e) => setReturningCustomers(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="عدد الطلبات"
            value={orders}
            onChange={(e) => setOrders(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="إجمالي المبيعات"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="متوسط قيمة الطلب"
            value={averageOrder}
            onChange={(e) => setAverageOrder(e.target.value)}
          />

        </div>

        <button
          onClick={analyze}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "⏳ جاري التحليل..." : "✨ تحليل البيانات"}
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          تقرير الذكاء الاصطناعي
        </h2>

        <textarea
          rows={15}
          readOnly
          value={result}
          className="w-full border rounded-xl p-4 bg-gray-50"
        />

        {result && (

          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            📋 نسخ التقرير
          </button>

        )}

      </div>

    </main>
  );
}