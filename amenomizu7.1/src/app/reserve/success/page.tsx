import PageHeader from "../../components/PageHeader";
import Link from "next/link";

export default function ReserveSuccess() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="ご予約" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          {/* チェックマークアイコン */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ご予約完了
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            ご予約ありがとうございます。
            <br />
            ご予約を受け付けました。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 text-left">
            <p className="text-gray-700 leading-relaxed">
              ご予約内容を確認次第、ご連絡させていただきます。
              <br />
              今しばらくお待ちください。
            </p>
          </div>

          {/* ホームに戻るボタン */}
          <div className="flex justify-center gap-4">
            <Link href="/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md">
                ホームに戻る
              </button>
            </Link>
            <Link href="/reserve">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md">
                予約ページに戻る
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
