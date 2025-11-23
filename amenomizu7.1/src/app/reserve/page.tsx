import Link from "next/link";
import NextMonthCalendar from "../components/NextMonthCalendar";
import PageHeader from "../components/PageHeader";

export default function Reserve() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="ご予約" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <p className="text-lg mb-8 text-center">ご希望の日時をお選びください</p>

        <div className="mb-8">
          <NextMonthCalendar />
        </div>
      </main>
    </div>
  );
}
