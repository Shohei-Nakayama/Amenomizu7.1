// src/app/page.tsx - 波状装飾付き完全版（中央揃え修正版）
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // 初回訪問かどうかをチェック
    const hasVisited = localStorage.getItem('hasVisitedAmenomizu');

    if (!hasVisited) {
      // 初回訪問の場合、スプラッシュスクリーンを表示
      setShowSplash(true);
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // 訪問済みフラグを保存
    localStorage.setItem('hasVisitedAmenomizu', 'true');
  };

  return (
    <>
      {/* スプラッシュスクリーン */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* メインコンテンツ - スプラッシュスクリーン終了後のみ表示 */}
      {!showSplash && (
        <div className="font-sans min-h-screen">
          {/* ヘッダー部分（波状装飾付き） */}
          <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* 軽やかな背景装飾 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-16 bg-blue-200 rounded-full blur-xl"></div>
              <div className="absolute top-20 right-20 w-24 h-12 bg-blue-100 rounded-full blur-lg"></div>
              <div className="absolute top-8 right-1/3 w-20 h-10 bg-blue-200 rounded-full blur-lg"></div>
            </div>

            <div className="relative z-10 p-8 pb-20 gap-16 sm:p-20">
              <main className="flex flex-col gap-[32px] items-center max-w-4xl mx-auto">
                {/* アニメーション付きヘッダー部分 */}
                <div className="text-center mb-8 w-full">
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
                  <ol className="font-mono list-inside list-decimal text-sm/6 text-center">
                    <li className="mb-2 tracking-[-.01em]">
                      <Link
                        href="/about"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                          あめのみづ鍼灸院について
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
            </div>

            {/* 波状の下部装飾 */}
            <div
              className={`
            absolute bottom-0 left-0 w-full
            transition-all duration-1000 ease-out delay-900
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
            >
              {/* 上部の青いライン */}
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>

              {/* 第一の波 */}
              <svg
                viewBox="0 0 1200 60"
                className="w-full h-8 fill-blue-100"
                preserveAspectRatio="none"
              >
                <path d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z" />
              </svg>

              {/* 第二の波（より深い） */}
              <svg
                viewBox="0 0 1200 80"
                className="w-full h-6 fill-blue-50 -mt-1"
                preserveAspectRatio="none"
              >
                <path d="M0,40 Q200,15 400,40 T800,40 T1200,40 L1200,80 L0,80 Z" />
              </svg>
            </div>
          </div>

          {/* メインコンテンツ部分（フッター） */}
          <div className="px-8 pb-20 pt-8 sm:px-20">
            <footer className="flex gap-[24px] flex-wrap items-center justify-center">
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
        </div>
      )}
    </>
  );
}
