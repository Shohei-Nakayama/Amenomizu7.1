import { NextRequest, NextResponse } from 'next/server';
import { getDayReservations } from '@/app/lib/reservationManager';

// 特定の日の予約状況を取得
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: '日付パラメータが必要です' },
        { status: 400 }
      );
    }

    const reservations = await getDayReservations(date);

    return NextResponse.json({ date, reservations });
  } catch (error) {
    console.error('予約状況の取得エラー:', error);
    return NextResponse.json(
      { error: '予約状況の取得に失敗しました' },
      { status: 500 }
    );
  }
}
