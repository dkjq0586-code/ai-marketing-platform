export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        ⚙️ الإعدادات
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

        <div>
          <label className="font-bold block mb-2">
            اسم المستخدم
          </label>

          <input
            type="text"
            placeholder="محمد أحمد"
            className="w-full border rounded-xl p-4"
          />
        </div>

        <div>
          <label className="font-bold block mb-2">
            البريد الإلكتروني
          </label>

          <input
            type="email"
            placeholder="example@email.com"
            className="w-full border rounded-xl p-4"
          />
        </div>

        <div>
          <label className="font-bold block mb-2">
            كلمة المرور الجديدة
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-xl p-4"
          />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition">
          💾 حفظ التغييرات
        </button>

      </div>

    </main>
  );
}