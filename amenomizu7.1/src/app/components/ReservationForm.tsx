'use client';

import React, { useState, useEffect } from 'react';
import { ReservationData, SelectedDate } from '../types/reservation';
import { getAvailableTimeSlots, isContactRequired } from '../utils/timeSlots';

interface ReservationFormProps {
  selectedDate: SelectedDate;
  onClose: () => void;
  onConfirm: (data: ReservationData) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  selectedDate,
  onClose,
  onConfirm,
}) => {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseTimeSlots = getAvailableTimeSlots(selectedDate.date);
  const needsContact = isContactRequired(baseTimeSlots);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthdate: '',
    message: '',
    time: needsContact ? 'お問合せください' : '',
  });

  // 予約状況を取得
  useEffect(() => {
    const fetchReservationStatus = async () => {
      if (needsContact) {
        setAvailableSlots(baseTimeSlots);
        setIsLoading(false);
        return;
      }

      try {
        const dateStr = `${selectedDate.year}-${String(selectedDate.month + 1).padStart(2, '0')}-${String(selectedDate.day).padStart(2, '0')}`;
        const response = await fetch(`/api/reservations/status?date=${dateStr}`);

        if (response.ok) {
          const data = await response.json();
          const reservations = data.reservations || {};

          // 予約可能な時間のみをフィルタリング
          const available = baseTimeSlots.filter((slot) => {
            const slotData = reservations[slot];
            // 予約済み(reserved)または予約不可(blocked)の場合は除外
            return !slotData || slotData.status === 'available';
          });

          setAvailableSlots(available);
          // デフォルトの時間を設定
          if (available.length > 0) {
            setFormData((prev) => ({ ...prev, time: available[0] }));
          }
        } else {
          // エラー時はベースの時間帯を使用
          setAvailableSlots(baseTimeSlots);
          setFormData((prev) => ({ ...prev, time: baseTimeSlots[0] || '' }));
        }
      } catch (error) {
        console.error('予約状況の取得エラー:', error);
        // エラー時はベースの時間帯を使用
        setAvailableSlots(baseTimeSlots);
        setFormData((prev) => ({ ...prev, time: baseTimeSlots[0] || '' }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchReservationStatus();
  }, [selectedDate, needsContact, baseTimeSlots]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reservationData: ReservationData = {
      date: selectedDate.date,
      time: formData.time,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      birthdate: formData.birthdate,
      message: formData.message,
    };

    onConfirm(reservationData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">ご予約フォーム</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
              aria-label="閉じる"
            >
              ×
            </button>
          </div>
        </div>

        {/* フォーム本体 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* 選択日付 */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">ご希望日</p>
            <p className="text-xl font-bold text-gray-800">
              {selectedDate.year}年{selectedDate.month + 1}月{selectedDate.day}日
            </p>
          </div>

          {/* 時間帯 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              時間帯
            </label>
            {isLoading ? (
              <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                予約状況を確認中...
              </div>
            ) : needsContact ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-semibold">
                  お問合せください
                </p>
                <p className="text-sm text-yellow-700 mt-1">
                  この日付は直接お問い合わせが必要です。メッセージ欄にご希望の時間帯をご記入ください。
                </p>
              </div>
            ) : availableSlots.length === 0 ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-semibold">予約不可</p>
                <p className="text-sm text-red-700 mt-1">
                  この日付は予約がいっぱいまたは予約不可です。他の日付をお選びください。
                </p>
              </div>
            ) : (
              <select
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* お名前 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="山田 太郎"
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="example@example.com"
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              電話番号 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="090-1234-5678"
            />
          </div>

          {/* 住所 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              住所 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="東京都渋谷区〇〇1-2-3"
            />
          </div>

          {/* 生年月日 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              生年月日 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.birthdate}
              onChange={(e) =>
                setFormData({ ...formData, birthdate: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* メッセージ */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              メッセージ・ご要望
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder={
                needsContact
                  ? 'ご希望の時間帯をご記入ください'
                  : 'ご要望やご質問がありましたらご記入ください'
              }
            />
          </div>

          {/* ボタン */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors font-semibold"
            >
              確認画面へ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
