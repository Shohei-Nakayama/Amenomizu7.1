import PageHeader from "../components/PageHeader";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="プロフィール" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        {/* タイトル */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center border-b-2 border-blue-200 pb-4">
            あめのみづ　中山　翔平
          </h2>
        </div>

        {/* プロフィール写真1（ウサギ） */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image/profile-2.jpg"
                alt="中山翔平とウサギ"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          {/* 自己紹介 */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              鍼灸師として分類するのであれば
              <br />
              どちらかといえば
              <br />
              東洋医学的
              <br />
              もしくは内科的な鍼灸師だと思います。
              <br />
              ただ、どんな方法でも治る方法が
              <br />
              最善の方法であると思っています。
            </p>

            <p>
              私自身は福岡県の久留米市に生まれ
              <br />
              大学進学のため上京しました。
              <br />
              最初の就職先が
              <br />
              医療用のお薬を作る企業でした。
              <br />
              しばらくしてそこを離れますが
              <br />
              それからも医学や医術は
              <br />
              毎日学び続け
              <br />
              鍼灸の専門学校に入り直しました。
            </p>

            <p>
              その後は
              <br />
              あまり自分でも考えていなかったのですが
              <br />
              いろんな縁があり
              <br />
              鍼灸学校を卒業と同時に
              <br />
              開業することになりました。
            </p>

            <p>
              私が関心があることは
              <br />
              とにかくいらっしゃる方に
              <br />
              質を落とさずに
              <br />
              良い治療を提供したいということです。
            </p>

            <p>
              鍼灸治療というのは
              <br />
              本来は非常に素晴らしい力を持った治療法です。
              <br />
              また、本来の治療法である漢方薬や
              <br />
              もしくは現代薬と併用すると
              <br />
              なお大きな力があります。
            </p>

            <p>
              ただ同時にどのような治療でも
              <br />
              良い治療とは
              <br />
              そのクライアントさんのお話を聞き
              <br />
              その上でお身体の訴えを聞くという
              <br />
              細胞との会話のようなものだと私は思っています。
            </p>

            <p>
              いらっしゃる方に
              <br />
              少しでも支えになれるような
              <br />
              そんな鍼灸師を目指してやっています。
            </p>

            <p>
              また、
              <br />
              これからの医術・医学が
              <br />
              人ばかりでなく
              <br />
              動物や植物、微生物など
              <br />
              全ての生き物を豊かにしていく
              <br />
              そんな治療法に
              <br />
              進化していくことを願いながら
              <br />
              日々研鑽を積んでいっています。
            </p>
          </div>
        </div>

        {/* 免許・資格 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
            免許・資格等
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>鍼灸師</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>医薬品登録販売者（管理者要件）</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>温泉保養士上級</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>リラクゼーションセラピスト1級</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>その他保有</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 略歴と白衣写真 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
            略歴
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            {/* 略歴 */}
            <div className="flex-1 bg-green-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">▸</span>
                  <span>中央大学経済学部経済学科卒</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">▸</span>
                  <div>
                    <span>呉竹鍼灸柔整専門学校鍼灸科卒</span>
                    <br />
                    <span className="text-sm text-gray-600">
                      （現在の横浜呉竹医療専門学校）
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {/* 白衣写真 */}
            <div className="md:w-48 flex justify-center md:justify-end">
              <div className="relative w-40 h-52 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image/profile-1.jpg"
                  alt="中山翔平"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
