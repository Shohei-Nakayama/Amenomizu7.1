import Link from 'next/link'



export default function About() {
  return (
    <div className = "font-sans min-h-screen p-8">
      <main className = "max-w-4xl mx-auto">
          <h1 className = "text-4xl font-bold mb-4">About Page</h1>
          <p className = "text-lg mb-8">これはAboutページです</p>

        <Link href = "/">
          <button className = "bg-gray-500.hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" > 
            ← ホームに戻る
          </button>
        </Link>
      </main>
    </div>
  )
}