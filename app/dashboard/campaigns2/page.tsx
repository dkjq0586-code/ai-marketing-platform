import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function CampaignsPage() {
  const campaigns = await prisma.campaign.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          📢 الحملات التسويقية
        </h1>

        <Link
          href="/dashboard/campaigns/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
        >
          ➕ إنشاء حملة جديدة
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">اسم الحملة</th>
              <th className="p-4">المنصة</th>
              <th className="p-4">الميزانية</th>
              <th className="p-4">البداية</th>
              <th className="p-4">النهاية</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">الوصف</th>
            </tr>

          </thead>

          <tbody>

            {campaigns.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-10 text-gray-500"
                >
                  لا توجد حملات حتى الآن.
                </td>
              </tr>
            ) : (
              campaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-bold">
                    {campaign.name}
                  </td>

                  <td className="p-4">
                    {campaign.platform}
                  </td>

                  <td className="p-4">
                    ${campaign.budget}
                  </td>

                  <td className="p-4">
                    {new Date(campaign.startDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {new Date(campaign.endDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {campaign.status}
                  </td>

                  <td className="p-4">
                    {campaign.description || "-"}
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