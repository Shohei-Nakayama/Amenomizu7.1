'use client';

import React, { useMemo } from 'react';

const NextMonthCalendar: React.FC = () => {
  // 現在の日付を取得
  const today = new Date();

  // 来月の年と月を計算
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const year = nextMonth.getFullYear();
  const month = nextMonth.getMonth();

  // カレンダーデータを生成
  const calendarData = useMemo(() => {
    // 来月の最初の日と最後の日
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // 月の最初の曜日（0: 日曜日, 6: 土曜日）
    const firstDayOfWeek = firstDay.getDay();

    // 月の日数
    const daysInMonth = lastDay.getDate();

    // カレンダーの配列を作成
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

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
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
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`
                    aspect-square flex items-center justify-center
                    rounded-lg transition-colors duration-200
                    ${day ? 'hover:bg-blue-100 cursor-pointer' : ''}
                    ${day && dayIndex === 0 ? 'text-red-500' : ''}
                    ${day && dayIndex === 6 ? 'text-blue-500' : ''}
                    ${day && dayIndex !== 0 && dayIndex !== 6 ? 'text-gray-700' : ''}
                  `}
                >
                  {day && (
                    <span className="text-lg font-medium">{day}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextMonthCalendar;
