'use client';

import React from 'react';
import { ReservationData } from '../types/reservation';

interface ReservationConfirmationProps {
  data: ReservationData;
  onBack: () => void;
  onSubmit: () => void;
}

const ReservationConfirmation: React.FC<ReservationConfirmationProps> = ({
  data,
  onBack,
  onSubmit,
}) => {
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekDay = weekDays[date.getDay()];
    return `${year}年${month}月${day}日（${weekDay}）`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">予約内容の確認</h2>
        </div>

        {/* 確認内容 */}
        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-sm text-center mb-6">
            以下の内容でよろしければ「予約を確定する」ボタンを押してください
          </p>

          {/* 予約日時 */}
          <div className="bg-blue-50 rounded-lg p-4 space-y-2">
            <div>
              <p className="text-xs text-gray-600 mb-1">ご予約日</p>
              <p className="text-lg font-bold text-gray-800">
                {formatDate(data.date)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">時間帯</p>
              <p className="text-lg font-bold text-gray-800">{data.time}</p>
            </div>
          </div>

          {/* お客様情報 */}
          <div className="space-y-3">
            <div className="border-b pb-3">
              <p className="text-xs text-gray-600 mb-1">お名前</p>
              <p className="text-base text-gray-800">{data.name}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-xs text-gray-600 mb-1">メールアドレス</p>
              <p className="text-base text-gray-800">{data.email}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-xs text-gray-600 mb-1">電話番号</p>
              <p className="text-base text-gray-800">{data.phone}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-xs text-gray-600 mb-1">住所</p>
              <p className="text-base text-gray-800">{data.address}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-xs text-gray-600 mb-1">生年月日</p>
              <p className="text-base text-gray-800">{data.birthdate}</p>
            </div>

            {data.message && (
              <div className="border-b pb-3">
                <p className="text-xs text-gray-600 mb-1">
                  メッセージ・ご要望
                </p>
                <p className="text-base text-gray-800 whitespace-pre-wrap">
                  {data.message}
                </p>
              </div>
            )}
          </div>

          {/* 注意事項 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-xs text-yellow-800">
              ※
              予約確定後、ご登録いただいたメールアドレスに確認メールをお送りします。
            </p>
            <p className="text-xs text-yellow-800 mt-1">
              ※ キャンセルや変更がある場合は、お早めにご連絡ください。
            </p>
          </div>

          {/* ボタン */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              ← 戻る
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-colors font-semibold"
            >
              予約を確定する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
