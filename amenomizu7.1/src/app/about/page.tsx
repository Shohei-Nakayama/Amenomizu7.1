import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen p-8 text-center">
      <main className="max-w-4xl mx-auto">
        <Image
          className="dark:invert mx-auto"
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
        <br />
        <h1 className="text-4xl font-bold mb-4 ">あめのみづ鍼灸院について</h1>
        <br />
        <p className="text-lg mb-8">
          あめのみづ鍼灸院は 看板もありません。 <br />
          特に広告も出していません。 <br />
          ただ、いらっしゃる方のお話をお伺いし
          <br />
          そこからお身体としての訴えを聞くことを 大事にしています。
          <br />
          <br />
          できる限り、対処療法ではなく
          <br />
          その原因となるものがどこにあるのか。
          <br />
          日々でどんなことに気をつけたらいいのかなどを
          <br />
          包括的な視点から見て
          <br />
          ひとりひとりに最適な形の治療をしていきたい。
          <br />
          とにかく質の良い治療をひとりひとりに行っていきたい。
          <br />
          そう思って日々施術をしています。 <br />
          <br />
          <br />
          あめのみづ鍼灸院 中山　翔平
        </p>

        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            ← ホームに戻る
          </button>
        </Link>
      </main>
    </div>
  );
}
