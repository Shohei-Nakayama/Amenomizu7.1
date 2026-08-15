import { NextRequest, NextResponse } from 'next/server';
import { blockAllDay } from '@/app/lib/reservationManager';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: '認証が無効です' }, { status: 403 });
    }

    const body = await request.json();
    const { date, slots, status } = body;

    if (!date || !Array.isArray(slots) || slots.length === 0 || !status) {
      return NextResponse.json(
        { error: '日付、スロット一覧、ステータスが必要です' },
        { status: 400 }
      );
    }

    if (!['available', 'blocked'].includes(status)) {
      return NextResponse.json(
        { error: 'ステータスはavailableまたはblockedである必要があります' },
        { status: 400 }
      );
    }

    const result = await blockAllDay(date, slots, status);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('一日ブロック切り替えエラー:', error);
    return NextResponse.json(
      { error: '処理に失敗しました' },
      { status: 500 }
    );
  }
}
