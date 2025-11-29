// 日本の祝日を判定するユーティリティ

export const isHoliday = (date: Date): boolean => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 2025年の祝日リスト
  const holidays2025 = [
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
  ];

  if (year === 2025) {
    return holidays2025.some(h => h.month === month && h.day === day);
  }

  // 他の年の祝日は必要に応じて追加
  return false;
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
