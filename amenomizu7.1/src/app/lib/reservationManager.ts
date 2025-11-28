import fs from 'fs/promises';
import path from 'path';

// 予約状態の型定義
export type ReservationStatus = 'available' | 'reserved' | 'blocked';

export interface TimeSlotData {
  status: ReservationStatus;
  reservation?: {
    name: string;
    email: string;
    phone: string;
    address: string;
    birthdate: string;
    message?: string;
    createdAt: string;
  };
}

export interface DayReservations {
  [time: string]: TimeSlotData;
}

export interface ReservationsData {
  reservations: {
    [date: string]: DayReservations; // date format: YYYY-MM-DD
  };
}

const RESERVATIONS_FILE = path.join(process.cwd(), 'data', 'reservations.json');

// JSONファイルの読み込み
export async function readReservations(): Promise<ReservationsData> {
  try {
    const data = await fs.readFile(RESERVATIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // ファイルが存在しない場合は初期データを返す
    return { reservations: {} };
  }
}

// JSONファイルへの書き込み
export async function writeReservations(data: ReservationsData): Promise<void> {
  // dataディレクトリが存在しない場合は作成
  const dir = path.dirname(RESERVATIONS_FILE);
  await fs.mkdir(dir, { recursive: true });

  await fs.writeFile(RESERVATIONS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// 特定の日時の予約状況を取得
export async function getReservationStatus(
  date: string,
  time: string
): Promise<TimeSlotData> {
  const data = await readReservations();

  if (!data.reservations[date] || !data.reservations[date][time]) {
    return { status: 'available' };
  }

  return data.reservations[date][time];
}

// 特定の日の全ての予約状況を取得
export async function getDayReservations(date: string): Promise<DayReservations> {
  const data = await readReservations();
  return data.reservations[date] || {};
}

// 予約を作成
export async function createReservation(
  date: string,
  time: string,
  reservationInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    birthdate: string;
    message?: string;
  }
): Promise<{ success: boolean; error?: string }> {
  const data = await readReservations();

  // 日付のエントリがない場合は作成
  if (!data.reservations[date]) {
    data.reservations[date] = {};
  }

  // 既に予約されているかチェック
  const currentStatus = data.reservations[date][time];
  if (currentStatus && (currentStatus.status === 'reserved' || currentStatus.status === 'blocked')) {
    return { success: false, error: 'この時間は既に予約されているか、予約不可です' };
  }

  // 予約を作成
  data.reservations[date][time] = {
    status: 'reserved',
    reservation: {
      ...reservationInfo,
      createdAt: new Date().toISOString(),
    },
  };

  await writeReservations(data);
  return { success: true };
}

// 予約状況を切り替え（管理者用）
export async function toggleAvailability(
  date: string,
  time: string,
  newStatus: ReservationStatus
): Promise<void> {
  const data = await readReservations();

  // 日付のエントリがない場合は作成
  if (!data.reservations[date]) {
    data.reservations[date] = {};
  }

  // 状態を更新
  if (newStatus === 'available') {
    // availableの場合はエントリを削除
    delete data.reservations[date][time];

    // その日に予約がなければ日付のエントリも削除
    if (Object.keys(data.reservations[date]).length === 0) {
      delete data.reservations[date];
    }
  } else if (newStatus === 'blocked') {
    // blockedの場合は予約情報なしでステータスのみ設定
    data.reservations[date][time] = { status: 'blocked' };
  }
  // reservedの場合は何もしない（予約作成APIで処理）

  await writeReservations(data);
}

// 全予約データを取得（管理者用）
export async function getAllReservations(): Promise<ReservationsData> {
  return await readReservations();
}
