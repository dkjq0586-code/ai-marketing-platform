import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
<div className="h-24"></div>
import {
  Rocket,
  Zap,
  Globe,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
    <Navbar />
{/* Hero */}
<section className="bg-gradient-to-b from-blue-50 to-white py-24">

  <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-14 items-center">

    {/* النص */}
    <div className="text-center lg:text-right">

      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-6">
        ✨ أول منصة عربية للتسويق بالذكاء الاصطناعي
      </div>

      <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
        أنشئ محتوى
        <br />
        <span className="text-blue-600">
          بالذكاء الاصطناعي
        </span>
        <br />
        خلال ثوانٍ
      </h1>

      <p className="mt-8 text-xl text-gray-600 leading-9">
        أنشئ منشورات احترافية، أوصاف منتجات، حملات إعلانية،
        ورسائل للعملاء باللغة العربية باستخدام أحدث تقنيات الذكاء الاصطناعي.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">

        <Link
          href="/register"
          className="bg-blue-600 hover:bg-blue-700 text-gray-900 px-8 py-4 rounded-2xl font-bold shadow-lg transition"
        >
          🚀 ابدأ مجانًا
        </Link>

        <a
          href="#features"
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold transition"
        >
          استكشف المميزات
        </a>

      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            +10K
          </h3>
          <p className="text-gray-500">
            محتوى
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            +2500
          </h3>
          <p className="text-gray-500">
            مستخدم
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            4.9★
          </h3>
          <p className="text-gray-500">
            تقييم
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">
            22
          </h3>
          <p className="text-gray-500">
            دولة عربية
          </p>
        </div>

      </div>

    </div>

    {/* الصورة */}
    <div className="flex justify-center">

      <img
        src="/images/hero-ai.png"
        alt="AI Marketing"
        className="w-full max-w-2xl rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
      />

    </div>

  </div>
  </section>
{/* Features */}
<section id="features" className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
      ✨ لماذا تختار منصتنا؟
    </h2>

    <p className="text-center text-gray-600 text-lg mb-16">
      كل ما تحتاجه لإنشاء محتوى وتسويق احترافي في منصة واحدة.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-3 transition-all duration-300">

        <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">

          <Target
            size={40}
            className="text-blue-600 group-hover:text-white transition"
          />

        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          نتائج احترافية
        </h3>

        <p className="text-gray-600 leading-8">
          احصل على محتوى وصور مصممة خصيصًا لزيادة التفاعل والمبيعات.
        </p>

      </div>

      {/* Card 2 */}
      <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-3 transition-all duration-300">

        <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">

          <Zap
            size={40}
            className="text-blue-600 group-hover:text-white transition"
          />

        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          سرعة في الإنجاز
        </h3>

        <p className="text-gray-600 leading-8">
          أنشئ محتوى وصورًا تسويقية احترافية في أقل من دقيقة.
        </p>

      </div>

      {/* Card 3 */}
      <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-3 transition-all duration-300">

        <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">

          <Globe
            size={40}
            className="text-blue-600 group-hover:text-white transition"
          />

        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          كل أدوات التسويق في مكان واحد
        </h3>

        <p className="text-gray-600 leading-8">
          منشورات، أوصاف منتجات، إعلانات، صور، ورسائل العملاء داخل منصة واحدة.
        </p>

      </div>

    </div>

  </div>

</section>
{/* How It Works */}
<section className="py-24 bg-blue-600">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
      كيف تعمل المنصة؟
    </h2>

    <p className="text-blue-100 text-center mt-4 mb-16 text-lg">
      ثلاث خطوات بسيطة للحصول على محتوى احترافي بالذكاء الاصطناعي
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Step 1 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

        <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-6">
          🛠️
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-gray-900 flex items-center justify-center mx-auto mb-6 font-bold">
          1
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          اختر الأداة
        </h3>

        <p className="text-gray-600 leading-8">
          اختر إنشاء منشور، وصف منتج، إعلان، رسالة عميل أو صورة.
        </p>

      </div>

      {/* Step 2 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

        <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-6">
          ✍️
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-gray-900 flex items-center justify-center mx-auto mb-6 font-bold">
          2
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          اكتب طلبك
        </h3>

        <p className="text-gray-600 leading-8">
          أدخل فكرة بسيطة أو وصفًا قصيرًا لما تحتاجه.
        </p>

      </div>

      {/* Step 3 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

        <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-6">
          🚀
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-gray-900 flex items-center justify-center mx-auto mb-6 font-bold">
          3
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          احصل على النتيجة
        </h3>

        <p className="text-gray-600 leading-8">
          خلال ثوانٍ ستحصل على محتوى أو صورة احترافية جاهزة للاستخدام.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Pricing */}
<section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">

  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-5xl font-extrabold text-center text-gray-900">
      اختر الخطة المناسبة لك
    </h2>

    <p className="text-center text-gray-600 text-lg mt-4 mb-16">
      ابدأ مجانًا ثم قم بالترقية عندما ينمو عملك.
    </p>

    <div className="grid lg:grid-cols-3 gap-10">

      {/* الخطة المجانية */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition">

        <h3 className="text-2xl font-bold text-gray-900">
          مجاني
        </h3>

        <p className="text-gray-500 mt-2">
          للمبتدئين
        </p>

        <div className="my-8">
          <span className="text-5xl font-extrabold">$0</span>
          <span className="text-gray-500"> / شهر</span>
        </div>

        <ul className="space-y-4 text-gray-600">

          <li>✅ 20 منشور شهريًا</li>
          <li>✅ أوصاف منتجات</li>
          <li>✅ دعم باللغة العربية</li>
          <li>❌ إنشاء الصور</li>
          <li>❌ حملات إعلانية</li>

        </ul>

        <button className="w-full mt-10 py-4 rounded-2xl bg-gray-900 text-white hover:bg-black transition font-bold">
          ابدأ مجانًا
        </button>

      </div>

      {/* الاحترافي */}
      <div className="relative bg-blue-600 text-white rounded-3xl p-10 shadow-2xl scale-105">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">
          الأكثر شيوعًا
        </div>

        <h3 className="text-2xl font-bold">
          الاحترافي
        </h3>

        <p className="text-blue-100 mt-2">
          لأصحاب المشاريع
        </p>

        <div className="my-8">
          <span className="text-5xl font-extrabold">$19</span>
          <span className="text-blue-100"> / شهر</span>
        </div>

        <ul className="space-y-4">

          <li>✅ منشورات غير محدودة</li>
          <li>✅ أوصاف منتجات احترافية</li>
          <li>✅ إنشاء الصور بالذكاء الاصطناعي</li>
          <li>✅ حملات إعلانية</li>
          <li>✅ أولوية في الدعم</li>

        </ul>

        <button className="w-full mt-10 py-4 rounded-2xl bg-white text-blue-600 hover:bg-gray-100 transition font-bold">
          اشترك الآن
        </button>

      </div>

      {/* الشركات */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition">

        <h3 className="text-2xl font-bold text-gray-900">
          الشركات
        </h3>

        <p className="text-gray-500 mt-2">
          للفرق الكبيرة
        </p>

        <div className="my-8">
          <span className="text-5xl font-extrabold">$49</span>
          <span className="text-gray-500"> / شهر</span>
        </div>

        <ul className="space-y-4 text-gray-600">

          <li>✅ كل ميزات الاحترافي</li>
          <li>✅ عدة مستخدمين</li>
          <li>✅ API خاص</li>
          <li>✅ تقارير متقدمة</li>
          <li>✅ دعم VIP</li>

        </ul>

        <button className="w-full mt-10 py-4 rounded-2xl bg-gray-900 text-white hover:bg-black transition font-bold">
          تواصل معنا
        </button>

      </div>

    </div>

  </div>

</section>
<section className="py-16 bg-blue-600 text-white">

  <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-8 text-center">

    <div>
      <div className="text-4xl mb-3">🔒</div>
      <h3 className="font-bold text-xl">
        دفع آمن
      </h3>
      <p className="text-blue-100 mt-2">
        جميع المدفوعات مشفرة بالكامل.
      </p>
    </div>

    <div>
      <div className="text-4xl mb-3">⚡</div>
      <h3 className="font-bold text-xl">
        نتائج خلال ثوانٍ
      </h3>
      <p className="text-blue-100 mt-2">
        لا تنتظر أكثر من دقيقة.
      </p>
    </div>

    <div>
      <div className="text-4xl mb-3">🌍</div>
      <h3 className="font-bold text-xl">
        دعم عربي كامل
      </h3>
      <p className="text-blue-100 mt-2">
        مصمم خصيصًا للعالم العربي.
      </p>
    </div>

    <div>
      <div className="text-4xl mb-3">💬</div>
      <h3 className="font-bold text-xl">
        دعم 24/7
      </h3>
      <p className="text-blue-100 mt-2">
        فريقنا جاهز لمساعدتك دائمًا.
      </p>
    </div>

  </div>

</section>
{/* Testimonials */}
<section className="py-20 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12">
    ماذا يقول عملاؤنا؟
  </h2>

<div className="grid md:grid-cols-3 gap-8 mt-12">

  {/* البطاقة الأولى */}
  <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

    <div className="flex justify-center mb-4">
      <img
        src="/images/customer1.jpg"
        alt="محمد أحمد"
        className="w-16 h-16 rounded-full object-cover"
      />
    </div>

    <div className="text-yellow-500 text-2xl mb-4 text-center">
      ⭐⭐⭐⭐⭐
    </div>

    <p className="text-gray-600 mb-6 text-center">
      وفرت علي المنصة ساعات من كتابة المنشورات وأصبحت أنشر يوميًا بسهولة.
    </p>

    <h3 className="font-bold text-lg text-center">
      محمد أحمد
    </h3>

    <span className="text-gray-500 block text-center">
      صاحب متجر إلكتروني
    </span>

  </div>

  {/* البطاقة الثانية */}
  <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

    <div className="flex justify-center mb-4">
      <img
        src="/images/customer2.jpg"
        alt="سارة علي"
        className="w-16 h-16 rounded-full object-cover"
      />
    </div>

    <div className="text-yellow-500 text-2xl mb-4 text-center">
      ⭐⭐⭐⭐⭐
    </div>

    <p className="text-gray-600 mb-6 text-center">
      أفضل أداة استخدمتها لإنشاء أوصاف المنتجات باللغة العربية.
    </p>

    <h3 className="font-bold text-lg text-center">
      سارة علي
    </h3>

    <span className="text-gray-500 block text-center">
      مسوقة رقمية
    </span>

  </div>
   

  {/* البطاقة الثالثة */}
  <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

    <div className="flex justify-center mb-4">
      <img
        src="/images/customer3.jpg"
        alt="أحمد يوسف"
        className="w-16 h-16 rounded-full object-cover"
      />
    </div>

    <div className="text-yellow-500 text-2xl mb-4 text-center">
      ⭐⭐⭐⭐⭐
    </div>

    <p className="text-gray-600 mb-6 text-center">
      الإعلانات التي أنشأتها المنصة وفرت علي الكثير من الوقت.
    </p>

    <h3 className="font-bold text-lg text-center">
      أحمد يوسف
    </h3>

    <span className="text-gray-500 block text-center">
      رائد أعمال
    </span>

  </div>

</div>
</section>
{/* FAQ */}
<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      ❓ الأسئلة الشائعة
    </h2>

    <p className="text-center text-gray-500 mb-12">
      كل ما تحتاج معرفته قبل البدء باستخدام المنصة.
    </p>

    <div className="space-y-6">

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-bold text-xl mb-3">
          هل يمكنني تجربة المنصة مجانًا؟
        </h3>
        <p className="text-gray-600">
          نعم، يمكنك البدء بالخطة المجانية وتجربة جميع الميزات الأساسية قبل الاشتراك.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-bold text-xl mb-3">
          هل تدعم المنصة اللغة العربية؟
        </h3>
        <p className="text-gray-600">
          نعم، المنصة مصممة خصيصًا لإنشاء محتوى احترافي باللغة العربية بجودة عالية.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-bold text-xl mb-3">
          هل أستطيع إنشاء صور بالذكاء الاصطناعي؟
        </h3>
        <p className="text-gray-600">
          نعم، يمكنك إنشاء صور تسويقية احترافية تناسب منتجاتك ومنشوراتك بضغطة زر.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="font-bold text-xl mb-3">
          ما المنصات التي يدعمها إنشاء المحتوى؟
        </h3>
        <p className="text-gray-600">
          يدعم فيسبوك، إنستغرام، X (تويتر)، لينكدإن، تيك توك، بالإضافة إلى أوصاف المنتجات والإعلانات ورسائل البريد الإلكتروني.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Contact */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center mb-4">
      تواصل معنا
    </h2>

    <p className="text-center text-gray-600 mb-12">
      هل لديك سؤال أو اقتراح؟ يسعدنا التواصل معك.
    </p>

    <div className="grid md:grid-cols-2 gap-12">

      {/* معلومات التواصل */}
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl mb-2">📧 البريد الإلكتروني</h3>
          <p className="text-gray-600">
            ai234ma.rki"@gmail.com
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl mb-2">📱 الهاتف</h3>
          <p className="text-gray-600">
            +212 771736751
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl mb-2">📍 العنوان</h3>
          <p className="text-gray-600">
            المغرب
          </p>
        </div>
      </div>

      {/* النموذج */}
      <form className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-5">

        <input
          type="text"
          placeholder="الاسم الكامل"
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={5}
          placeholder="اكتب رسالتك..."
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full bg-blue-600 text-gray-900 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          إرسال الرسالة
        </button>

      </form>

    </div>

  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-900 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              AI Marketing
            </h2>
            <p className="text-gray-400 mt-2">
              منصة الذكاء الاصطناعي للشركات الصغيرة باللغة العربية.
            </p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="/">الرئيسية</a>
            <a href="#features">المميزات</a>
            <a href="#pricing">الأسعار</a>
            <a href="#">تواصل معنا</a>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8">
          © 2026 AI Marketing. جميع الحقوق محفوظة.
        </p>
      </footer>
    </main>
  );
}