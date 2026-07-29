"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string | null;
  image: string | null;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [search, setSearch] = useState("");

  async function loadProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const value = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
      );
    });
  }, [products, search]);

  function clearForm() {
    setEditingId(null);

    setName("");
    setPrice("");
    setCategory("");
    setDescription("");

    setImage(null);
    setImageUrl("");
  }

  function editProduct(product: Product) {
    setEditingId(product.id);

    setName(product.name);
    setPrice(String(product.price));
    setCategory(product.category);
    setDescription(product.description || "");
    setImageUrl(product.image || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function saveProduct() {
  if (!name || !price || !category) {
    alert("املأ جميع الحقول");
    return;
  }

  try {
    let uploadedImage = imageUrl;

    if (image) {
      const formData = new FormData();
      formData.append("file", image);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (uploadData.url) {
        uploadedImage = uploadData.url;
      }
    }

    const productData = {
      name,
      price: Number(price),
      category,
      description,
      image: uploadedImage,
    };

    if (editingId !== null) {
      await fetch("/api/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingId,
          ...productData,
        }),
      });

      alert("تم تعديل المنتج");
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      alert("تمت إضافة المنتج");
    }

    clearForm();
    loadProducts();
  } catch (error) {
    console.error(error);
    alert("حدث خطأ أثناء حفظ المنتج");
  }
}

async function deleteProduct(id: number) {
  const ok = confirm("هل تريد حذف المنتج؟");

  if (!ok) return;

  await fetch("/api/products", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  loadProducts();
}

return (
  <main className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold mb-8">
      📦 إدارة المنتجات
    </h1>

    <div className="bg-white rounded-2xl shadow p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        {editingId ? "✏️ تعديل المنتج" : "➕ إضافة منتج جديد"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          className="border rounded-xl p-3"
          placeholder="اسم المنتج"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border rounded-xl p-3"
          placeholder="السعر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="border rounded-xl p-3"
          placeholder="التصنيف"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="border rounded-xl p-3"
          placeholder="الوصف"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

<label className="col-span-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">

  <span className="text-5xl mb-3">📷</span>

  <span className="font-semibold text-lg">
    اختر صورة المنتج
  </span>

  <span className="text-gray-500 text-sm mt-1">
    JPG - PNG - WEBP
  </span>

  {image && (
    <div className="mt-4 text-green-600 font-bold">
      ✅ {image.name}
    </div>
  )}

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => {
      if (e.target.files?.length) {
        setImage(e.target.files[0]);
      }
    }}
  />

</label>

      </div>

      <div className="flex gap-4 mt-6">

        <button
          onClick={saveProduct}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          {editingId ? "💾 حفظ" : "➕ إضافة المنتج"}
        </button>

        {editingId !== null && (
          <button
            onClick={clearForm}
            className="bg-gray-500 text-white px-6 py-3 rounded-xl"
          >
            إلغاء
          </button>
        )}

      </div>

    </div>

    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          المنتجات ({filteredProducts.length})
        </h2>

        <input
          className="border rounded-xl p-3 w-72"
          placeholder="🔍 بحث..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="w-full table-fixed">

        <thead>

          <tr className="border-b bg-gray-50">
        <th className="p-3 w-24">الصورة</th>
        <th className="p-3 w-52">الاسم</th>
        <th className="p-3 w-28">السعر</th>
        <th className="p-3 w-40">التصنيف</th>
        <th className="p-3">الوصف</th>
        <th className="p-3 w-40">الإجراءات</th>

          </tr>

        </thead>

        <tbody>

          {filteredProducts.length === 0 ? (

            <tr>
              <td colSpan={6} className="text-center py-10">
                لا توجد منتجات
              </td>
            </tr>

          ) : (

            filteredProducts.map((product) => (

              <tr key={product.id} className="border-b hover:bg-gray-50">

                <td className="p-3">

                  {product.image ? (

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                  ) : (

                    <span>📦</span>

                  )}

                </td>
<td className="p-3 font-semibold break-words">
  {product.name}
</td>

<td className="p-3">
  ${product.price}
</td>

<td className="p-3">
  {product.category}
</td>

<td className="p-3 max-w-xs break-words">
  {product.description}
</td>

                <td>

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => editProduct(product)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      🗑️
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