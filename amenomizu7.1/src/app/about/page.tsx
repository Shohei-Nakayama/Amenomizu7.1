import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <Image
          className="dark:invert"
          src="/IMG_5060.jpg"
          alt="amenomizu logo"
          width={480}
          height={38}
          priority
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        ></div>

        <h1 className="text-4xl font-bold mb-4">About Page</h1>
        <p className="text-lg mb-8">これはAboutページです</p>

        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            ← ホームに戻る
          </button>
        </Link>
      </main>
    </div>
  );
}
