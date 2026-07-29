export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        AI Marketing
      </h1>

      <nav className="space-y-4">

        <a href="/dashboard" className="block hover:bg-blue-600 p-3 rounded-lg">
          🏠 لوحة التحكم
        </a>

        <a href="/dashboard/customers" className="block hover:bg-blue-600 p-3 rounded-lg">
          👥 العملاء
        </a>
<a href="/dashboard/campaigns/create" className="block hover:bg-blue-600 p-3 rounded-lg">
  📢 الحملات
</a>

        <a href="/dashboard/products" className="block hover:bg-blue-600 p-3 rounded-lg">
          📦 المنتجات
        </a>

        <a href="/dashboard/ai2" className="block hover:bg-blue-600 p-3 rounded-lg">
          🤖 أدوات AI
        </a>

        <a href="/dashboard/settings" className="block hover:bg-blue-600 p-3 rounded-lg">
          ⚙️ الإعدادات
        </a>

      </nav>
    </aside>
  );
}