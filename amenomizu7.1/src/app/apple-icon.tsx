import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #E8F4F8, white)',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* 外側の大きな円（満月） */}
          <circle cx="25" cy="25" r="15" fill="#F4D03F" opacity="0.9" />
          {/* 内側の小さな円（切り取る部分） */}
          <circle cx="30" cy="25" r="12" fill="#E8F4F8" />

          {/* 雪の結晶（三日月の余白部分に配置） */}
          <g transform="translate(30, 25)">
            {/* 縦の線（少し長め） */}
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#87CEEB" strokeWidth="0.8" opacity="0.7" />
            {/* 横の線 */}
            <line x1="-4" y1="0" x2="4" y2="0" stroke="#87CEEB" strokeWidth="0.8" opacity="0.7" />
            {/* 斜め左上から右下 */}
            <line x1="-3.5" y1="-4" x2="3.5" y2="4" stroke="#87CEEB" strokeWidth="0.8" opacity="0.7" />
            {/* 斜め右上から左下 */}
            <line x1="3.5" y1="-4" x2="-3.5" y2="4" stroke="#87CEEB" strokeWidth="0.8" opacity="0.7" />

            {/* 小さな装飾（各先端に） */}
            <circle cx="0" cy="-5" r="0.8" fill="#87CEEB" opacity="0.6" />
            <circle cx="0" cy="5" r="0.8" fill="#87CEEB" opacity="0.6" />
            <circle cx="-4" cy="0" r="0.8" fill="#87CEEB" opacity="0.6" />
            <circle cx="4" cy="0" r="0.8" fill="#87CEEB" opacity="0.6" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
