"use client";

import Link from "next/link";

const tools = [
  {
    icon: "✍️",
    title: "إنشاء المحتوى",
    description: "إنشاء منشورات وإعلانات ووصف منتجات بالذكاء الاصطناعي.",
    link: "/generate",
  },
  {
    icon: "🖼️",
    title: "توليد الصور",
    description: "إنشاء صور احترافية للمنتجات والإعلانات.",
    link: "/dashboard/ai/image-generator",
  },
  {
    icon: "🎨",
    title: "إزالة الخلفية",
    description: "إزالة خلفية صور المنتجات تلقائياً.",
    link: "/dashboard/remove-background"
  },
  {
    icon: "📦",
    title: "تحسين وصف المنتجات",
    description: "تحويل وصف المنتج إلى وصف احترافي يزيد المبيعات.",
link: "/dashboard/product-description",
  },

  {
    icon: "🌍",
    title: "الترجمة",
    description: "ترجمة المحتوى بين العربية والإنجليزية ولغات أخرى.",
    link: "/dashboard/translate",
  },
  {
    icon: "📊",
    title: "تحليل العملاء",
    description: "تحليل بيانات العملاء واستخراج اقتراحات ذكية.",
 link: "/dashboard/customer-analysis",
  },

];

export default function AIPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        🤖 أدوات الذكاء الاصطناعي
      </h1>

      <p className="text-gray-600 mb-8">
        استخدم أدوات الذكاء الاصطناعي لتطوير التسويق وإدارة متجرك بسهولة.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{tools.map((tool, index) => (
  <div
    key={index}
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col"
  >
            <div className="text-5xl mb-4">
              {tool.icon}
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {tool.title}
            </h2>
<p className="text-gray-600 flex-1 mb-6">
  {tool.description}
</p>

            <Link
              href={tool.link}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
            >
              🚀 فتح الأداة
            </Link>

          </div>
        ))}

      </div>

    </main>
  );
}