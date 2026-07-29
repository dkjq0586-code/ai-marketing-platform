"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white shadow-md">

      <Link
        href="/"
        className="text-2xl font-bold text-blue-600"
      >
        AI Marketing
      </Link>

      <nav className="flex items-center gap-6">

        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          الرئيسية
        </Link>

        <Link
          href="/#features"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          المميزات
        </Link>


        <Link
          href="/#pricing"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          الأسعار
        </Link>

        <Link
          href="/#contact"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          تواصل معنا
        </Link>

<Link
  href="/dashboard"
  className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
>
  🚀 ابدأ الآن
</Link>

        <Link
          href="/login"
          className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
        >
          تسجيل الدخول
        </Link>

      </nav>

    </header>
  );
}