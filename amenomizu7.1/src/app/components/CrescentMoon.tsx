'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const CrescentMoon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'ホーム', href: '/', external: false },
    { label: 'あめのみづとは', href: '/about', external: false },
    { label: 'ご予約', href: '/reserve', external: false },
    { label: '料金', href: '/fee', external: false },
    { label: 'アクセス', href: '/access', external: false },
    { label: 'プロフィール', href: '/profile', external: false },
    { label: 'お問い合わせ', href: '/contact', external: false },
    { label: '日々のこと', href: 'https://whitesheep.amenomizu.jp', external: true },
  ];

  return (
    <>
      {/* 三日月メニューボタン */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
        aria-label="メニュー"
      >
        <svg width="35" height="35" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* 外側の大きな円（満月） */}
          <circle cx="25" cy="25" r="15" fill="#F4D03F" opacity="0.8" />
          {/* 内側の小さな円（切り取る部分） */}
          <circle cx="30" cy="25" r="12" fill="white" />
        </svg>
      </button>

      {/* メニューパネル */}
      {isMenuOpen && (
        <>
          {/* 背景オーバーレイ */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* メニュー内容 */}
          <div className="fixed top-20 right-6 z-50 bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300">
            <nav className="py-4">
              {menuItems.map((item, index) => (
                item.external ? (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-8 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      fontFamily:
                        '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-8 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      fontFamily:
                        '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default CrescentMoon;
