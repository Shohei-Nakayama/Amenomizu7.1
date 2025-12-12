import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="あめのみづとは" />

      <main className="max-w-4xl mx-auto px-8 py-12 text-center">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            あめのみづ鍼灸院について
          </h2>
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
            できる限り、対症療法ではなく その原因となるものがどこにあるのか。
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
      </main>
    </div>
  );
}
