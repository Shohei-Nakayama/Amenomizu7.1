// 予約関連の型定義

export interface ReservationData {
  date: Date;
  time: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthdate: string;
  message?: string;
}

export interface SelectedDate {
  year: number;
  month: number;
  day: number;
  date: Date;
}
