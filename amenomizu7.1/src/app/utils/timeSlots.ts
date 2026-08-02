import { isHoliday, isSaturday, isSunday } from './holidays';

// 1時間単位の時間帯リストを生成（例: 9〜16時 → ['09:00', ..., '16:00']）
const generateHourlySlots = (startHour: number, endHour: number): string[] => {
  const slots: string[] = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    slots.push(`${String(hour).padStart(2, '0')}:00`);
  }
  return slots;
};

// 1回の施術で埋まる連続枠数（1時間単位の枠が対象。開始枠を含めて3枠＝3時間分）
const SLOTS_PER_BOOKING = 3;

// 曜日に応じた基本の時間帯（前日・年末等の特例は考慮しない、管理画面用）
export const getBaseTimeSlots = (date: Date): string[] => {
  // 祝日は曜日に関わらず日曜と同じ扱い（9:00〜14:00、1時間単位）
  if (isHoliday(date)) {
    return generateHourlySlots(9, 14);
  }

  // 土曜日は9:00〜16:00（1時間単位）
  if (isSaturday(date)) {
    return generateHourlySlots(9, 16);
  }

  // 日曜日は9:00〜14:00（1時間単位）
  if (isSunday(date)) {
    return generateHourlySlots(9, 14);
  }

  // 平日（月〜金）の場合は19時
  return ['19:00'];
};

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

  // 明日、年末の場合は「お問合せください」
  if (isTomorrow || isYearEnd) {
    return ['お問合せください'];
  }

  return getBaseTimeSlots(date);
};

// 時間帯が「お問合せください」かどうか
export const isContactRequired = (timeSlots: string[]): boolean => {
  return timeSlots.length === 1 && timeSlots[0] === 'お問合せください';
};

// 指定した枠の予約によって埋まる連続枠（施術時間分）を取得
// 例: 土曜9:00を予約 → ['09:00', '10:00', '11:00'] を返す
export const getSlotsToBlock = (date: Date, time: string): string[] => {
  const daySlots = getAvailableTimeSlots(date);
  const index = daySlots.indexOf(time);

  if (index === -1) {
    return [time];
  }

  return daySlots.slice(index, index + SLOTS_PER_BOOKING);
};
