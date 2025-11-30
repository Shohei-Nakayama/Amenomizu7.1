'use client';

import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  subtitle?: string;
  showBackButton?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  subtitle,
  showBackButton = true
}) => {
  return (
    <>
      {/* ホームに戻るボタン（固定位置） */}
      {showBackButton && (
        <div className="fixed top-6 left-6 z-50">
          <Link href="/">
            <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg">
              ← ホームに戻る
            </button>
          </Link>
        </div>
      )}

      <header className="bg-white shadow-sm border-b pt-20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1
            className="text-3xl font-bold text-gray-800 text-center"
            style={{
              fontFamily:
                '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
              letterSpacing: '0.05em',
            }}
          >
            あめのみづ鍼灸院
          </h1>

          {subtitle && (
            <p className="text-center text-gray-600 mt-2">{subtitle}</p>
          )}
        </div>
      </header>
    </>
  );
};

export default PageHeader;
