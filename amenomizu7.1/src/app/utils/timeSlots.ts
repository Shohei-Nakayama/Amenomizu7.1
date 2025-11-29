import { isHoliday, isWeekend } from './holidays';

// 予約可能な時間帯を取得
export const getAvailableTimeSlots = (date: Date): string[] => {
  const today = new Date();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  // 明日の日付かチェック
  const isTomorrow =
    date.getFullYear() === tomorrow.getFullYear() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getDate() === tomorrow.getDate();

  // 12/27〜12/31の期間かチェック
  const isYearEnd =
    date.getMonth() === 11 && // 12月
    date.getDate() >= 27 &&
    date.getDate() <= 31;

  // 土日、祝日、明日、年末の場合は「お問合せください」
  if (isWeekend(date) || isHoliday(date) || isTomorrow || isYearEnd) {
    return ['お問合せください'];
  }

  // 平日（月〜金）の場合は19時
  return ['19:00'];
};

// 時間帯が「お問合せください」かどうか
export const isContactRequired = (timeSlots: string[]): boolean => {
  return timeSlots.length === 1 && timeSlots[0] === 'お問合せください';
};
