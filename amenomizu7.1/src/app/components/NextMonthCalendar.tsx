'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReservationForm from './ReservationForm';
import ReservationConfirmation from './ReservationConfirmation';
import { SelectedDate, ReservationData } from '../types/reservation';

// 単一月のカレンダーコンポーネント
interface MonthCalendarProps {
  year: number;
  month: number;
  tomorrow: Date;
  onDateClick: (year: number, month: number, day: number) => void;
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({
  year,
  month,
  tomorrow,
  onDateClick,
}) => {
  // カレンダーデータを生成
  const calendarData = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const calendar: (number | null)[] = [];

    // 最初の週の空白を追加
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(null);
    }

    // 日付を追加
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }

    return calendar;
  }, [year, month]);

  // 週ごとに分割
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarData.length; i += 7) {
    weeks.push(calendarData.slice(i, i + 7));
  }

  // 曜日のラベル
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

  // 日付が予約可能かどうかをチェック
  const isBookable = (day: number | null): boolean => {
    if (!day) return false;
    const targetDate = new Date(year, month, day);
    return targetDate >= tomorrow;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6">
        <h2 className="text-2xl font-bold text-center">
          {year}年{month + 1}月
        </h2>
      </div>

      {/* カレンダー本体 */}
      <div className="p-4">
        {/* 曜日ヘッダー */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`
                text-center font-semibold py-2
                ${index === 0 ? 'text-red-500' : ''}
                ${index === 6 ? 'text-blue-500' : ''}
                ${index !== 0 && index !== 6 ? 'text-gray-600' : ''}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        {/* 日付グリッド */}
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2 mb-2">
            {week.map((day, dayIndex) => {
              const bookable = isBookable(day);
              return (
                <div
                  key={dayIndex}
                  onClick={() => {
                    if (day && bookable) {
                      onDateClick(year, month, day);
                    }
                  }}
                  className={`
                    aspect-square flex items-center justify-center
                    rounded-lg transition-colors duration-200
                    ${day && bookable ? 'hover:bg-blue-100 cursor-pointer' : ''}
                    ${day && !bookable ? 'bg-gray-100 cursor-not-allowed' : ''}
                    ${day && bookable && dayIndex === 0 ? 'text-red-500' : ''}
                    ${day && bookable && dayIndex === 6 ? 'text-blue-500' : ''}
                    ${day && bookable && dayIndex !== 0 && dayIndex !== 6 ? 'text-gray-700' : ''}
                    ${day && !bookable ? 'text-gray-400' : ''}
                  `}
                >
                  {day && <span className="text-lg font-medium">{day}</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const NextMonthCalendar: React.FC = () => {
  const router = useRouter();

  // 現在の日付を取得
  const today = new Date();

  // 明日の日付を計算（時刻を00:00:00にリセット）
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  // 今月と来月の情報を取得
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);
  const nextYear = nextMonthDate.getFullYear();
  const nextMonth = nextMonthDate.getMonth();

  // 状態管理
  const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null);
  const [reservationData, setReservationData] =
    useState<ReservationData | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 日付クリック時の処理
  const handleDateClick = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    setSelectedDate({ year, month, day, date });
  };

  // フォームの確認ボタン押下時
  const handleFormConfirm = (data: ReservationData) => {
    setReservationData(data);
    setShowConfirmation(true);
  };

  // 確認画面から戻る
  const handleBackToForm = () => {
    setShowConfirmation(false);
  };

  // 予約確定
  const handleSubmit = async () => {
    if (!reservationData) return;

    setIsSubmitting(true);

    try {
      // StaticForms APIに送信するデータを準備
      const formData = new FormData();
      formData.append('accessKey', 'bf0d0e6d-45eb-4522-9145-eadfd121fe9a');
      formData.append('subject', '【予約】あめのみづ鍼灸院 予約フォーム');

      // 予約情報を整形してメッセージとして送信
      const message = `
【予約情報】

予約日時: ${reservationData.date.getFullYear()}年${reservationData.date.getMonth() + 1}月${reservationData.date.getDate()}日 ${reservationData.time}

【お客様情報】
お名前: ${reservationData.name}
メールアドレス: ${reservationData.email}
電話番号: ${reservationData.phone}
住所: ${reservationData.address}
生年月日: ${reservationData.birthdate}

【メッセージ・ご要望】
${reservationData.message || 'なし'}
      `;

      formData.append('name', reservationData.name);
      formData.append('email', reservationData.email);
      formData.append('message', message);

      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // 送信成功後、完了ページにリダイレクト
        router.push('/reserve/success');
      } else {
        alert('予約の送信に失敗しました。もう一度お試しください。');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('予約の送信に失敗しました。もう一度お試しください。');
      setIsSubmitting(false);
    }
  };

  // フォームを閉じる
  const handleCloseForm = () => {
    setSelectedDate(null);
    setReservationData(null);
    setShowConfirmation(false);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* 今月のカレンダー */}
        <MonthCalendar
          year={currentYear}
          month={currentMonth}
          tomorrow={tomorrow}
          onDateClick={handleDateClick}
        />

        {/* 来月のカレンダー */}
        <MonthCalendar
          year={nextYear}
          month={nextMonth}
          tomorrow={tomorrow}
          onDateClick={handleDateClick}
        />
      </div>

      {/* 予約フォーム */}
      {selectedDate && !showConfirmation && (
        <ReservationForm
          selectedDate={selectedDate}
          onClose={handleCloseForm}
          onConfirm={handleFormConfirm}
        />
      )}

      {/* 確認画面 */}
      {showConfirmation && reservationData && (
        <ReservationConfirmation
          data={reservationData}
          onBack={handleBackToForm}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </>
  );
};

export default NextMonthCalendar;
