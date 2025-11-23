import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export default function FeePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="料金のご案内" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
            料金について
          </h2>

          {/* 料金表示 */}
          <section className="mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">料金：</span>
                <span className="ml-2">¥10,000（税込）</span>
              </p>
            </div>
          </section>

          {/* 施術方針 */}
          <section className="mb-8">
            <h3 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-6 bg-blue-500 mr-3 rounded"></span>
              施術方針
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                メニューなどは特にありません。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                お話をお聞きし、その人のその状態や目的に合わせて最大限の状態を引き出すように施術やアドバイスをしていきます。
              </p>
            </div>
          </section>

          {/* 施術時間 */}
          <section className="mb-8">
            <h3 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-6 bg-green-500 mr-3 rounded"></span>
              施術時間
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">通常施術</h4>
                <p className="text-gray-700">1時間〜1時間半程度</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">訪問治療</h4>
                <p className="text-gray-700">1時間以内</p>
              </div>
            </div>
          </section>

          {/* お持ちいただくもの */}
          <section className="mb-8">
            <h3 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-6 bg-purple-500 mr-3 rounded"></span>
              お持ちいただくもの
            </h3>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                健康診断や血液検査などのデータがあれば持ってきてくださると非常にありがたいです。
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                <p className="text-gray-700 font-medium">
                  10年前やそれ以前のものでも重宝します
                </p>
              </div>
            </div>
          </section>

          {/* プライバシーポリシー */}
          <section className="mb-8">
            <h3 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-6 bg-red-500 mr-3 rounded"></span>
              個人情報の保護について
            </h3>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <p className="text-gray-700 leading-relaxed mb-4">
                どのような理由であれ、どなたからもクライアント様に対する質問には全般において一切答えることはできません。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                ご親族、ご家族様と名乗る方であれ同様です。
              </p>
              <div className="bg-white p-4 rounded mt-4">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">※例外：</span>
                  予めご本人から事前にご連絡・許可を私にお伝えくださっている時は、その時においてのみはこの限りではありません。
                </p>
              </div>
            </div>
          </section>

          {/* お問い合わせ */}
          <section className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                ご相談・お問い合わせ
              </h3>
              <p className="mb-4">お気軽にお問い合わせください</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                お問い合わせはこちら
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">あめのみづ鍼灸院</h3>
          <p className="text-gray-300">〒住所情報</p>
          <p className="text-gray-300">TEL: 電話番号</p>
          <p className="text-gray-400 text-sm mt-4">
            © 2024 あめのみづ鍼灸院. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
