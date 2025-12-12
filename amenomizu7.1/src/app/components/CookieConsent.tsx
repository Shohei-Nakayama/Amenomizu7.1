'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // localStorageから同意状態を確認
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // 同意していない場合はバナーを表示
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // localStorageに同意を保存
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    // localStorageに拒否を保存
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-300 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* テキスト部分 */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Cookieの使用について
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              当サイトでは、サービスの向上及びウェブサイトの改善のため、Google Analytics等のCookieを使用しています。
              詳しくは
              <Link
                href="/privacy"
                className="text-blue-600 hover:text-blue-800 underline mx-1"
              >
                プライバシーポリシー
              </Link>
              をご確認ください。
            </p>
          </div>

          {/* ボタン部分 */}
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-sm"
            >
              拒否
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-sm shadow-md"
            >
              同意する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
