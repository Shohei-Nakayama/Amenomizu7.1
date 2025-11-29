import { NextRequest, NextResponse } from 'next/server';
import { toggleAvailability, getReservationStatus } from '@/app/lib/reservationManager';

// 予約を作成（予約データは保存せず、時間をblockedにするのみ）
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, time, name, email, phone, address, birthdate, message } = body;

    // バリデーション
    if (!date || !time || !name || !email || !phone || !address || !birthdate) {
      return NextResponse.json(
        { error: '必須項目が不足しています' },
        { status: 400 }
      );
    }

    // 既に予約されているかチェック
    const currentStatus = await getReservationStatus(date, time);
    if (currentStatus === 'blocked') {
      return NextResponse.json(
        { error: 'この時間は既に予約されているか、予約不可です' },
        { status: 409 }
      );
    }

    // 予約を作成（時間をblockedにする）
    const result = await toggleAvailability(date, time, 'blocked');

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('予約作成エラー:', error);
    return NextResponse.json(
      { error: '予約の作成に失敗しました' },
      { status: 500 }
    );
  }
}
