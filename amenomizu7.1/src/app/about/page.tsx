import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="あめのみづとは" />

      <main className="max-w-4xl mx-auto px-8 py-12 text-center">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">
            あめのみづ鍼灸院について
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            あめのみづ鍼灸院は
            <br />
            看板もありません。
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            特に広告も出していません。
          </p>
          <p className="text-lg leading-relaxed">
            ただ、いらっしゃる方のお話をお伺いし、
            <br />
            そこからお身体としての訴えを聞くことを
            <br />
            大事にしています。
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">治療へのアプローチ</h2>
          <p className="text-lg mb-6 leading-relaxed">
            できる限り、対症療法ではなく
            <br />
            その原因となるものがどこにあるのか。
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            日々でどんなことに気をつけたらいいのかなどを
            <br />
            包括的な視点から見て、
            <br />
            ひとりひとりに最適な形の治療をしていきたい。
          </p>
          <p className="text-lg leading-relaxed">
            とにかく質の良い治療をひとりひとりに行っていきたい。
            <br />
            そう思って日々施術をしています。
          </p>
        </section>

        <footer className="mb-8 text-lg font-medium">
          あめのみづ鍼灸院 中山　翔平
        </footer>
      </main>
    </div>
  );
}
