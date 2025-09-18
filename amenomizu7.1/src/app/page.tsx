// src/app/page.tsx - アニメーション追加版
"use client"; // この行を追加（React hooksを使用するため）

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ページ読み込み後に少し遅延してアニメーション開始
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* アニメーション付きヘッダー部分 */}
        <div className="text-center mb-8">
          <h1
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-2
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }
            `}
            style={{
              fontFamily:
                '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
              letterSpacing: "0.1em",
            }}
          >
            あめのみづ鍼灸院
          </h1>

          <h2
            className={`
              text-gray-600 text-sm md:text-base
              transition-all duration-1000 ease-out delay-300
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            since 2020.04.08 〜
          </h2>
        </div>

        {/* ナビゲーションにも軽いアニメーション */}
        <nav
          className={`
            transition-all duration-1000 ease-out delay-500
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/about"
                className="hover:text-yellow-500 transition-colors"
              >
                コンセプト{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                  （あめのみづ鍼灸院について）
                </code>
              </Link>
            </li>

            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/reserve"
                className="hover:text-yellow-500 transition-colors"
              >
                予約
              </Link>
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/fee"
                className="hover:text-yellow-500 transition-colors"
              >
                料金
              </Link>
            </li>

            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/access"
                className="hover:text-yellow-500 transition-colors"
              >
                アクセス
              </Link>
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/contact"
                className="hover:text-yellow-500 transition-colors"
              >
                お問合せ
              </Link>
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/profile"
                className="hover:text-yellow-500 transition-colors"
              >
                私について
              </Link>
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <Link
                href="/writing"
                className="hover:text-yellow-500 transition-colors"
              >
                医術ノート（最新）
              </Link>
            </li>
          </ol>
        </nav>

        {/* ボタン類にもアニメーション */}
        <div
          className={`
            flex gap-4 items-center flex-col sm:flex-row
            transition-all duration-1000 ease-out delay-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://amenomizu.webflow.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            in English
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://amenomizu.jp/blog1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
