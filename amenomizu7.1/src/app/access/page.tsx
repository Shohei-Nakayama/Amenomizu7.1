import PageHeader from "../components/PageHeader";
import Image from "next/image";

export default function Access() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="アクセス" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        {/* Google Map */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.623909151112!2d139.41882997524283!3d35.51357673916645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff5d0fd6c03f%3A0x58dfe1532af82e24!2z44GC44KB44Gu44G_44Gl6Y2854G46Zmi!5e0!3m2!1sja!2sjp!4v1721442975565!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* 住所情報 */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
              所在地
            </h2>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 mb-2">
                神奈川県座間市相模ヶ丘2-29-2
              </p>
              <p className="text-lg text-gray-700">グレイスメゾン城所703</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <p className="text-gray-700 leading-relaxed mb-3">
                小田急相模原駅から徒歩で約３分。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雑居ビルの7階にあります。
              </p>
            </div>
          </div>
        </section>

        {/* 内観・外観 */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
              内観・外観
            </h2>
            <div className="text-center mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                隠れ家的な一室の治療スペースです。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                ひとりひとりのプライベートな時間・空間を大切にし
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                他の人と会うことがないよう最大限に配慮しています。
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg inline-block mt-6">
                <p className="text-sm text-gray-600">
                  ※本当に『雑居ビル』という感じの建物の７階にあります。
                </p>
              </div>
            </div>

            {/* 写真ギャラリー */}
            <div className="space-y-8">
              {/* 治療スペース 1 */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image/treatment-space-1.jpg"
                  alt="あめのみづ鍼灸院 治療スペース"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {/* 治療スペース 2 */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image/treatment-space-2.jpg"
                  alt="あめのみづ鍼灸院 治療スペース"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {/* 入り口 */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image/entrance.jpg"
                  alt="あめのみづ鍼灸院 入り口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {/* 外観 */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image/exterior.jpg"
                  alt="あめのみづ鍼灸院 外観"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
