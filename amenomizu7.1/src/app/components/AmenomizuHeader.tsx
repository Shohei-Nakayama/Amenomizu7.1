import React, { useEffect, useState } from "react";

const AmenomizuHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // コンポーネントマウント時にアニメーションを開始
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* 背景とメインコンテンツ */}
      <div
        className={`
          relative overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ minHeight: "200px" }}
      >
        {/* 背景の雲のような装飾 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-16 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-20 right-20 w-24 h-12 bg-white rounded-full blur-sm"></div>
          <div className="absolute top-5 right-32 w-20 h-10 bg-white rounded-full blur-sm"></div>
        </div>

        {/* メインタイトル */}
        <div className="relative z-10 flex flex-col items-center justify-center py-12">
          <h1
            className={`
              text-5xl md:text-6xl lg:text-7xl font-bold text-gray-700
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
            style={{
              fontFamily:
                '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
              letterSpacing: "0.1em",
            }}
          >
            あめのみづ鍼灸院
          </h1>

          {/* サブタイトル */}
          <p
            className={`
              mt-3 text-gray-500 text-xs md:text-sm
              transition-all duration-1000 ease-out delay-400
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }
            `}
            style={{
              fontFamily:
                '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
              letterSpacing: "0.05em",
            }}
          >
            刺さない経絡治療と、自力で治す情報を渡す鍼灸院
          </p>

          {/* サブテキスト */}
          <p
            className={`
              mt-2 text-gray-600 text-sm md:text-base
              transition-all duration-1000 ease-out delay-500
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }
            `}
          >
            since 2020.04.08〜
          </p>
        </div>

        {/* 舟のようなデザイン（下部の波状装飾） */}
        <div
          className={`
            absolute bottom-0 left-0 w-full
            transition-all duration-1000 ease-out delay-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          {/* 上部の青いライン */}
          <div className="w-full h-1 bg-blue-400 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300"></div>
          </div>

          {/* 波状の装飾 */}
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-8 fill-blue-200"
            preserveAspectRatio="none"
          >
            <path d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" />
          </svg>

          {/* より深い波 */}
          <svg
            viewBox="0 0 1200 100"
            className="w-full h-6 fill-blue-100 -mt-2"
            preserveAspectRatio="none"
          >
            <path d="M0,50 Q200,10 400,50 T800,50 T1200,50 L1200,100 L0,100 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AmenomizuHeader;
