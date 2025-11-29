'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';

interface TimeSlotData {
  status: 'available' | 'reserved' | 'blocked';
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

interface DayReservations {
  [time: string]: TimeSlotData;
}

interface ReservationsData {
  reservations: {
    [date: string]: DayReservations;
  };
}

export default function AdminReservations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [reservationsData, setReservationsData] = useState<ReservationsData>({
    reservations: {},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<{
    date: string;
    time: string;
    data: TimeSlotData;
  } | null>(null);

  // 認証処理
  const handleLogin = () => {
    // 簡易的な認証（実際には環境変数のパスワードと比較）
    if (password) {
      setToken(password);
      setIsAuthenticated(true);
      loadReservations(password);
    }
  };

  // 予約データを読み込み
  const loadReservations = async (authToken: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/reservations', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setReservationsData(data);
      } else {
        alert('予約データの取得に失敗しました。パスワードを確認してください。');
        setIsAuthenticated(false);
        setToken('');
      }
    } catch (error) {
      console.error('予約データ取得エラー:', error);
      alert('予約データの取得に失敗しました。');
      setIsAuthenticated(false);
      setToken('');
    } finally {
      setIsLoading(false);
    }
  };

  // 予約可/不可を切り替え
  const toggleAvailability = async (date: string, currentStatus: string) => {
    if (currentStatus === 'reserved') {
      alert('予約済みの時間は変更できません。');
      return;
    }

    const newStatus = currentStatus === 'blocked' ? 'available' : 'blocked';

    console.log('予約状況変更開始:', { date, currentStatus, newStatus });

    try {
      const response = await fetch('/api/admin/toggle-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          date,
          time: '19:00',
          status: newStatus,
        }),
      });

      console.log('APIレスポンスステータス:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('API成功:', result);
        // データを再読み込み
        await loadReservations(token);
      } else {
        const errorData = await response.json();
        console.error('APIエラー:', errorData);
        alert(`予約状況の変更に失敗しました。エラー: ${errorData.error || '不明'}`);
      }
    } catch (error) {
      console.error('予約状況変更エラー:', error);
      alert(`予約状況の変更に失敗しました。エラー: ${error}`);
    }
  };

  // カレンダーデータを生成
  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayOfWeek = date.getDay();

      // 平日（月〜金）のみを含める
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        days.push({
          day,
          date: dateStr,
          dayOfWeek,
        });
      }
    }

    return days;
  };

  // 今月と来月の情報を取得
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);
  const nextYear = nextMonthDate.getFullYear();
  const nextMonth = nextMonthDate.getMonth();

  const currentMonthDays = generateCalendarDays(currentYear, currentMonth);
  const nextMonthDays = generateCalendarDays(nextYear, nextMonth);

  // 予約状況を取得
  const getReservationStatus = (dateStr: string): TimeSlotData => {
    const dayData = reservationsData.reservations[dateStr];
    if (!dayData || !dayData['19:00']) {
      return { status: 'available' };
    }
    return dayData['19:00'];
  };

  // ステータスの表示
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'available':
        return { text: '予約可', color: 'bg-green-100 text-green-800 border-green-300' };
      case 'reserved':
        return { text: '予約済み', color: 'bg-blue-100 text-blue-800 border-blue-300' };
      case 'blocked':
        return { text: '予約不可', color: 'bg-red-100 text-red-800 border-red-300' };
      default:
        return { text: '不明', color: 'bg-gray-100 text-gray-800 border-gray-300' };
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <PageHeader subtitle="管理画面" />

        <main className="max-w-md mx-auto px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  管理パスワード
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="パスワードを入力"
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors font-semibold"
              >
                ログイン
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="予約管理" />

      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">平日19:00の予約状況</h2>
          <button
            onClick={() => loadReservations(token)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            更新
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">読み込み中...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 今月 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                {currentYear}年{currentMonth + 1}月
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMonthDays.map((dayInfo) => {
                  const statusData = getReservationStatus(dayInfo.date);
                  const { text, color } = getStatusDisplay(statusData.status);

                  return (
                    <div
                      key={dayInfo.date}
                      className={`border-2 rounded-lg p-4 ${color}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-lg">
                            {dayInfo.day}日 19:00
                          </p>
                          <p className="text-sm font-semibold">{text}</p>
                        </div>
                        {statusData.status !== 'reserved' && (
                          <button
                            onClick={() =>
                              toggleAvailability(dayInfo.date, statusData.status)
                            }
                            className="px-3 py-1 bg-white rounded border border-gray-300 hover:bg-gray-50 text-sm font-semibold"
                          >
                            {statusData.status === 'blocked'
                              ? '予約可にする'
                              : '予約不可にする'}
                          </button>
                        )}
                      </div>

                      {statusData.status === 'reserved' &&
                        statusData.reservation && (
                          <div className="mt-2 pt-2 border-t border-blue-200">
                            <button
                              onClick={() =>
                                setSelectedReservation({
                                  date: dayInfo.date,
                                  time: '19:00',
                                  data: statusData,
                                })
                              }
                              className="text-sm text-blue-600 hover:text-blue-800 underline"
                            >
                              予約詳細を表示
                            </button>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 来月 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                {nextYear}年{nextMonth + 1}月
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nextMonthDays.map((dayInfo) => {
                  const statusData = getReservationStatus(dayInfo.date);
                  const { text, color } = getStatusDisplay(statusData.status);

                  return (
                    <div
                      key={dayInfo.date}
                      className={`border-2 rounded-lg p-4 ${color}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-lg">
                            {dayInfo.day}日 19:00
                          </p>
                          <p className="text-sm font-semibold">{text}</p>
                        </div>
                        {statusData.status !== 'reserved' && (
                          <button
                            onClick={() =>
                              toggleAvailability(dayInfo.date, statusData.status)
                            }
                            className="px-3 py-1 bg-white rounded border border-gray-300 hover:bg-gray-50 text-sm font-semibold"
                          >
                            {statusData.status === 'blocked'
                              ? '予約可にする'
                              : '予約不可にする'}
                          </button>
                        )}
                      </div>

                      {statusData.status === 'reserved' &&
                        statusData.reservation && (
                          <div className="mt-2 pt-2 border-t border-blue-200">
                            <button
                              onClick={() =>
                                setSelectedReservation({
                                  date: dayInfo.date,
                                  time: '19:00',
                                  data: statusData,
                                })
                              }
                              className="text-sm text-blue-600 hover:text-blue-800 underline"
                            >
                              予約詳細を表示
                            </button>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 予約詳細モーダル */}
      {selectedReservation && selectedReservation.data.reservation && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedReservation(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">予約詳細</h3>
              <button
                onClick={() => setSelectedReservation(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">予約日時</p>
                <p className="font-semibold">
                  {selectedReservation.date} {selectedReservation.time}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">お名前</p>
                <p className="font-semibold">
                  {selectedReservation.data.reservation.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">メールアドレス</p>
                <p className="font-semibold">
                  {selectedReservation.data.reservation.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">電話番号</p>
                <p className="font-semibold">
                  {selectedReservation.data.reservation.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">住所</p>
                <p className="font-semibold">
                  {selectedReservation.data.reservation.address}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">生年月日</p>
                <p className="font-semibold">
                  {selectedReservation.data.reservation.birthdate}
                </p>
              </div>
              {selectedReservation.data.reservation.message && (
                <div>
                  <p className="text-sm text-gray-600">メッセージ</p>
                  <p className="font-semibold">
                    {selectedReservation.data.reservation.message}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">予約日時</p>
                <p className="text-sm">
                  {new Date(
                    selectedReservation.data.reservation.createdAt
                  ).toLocaleString('ja-JP')}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedReservation(null)}
              className="mt-6 w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
