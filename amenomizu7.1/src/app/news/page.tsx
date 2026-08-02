import PageHeader from "../components/PageHeader";

const announcements = [
  {
    date: "2026/08/02",
    text: "土曜、日曜、祝日も通常予約を再開しました。",
  },
];

export default function News() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="お知らせ" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <div className="space-y-4">
          {announcements.map((item) => (
            <div
              key={item.date}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <time className="text-sm text-gray-400 block mb-2">
                {item.date}
              </time>
              <p className="text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
