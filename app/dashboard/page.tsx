"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [campaigns, setCampaigns] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();

        setUsers(data.users || 0);
        setProducts(data.products || 0);
        setCampaigns(data.campaigns || 0);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-gray-900">
          🚀 لوحة التحكم
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          أهلاً بك، يمكنك إدارة جميع أدوات الذكاء الاصطناعي من هنا.
        </p>
      </div>
<div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl mb-10">

  <h2 className="text-3xl font-bold mb-3">
    👋 أهلاً بك في AI Marketing
  </h2>

  <p className="text-blue-100 text-lg mb-8">
    أنشئ منشورات، أوصاف منتجات، إعلانات وصور بالذكاء الاصطناعي في ثوانٍ.
  </p>

  <Link
    href="/generate"
    className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition"
  >
    🚀 إنشاء محتوى جديد
  </Link>

</div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {/* العملاء */}
        <Link href="/dashboard/customers">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition cursor-pointer text-white">

            <div className="text-5xl mb-4">
              👥
            </div>

            <h2 className="text-lg opacity-90">
              العملاء
            </h2>

            <p className="text-5xl font-bold mt-4">
              {users}
            </p>

          </div>
        </Link>

        {/* الحملات */}
        <Link href="/dashboard/campaigns2">
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition cursor-pointer text-white">

            <div className="text-5xl mb-4">
              📢
            </div>

            <h2 className="text-lg opacity-90">
              الحملات
            </h2>

            <p className="text-5xl font-bold mt-4">
              {campaigns}
            </p>

          </div>
        </Link>

        {/* المنتجات */}
        <Link href="/dashboard/products">
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition cursor-pointer text-white">

            <div className="text-5xl mb-4">
              📦
            </div>

            <h2 className="text-lg opacity-90">
              المنتجات
            </h2>

            <p className="text-5xl font-bold mt-4">
              {products}
            </p>

          </div>
        </Link>

        {/* أدوات AI */}
        <Link href="/dashboard/ai2">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition cursor-pointer text-white">

            <div className="text-5xl mb-4">
              🤖
            </div>

            <h2 className="text-lg opacity-90">
             <h2 className="text-lg opacity-90">
   أدوات AI
</h2>
            </h2>

            <p className="text-5xl font-bold mt-4">
              6
            </p>

          </div>
        </Link>

      </div>
<Link href="/dashboard/settings">
  <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition cursor-pointer text-white">

    <div className="text-5xl mb-4">
      ⚙️
    </div>

    <h2 className="text-lg font-bold">
      الإعدادات
    </h2>

  </div>
</Link>
      {/* آخر النشاط */}
      <div className="mt-14 bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          📈 آخر النشاط
        </h2>

        <table className="w-full">

          <thead className="border-b">

            <tr className="text-gray-500 text-left">

              <th className="py-4">العملية</th>

              <th className="py-4">الحالة</th>

              <th className="py-4">التاريخ</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-gray-50">

              <td className="py-5">
                إنشاء حملة جديدة
              </td>

              <td className="text-green-600 font-bold">
                مكتملة
              </td>

              <td>
                اليوم
              </td>

            </tr>

            <tr className="border-b hover:bg-gray-50">

              <td className="py-5">
                إضافة منتج
              </td>

              <td className="text-blue-600 font-bold">
                ناجحة
              </td>

              <td>
                أمس
              </td>

            </tr>

            <tr className="hover:bg-gray-50">

              <td className="py-5">
                إنشاء منشور AI
              </td>

              <td className="text-purple-600 font-bold">
                مكتمل
              </td>

              <td>
                قبل يومين
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}