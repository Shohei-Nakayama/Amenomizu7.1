import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { getAllPosts } from "../lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="ブログ" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">
              まだ記事がありません。
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.image && (
                    <div className="relative w-full h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-sm text-gray-500 mb-2 block">
                      {post.date}
                    </time>
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
