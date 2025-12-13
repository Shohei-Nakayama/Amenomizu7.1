import { supabaseAdmin } from './supabase';

// 予約状態の型定義
export type ReservationStatus = 'available' | 'blocked';

export interface ReservationBlock {
  id: string;
  date: string; // YYYY-MM-DD format
  time: string;
  status: ReservationStatus;
  created_at: string;
  updated_at: string;
}

// 特定の日時の予約状況を取得
export async function getReservationStatus(
  date: string,
  time: string
): Promise<ReservationStatus> {
  const { data, error } = await supabaseAdmin
    .from('reservation_blocks')
    .select('status')
    .eq('date', date)
    .eq('time', time)
    .single();

  if (error || !data) {
    return 'available';
  }

  return data.status as ReservationStatus;
}

// 特定の日の全ての予約状況を取得
export async function getDayReservations(date: string): Promise<Record<string, ReservationStatus>> {
  const { data, error } = await supabaseAdmin
    .from('reservation_blocks')
    .select('time, status')
    .eq('date', date);

  if (error || !data) {
    return {};
  }

  const result: Record<string, ReservationStatus> = {};
  data.forEach((block) => {
    result[block.time] = block.status as ReservationStatus;
  });

  return result;
}

// 予約状況を切り替え（管理者用）
export async function toggleAvailability(
  date: string,
  time: string,
  newStatus: ReservationStatus
): Promise<{ success: boolean; error?: string }> {
  if (newStatus === 'available') {
    // availableの場合はレコードを削除
    const { error } = await supabaseAdmin
      .from('reservation_blocks')
      .delete()
      .eq('date', date)
      .eq('time', time);

    if (error) {
      console.error('削除エラー:', error);
      return { success: false, error: error.message };
    }
  } else if (newStatus === 'blocked') {
    // blockedの場合はupsert（存在すれば更新、なければ挿入）
    const { error } = await supabaseAdmin
      .from('reservation_blocks')
      .upsert(
        {
          date,
          time,
          status: 'blocked',
        },
        {
          onConflict: 'date,time',
        }
      );

    if (error) {
      console.error('Upsertエラー:', error);
      return { success: false, error: error.message };
    }
  }

  return { success: true };
}

// 全予約データを取得（管理者用）
export async function getAllReservations(): Promise<Record<string, Record<string, ReservationStatus>>> {
  const { data, error } = await supabaseAdmin
    .from('reservation_blocks')
    .select('date, time, status')
    .order('date', { ascending: true });

  if (error || !data) {
    console.error('全予約取得エラー:', error);
    return {};
  }

  const result: Record<string, Record<string, ReservationStatus>> = {};
  data.forEach((block) => {
    if (!result[block.date]) {
      result[block.date] = {};
    }
    result[block.date][block.time] = block.status as ReservationStatus;
  });

  return result;
}
