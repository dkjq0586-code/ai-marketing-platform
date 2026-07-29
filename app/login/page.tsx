"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("تم تسجيل الدخول بنجاح");
        router.push("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء تسجيل الدخول");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          تسجيل الدخول
        </h1>

        <p className="text-center text-gray-500 mb-8">
          مرحبًا بعودتك 👋
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              كلمة المرور
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            تسجيل الدخول
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          ليس لديك حساب؟{" "}
          <a href="/register" className="text-blue-600 font-bold">
            إنشاء حساب
          </a>
        </p>

      </div>
    </main>
  );
}