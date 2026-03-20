import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "../../lib/blog";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="ブログ" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          {post.image && (
            <div className="relative w-full h-96 mb-8 -mx-8 -mt-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
          )}

          <header className="mb-8">
            <time className="text-sm text-gray-500 mb-2 block">
              {post.date}
            </time>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {post.title}
            </h1>
          </header>

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-semibold prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-img:rounded-lg prose-img:shadow-md
              prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            ブログ一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
