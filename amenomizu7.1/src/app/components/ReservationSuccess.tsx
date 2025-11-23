'use client';

import React from 'react';

interface ReservationSuccessProps {
  onClose: () => void;
}

const ReservationSuccess: React.FC<ReservationSuccessProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">予約完了</h2>
        </div>

        {/* メッセージ */}
        <div className="p-6 text-center space-y-4">
          {/* チェックマークアイコン */}
          <div className="flex justify-center">
            <div className="bg-green-100 rounded-full p-4">
              <svg
                className="w-16 h-16 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800">
            ご予約ありがとうございます！
          </h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p>予約を受け付けました。</p>
            <p>
              ご登録いただいたメールアドレスに確認メールをお送りしております。
            </p>
            <p className="text-xs text-gray-500 mt-4">
              ※
              確認メールが届かない場合は、迷惑メールフォルダをご確認いただくか、お電話にてお問い合わせください。
            </p>
          </div>

          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors font-semibold"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSuccess;
