import { NextRequest, NextResponse } from 'next/server';
import { createReservation } from '@/app/lib/reservationManager';

// 予約を作成
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

    const result = await createReservation(date, time, {
      name,
      email,
      phone,
      address,
      birthdate,
      message,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 409 });
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
