import Link from "next/link";
import NextMonthCalendar from "../components/NextMonthCalendar";

export default function Reserve() {
  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">ご予約</h1>
        <p className="text-lg mb-8">ご希望の日時をお選びください</p>

        <div className="mb-8">
          <NextMonthCalendar />
        </div>

        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            ← ホームに戻る
          </button>
        </Link>
      </main>
    </div>
  );
}
