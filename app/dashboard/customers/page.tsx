"use client";

import { useEffect, useMemo, useState } from "react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  async function loadCustomers() {
    const res = await fetch("/api/customers");
    const data = await res.json();
    setCustomers(data);
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  async function saveCustomer() {
    if (!name || !email) {
      alert("املأ الاسم والبريد الإلكتروني");
      return;
    }

    try {
      if (editingId) {
        await fetch("/api/customers", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: editingId,
            name,
            email,
            phone,
            company,
          }),
        });

        alert("تم تعديل العميل بنجاح");
      } else {
        await fetch("/api/customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            company,
          }),
        });

        alert("تم إضافة العميل بنجاح");
      }

      clearForm();
      loadCustomers();
    } catch (error) {
      console.error(error);
      alert("حدث خطأ");
    }
  }

  function clearForm() {
    setEditingId(null);
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
  }

  function editCustomer(customer: any) {
    setEditingId(customer.id);
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setCompany(customer.company);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function deleteCustomer(id: number) {
    const ok = confirm("هل تريد حذف هذا العميل؟");

    if (!ok) return;

    await fetch("/api/customers", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadCustomers();
  }

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const value = search.toLowerCase();

      return (
        customer.name?.toLowerCase().includes(value) ||
        customer.email?.toLowerCase().includes(value) ||
        customer.company?.toLowerCase().includes(value)
      );
    });
  }, [customers, search]);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        👥 إدارة العملاء
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {editingId ? "✏️ تعديل العميل" : "➕ إضافة عميل جديد"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="border rounded-xl p-3"
            placeholder="الاسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="الهاتف"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="border rounded-xl p-3"
            placeholder="الشركة"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={saveCustomer}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            {editingId ? "💾 حفظ التعديلات" : "➕ إضافة العميل"}
          </button>

          {editingId && (
            <button
              onClick={clearForm}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl"
            >
              إلغاء
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold">
            عدد العملاء: {filteredCustomers.length}
          </h2>

          <input
            type="text"
            placeholder="🔍 ابحث عن عميل..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl p-3 w-full md:w-80"
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-right p-4">الاسم</th>
              <th className="text-right p-4">البريد</th>
              <th className="text-right p-4">الهاتف</th>
              <th className="text-right p-4">الشركة</th>
              <th className="text-center p-4">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10 text-gray-500">
                  لا يوجد عملاء
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{customer.name}</td>
                  <td className="p-4">{customer.email}</td>
                  <td className="p-4">{customer.phone}</td>
                  <td className="p-4">{customer.company}</td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => editCustomer(customer)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                      >
                        ✏️ تعديل
                      </button>

                      <button
                        onClick={() => deleteCustomer(customer.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        🗑️ حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}