import Link from "next/link";

export default function Profile() {
  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
        <p className="text-lg mb-8">これはprofileページです</p>

        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            ← ホームに戻る
          </button>
        </Link>
      </main>
    </div>
  );
}
