import { NextRequest, NextResponse } from 'next/server';
import { getAllReservations } from '@/app/lib/reservationManager';

// 全予約データを取得（管理者用）
export async function GET(request: NextRequest) {
  try {
    // 簡易的な認証チェック（後で実装）
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    // 簡易的なトークンチェック（実際の実装では環境変数を使用）
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: '認証が無効です' }, { status: 403 });
    }

    const data = await getAllReservations();

    return NextResponse.json(data);
  } catch (error) {
    console.error('予約データ取得エラー:', error);
    return NextResponse.json(
      { error: '予約データの取得に失敗しました' },
      { status: 500 }
    );
  }
}
