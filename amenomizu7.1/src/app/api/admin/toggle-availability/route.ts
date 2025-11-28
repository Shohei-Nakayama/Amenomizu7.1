import { NextRequest, NextResponse } from 'next/server';
import { toggleAvailability, ReservationStatus } from '@/app/lib/reservationManager';

// 予約可/不可を切り替え（管理者用）
export async function POST(request: NextRequest) {
  try {
    // 簡易的な認証チェック
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: '認証が無効です' }, { status: 403 });
    }

    const body = await request.json();
    const { date, time, status } = body;

    // バリデーション
    if (!date || !time || !status) {
      return NextResponse.json(
        { error: '日付、時間、ステータスが必要です' },
        { status: 400 }
      );
    }

    if (!['available', 'blocked'].includes(status)) {
      return NextResponse.json(
        { error: 'ステータスはavailableまたはblockedである必要があります' },
        { status: 400 }
      );
    }

    await toggleAvailability(date, time, status as ReservationStatus);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('予約状況切り替えエラー:', error);
    return NextResponse.json(
      { error: '予約状況の切り替えに失敗しました' },
      { status: 500 }
    );
  }
}
