import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function Access() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="アクセス" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-semibold mb-4">アクセス情報</h2>
        <p className="text-lg mb-8">これはaccessページです</p>
      </main>
    </div>
  );
}
