'use client';

import React, { useMemo } from 'react';

// 単一月のカレンダーコンポーネント
interface MonthCalendarProps {
  year: number;
  month: number;
  tomorrow: Date;
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({ year, month, tomorrow }) => {
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
                  {day && (
                    <span className="text-lg font-medium">{day}</span>
                  )}
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
  // 現在の日付を取得
  const today = new Date();

  // 明日の日付を計算（時刻を00:00:00にリセット）
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  // 今月と来月の情報を取得
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);
  const nextYear = nextMonthDate.getFullYear();
  const nextMonth = nextMonthDate.getMonth();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 今月のカレンダー */}
      <MonthCalendar year={currentYear} month={currentMonth} tomorrow={tomorrow} />

      {/* 来月のカレンダー */}
      <MonthCalendar year={nextYear} month={nextMonth} tomorrow={tomorrow} />
    </div>
  );
};

export default NextMonthCalendar;
