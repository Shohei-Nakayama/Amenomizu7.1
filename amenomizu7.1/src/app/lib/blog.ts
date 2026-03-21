import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  image?: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
}

// すべてのブログ記事のメタデータを取得
export function getAllPosts(): BlogPostMetadata[] {
  // ディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // 日付を文字列に変換
      let dateString: string;
      if (data.date instanceof Date) {
        dateString = data.date.toISOString().split('T')[0];
      } else if (typeof data.date === 'string') {
        dateString = data.date;
      } else {
        dateString = new Date().toISOString().split('T')[0];
      }

      const mtime = fs.statSync(fullPath).mtime.getTime();

      return {
        slug,
        title: data.title || slug,
        date: dateString,
        excerpt: data.excerpt || '',
        image: data.image || '',
        mtime,
      };
    });

  // 日付でソート（新しい順）、同じ日付はファイル更新日時で並べる
  return allPostsData.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return (b as any).mtime - (a as any).mtime;
  });
}

// 特定のブログ記事を取得
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // MarkdownをHTMLに変換
    const htmlContent = await marked(content);

    // 日付を文字列に変換
    let dateString: string;
    if (data.date instanceof Date) {
      dateString = data.date.toISOString().split('T')[0];
    } else if (typeof data.date === 'string') {
      dateString = data.date;
    } else {
      dateString = new Date().toISOString().split('T')[0];
    }

    return {
      slug,
      title: data.title || slug,
      date: dateString,
      excerpt: data.excerpt || '',
      content: htmlContent,
      image: data.image || '',
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// すべての記事のslugを取得（動的ルート用）
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
