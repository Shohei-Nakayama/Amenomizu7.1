'use client';

import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fadeState, setFadeState] = useState<'fade-in' | 'visible' | 'fade-out'>('fade-in');

  useEffect(() => {
    // フェードイン完了後、表示状態へ
    const fadeInTimer = setTimeout(() => {
      setFadeState('visible');
    }, 500);

    // 1.5秒間表示した後、フェードアウト開始
    const fadeOutTimer = setTimeout(() => {
      setFadeState('fade-out');
    }, 2000);

    // フェードアウト完了後、コンポーネントを非表示
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-gradient-to-b from-blue-50 to-white
        transition-opacity duration-500
        ${fadeState === 'fade-in' ? 'opacity-0' : ''}
        ${fadeState === 'visible' ? 'opacity-100' : ''}
        ${fadeState === 'fade-out' ? 'opacity-0' : ''}
      `}
    >
      {/* 左上の小さな三日月 */}
      <div className="absolute top-8 left-8">
        <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* 外側の大きな円（満月） */}
          <circle cx="25" cy="25" r="15" fill="#F4D03F" opacity="0.8" />
          {/* 内側の小さな円（切り取る部分） */}
          <circle cx="30" cy="25" r="12" fill="#E8F4F8" />
        </svg>
      </div>

      {/* あめのみづ のタイトル */}
      <div className="relative w-full flex flex-col items-center">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl mb-8"
          style={{
            fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
            color: '#B8C9D9',
            letterSpacing: '0.2em',
            fontWeight: 300,
          }}
        >
          あめのみづ
        </h1>

        {/* 水平線と細い海 */}
        <div className="w-full relative" style={{ height: '80px' }}>
          {/* 水平線 */}
          <div
            className="w-full absolute"
            style={{
              top: '30px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #87CEEB 20%, #87CEEB 80%, transparent)',
            }}
          />
          {/* 海の部分 */}
          <div
            className="w-full absolute"
            style={{
              top: '32px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(135, 206, 235, 0.3), rgba(135, 206, 235, 0.1))',
            }}
          />
        </div>

        {/* since 2020.04.08〜 */}
        <p
          className="mt-8 text-gray-600 text-sm md:text-base"
          style={{
            fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho Pro", serif',
            letterSpacing: '0.1em',
          }}
        >
          since 2020.04.08〜
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
