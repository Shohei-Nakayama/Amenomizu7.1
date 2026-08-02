// 日本の祝日を判定するユーティリティ

// 年ごとの祝日リスト（内閣府発表の日付に基づく。振替休日・国民の休日を含む）
const holidaysByYear: Record<number, { month: number; day: number }[]> = {
  2025: [
    { month: 1, day: 1 },   // 元日
    { month: 1, day: 13 },  // 成人の日
    { month: 2, day: 11 },  // 建国記念の日
    { month: 2, day: 23 },  // 天皇誕生日
    { month: 3, day: 20 },  // 春分の日
    { month: 4, day: 29 },  // 昭和の日
    { month: 5, day: 3 },   // 憲法記念日
    { month: 5, day: 4 },   // みどりの日
    { month: 5, day: 5 },   // こどもの日
    { month: 7, day: 21 },  // 海の日
    { month: 8, day: 11 },  // 山の日
    { month: 9, day: 15 },  // 敬老の日
    { month: 9, day: 23 },  // 秋分の日
    { month: 10, day: 13 }, // スポーツの日
    { month: 11, day: 3 },  // 文化の日
    { month: 11, day: 23 }, // 勤労感謝の日
    { month: 11, day: 24 }, // 勤労感謝の日振替休日
  ],
  2026: [
    { month: 1, day: 1 },   // 元日
    { month: 1, day: 12 },  // 成人の日
    { month: 2, day: 11 },  // 建国記念の日
    { month: 2, day: 23 },  // 天皇誕生日
    { month: 3, day: 20 },  // 春分の日
    { month: 4, day: 29 },  // 昭和の日
    { month: 5, day: 3 },   // 憲法記念日
    { month: 5, day: 4 },   // みどりの日
    { month: 5, day: 5 },   // こどもの日
    { month: 5, day: 6 },   // 振替休日（憲法記念日）
    { month: 7, day: 20 },  // 海の日
    { month: 8, day: 11 },  // 山の日
    { month: 9, day: 21 },  // 敬老の日
    { month: 9, day: 22 },  // 国民の休日
    { month: 9, day: 23 },  // 秋分の日
    { month: 10, day: 12 }, // スポーツの日
    { month: 11, day: 3 },  // 文化の日
    { month: 11, day: 23 }, // 勤労感謝の日
  ],
};

export const isHoliday = (date: Date): boolean => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const holidays = holidaysByYear[year];
  if (!holidays) {
    // 未登録の年は必要に応じて追加
    return false;
  }

  return holidays.some(h => h.month === month && h.day === day);
};

export const isSunday = (date: Date): boolean => {
  return date.getDay() === 0;
};

export const isSaturday = (date: Date): boolean => {
  return date.getDay() === 6;
};

export const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6; // 日曜日または土曜日
};

export const isWeekday = (date: Date): boolean => {
  const day = date.getDay();
  return day >= 1 && day <= 5;
};
