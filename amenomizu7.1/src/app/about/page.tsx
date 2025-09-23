import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen p-8 text-center">
      <main className="max-w-4xl mx-auto">
        <Image
          className="dark:invert mx-auto mb-8"
          src="/IMG_5060.jpg"
          alt="amenomizu logo"
          width={480}
          height={38}
          priority
        />

        <h1 className="text-4xl font-bold mb-8 ">あめのみづ鍼灸院について</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">あめのみづの方針</h2>
          <p className="text-lg mb-4">
            あめのみづ鍼灸院は 看板もありません。 特に広告も出していません。
          </p>
          <p className="text-lg mb-6">
            ただ、いらっしゃる方のお話をお伺いし、そこからお身体としての訴えを聞くことを
            大事にしています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">治療へのアプローチ</h2>
          <p className="text-lg mb-4">
            できる限り、対処療法ではなく その原因となるものがどこにあるのか。
          </p>
          <p className="text-lg mb-4">
            日々でどんなことに気をつけたらいいのかなどを包括的な視点から見て、ひとりひとりに最適な形の治療をしていきたい。
          </p>
          <p className="text-lg mb-4">
            とにかく質の良い治療をひとりひとりに行っていきたい。そう思って日々施術をしています。
          </p>
        </section>

        <footer className="mb-8 text-lg font-medium">
          あめのみづ鍼灸院 中山　翔平
        </footer>

        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            ← ホームに戻る
          </button>
        </Link>
      </main>
    </div>
  );
}
