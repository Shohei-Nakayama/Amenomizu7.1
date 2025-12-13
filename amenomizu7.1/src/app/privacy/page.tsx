import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "プライバシーポリシー",
  description: "あめのみづ鍼灸院のプライバシーポリシーページです。個人情報の取り扱いやCookieの使用について説明しています。",
};

export default function Privacy() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="プライバシーポリシー" />

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-8">
          {/* 前文 */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              あめのみづ鍼灸院（以下「当院」といいます）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守すると共に、以下のプライバシーポリシー（以下「本ポリシー」といいます）に従い、適切な取扱い及び保護に努めます。
            </p>
          </section>

          {/* 1. 個人情報の定義 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              1. 個人情報の定義
            </h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、もしくは個人識別符号が含まれる情報を意味するものとします。
            </p>
          </section>

          {/* 2. 個人情報の収集方法 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              2. 個人情報の収集方法
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              当院は、以下の方法で個人情報を収集することがあります。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>ご予約時のお電話やメールでのお問い合わせ</li>
              <li>ご来院時の問診票へのご記入</li>
              <li>お問い合わせフォームからのお問い合わせ</li>
              <li>当ウェブサイトの閲覧（Cookie等による自動収集）</li>
            </ul>
          </section>

          {/* 3. 個人情報の利用目的 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              3. 個人情報の利用目的
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              当院は、収集した個人情報を以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>鍼灸治療の提供及び関連するサービスの提供</li>
              <li>ご予約の確認及び変更のご連絡</li>
              <li>お問い合わせへの対応</li>
              <li>当院からのお知らせやご案内の送付</li>
              <li>ウェブサイトの改善及びサービス向上のための分析</li>
            </ul>
          </section>

          {/* 4. 個人情報の第三者提供 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              4. 個人情報の第三者提供
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院は、以下の場合を除き、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはいたしません。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
              <li>法令に基づく場合</li>
              <li>人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
              <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>
          </section>

          {/* 5. Cookieの使用について */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              5. Cookieの使用について
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                当院のウェブサイトでは、ユーザーエクスペリエンスの向上及びウェブサイトの改善のため、Cookie及び類似の技術を使用しています。
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                Cookieとは
              </h3>
              <p>
                Cookieとは、ウェブサイトを訪問した際にお客様のコンピューターやスマートフォンに保存される小さなテキストファイルです。Cookieによって、ウェブサイトがお客様のデバイスを認識し、お客様の訪問履歴や設定を記憶することができます。
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                当院で使用しているCookie
              </h3>
              <p className="mb-2">
                当院のウェブサイトでは、以下のCookieを使用しています。
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics：</strong>ウェブサイトの利用状況を分析し、サービスの改善に役立てるために使用しています。Google Analyticsは、お客様のIPアドレスを匿名化した上で、訪問回数、訪問ページ、滞在時間などの情報を収集します。
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                Cookieの管理
              </h3>
              <p>
                お客様は、ブラウザの設定により、Cookieの受け入れを拒否したり、Cookieを削除したりすることができます。ただし、Cookieを無効にした場合、ウェブサイトの一部の機能が正常に動作しない可能性があります。
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                Google Analyticsのオプトアウト
              </h3>
              <p>
                Google Analyticsによる情報収集を希望されない場合は、Googleが提供する
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline ml-1"
                >
                  オプトアウトアドオン
                </a>
                をご利用ください。
              </p>
            </div>
          </section>

          {/* 6. 個人情報の安全管理 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              6. 個人情報の安全管理
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、当院の従業員に対し、必要かつ適切な監督を行います。また、個人情報の取扱いを委託する場合は、委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
            </p>
          </section>

          {/* 7. 個人情報の開示・訂正・削除 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              7. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-gray-700 leading-relaxed">
              お客様は、当院に対して、個人情報保護法の定めに従い、当院が保有する自己の個人情報の開示、訂正、追加、削除及び利用停止を求めることができます。当院は、お客様からのご請求に対して、合理的な期間内に対応いたします。
            </p>
          </section>

          {/* 8. プライバシーポリシーの変更 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              8. プライバシーポリシーの変更
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院は、法令の変更や当院の事業内容の変更等に伴い、本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          {/* 9. お問い合わせ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
              9. お問い合わせ
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本ポリシーに関するお問い合わせ、個人情報の開示・訂正・削除等のご請求は、以下の窓口までご連絡ください。
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">あめのみづ鍼灸院</p>
              <p className="text-gray-700">〒252-0001</p>
              <p className="text-gray-700">神奈川県座間市相模が丘２−２９−２　グレイスメゾン城所７０３</p>
              <p className="text-gray-700 mt-2">電話：050-3637-7265</p>
              <p className="text-gray-700">
                お問い合わせフォーム：
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline ml-1">
                  こちら
                </a>
              </p>
            </div>
          </section>

          {/* 制定日 */}
          <section className="pt-6 border-t border-gray-200">
            <p className="text-right text-gray-600 text-sm">
              制定日：2020年4月8日
              <br />
              最終改定日：{new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
