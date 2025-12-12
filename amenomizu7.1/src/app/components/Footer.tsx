import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 to-blue-50 border-t border-blue-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* フッターコンテンツ */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 左側：クリニック名 */}
          <div className="text-center md:text-left">
            <h3
              className="text-xl font-bold text-gray-700"
              style={{
                fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
                letterSpacing: '0.1em',
              }}
            >
              あめのみづ鍼灸院
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              since 2020.04.08
            </p>
          </div>

          {/* 中央：ナビゲーションリンク */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              ホーム
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              あめのみづとは
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              プライバシーポリシー
            </Link>
          </nav>

          {/* 右側：住所情報 */}
          <div className="text-center md:text-right text-sm text-gray-600">
            <p>〒252-0001</p>
            <p>神奈川県座間市相模が丘1-23-28</p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-6 pt-4 border-t border-blue-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} あめのみづ鍼灸院. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
