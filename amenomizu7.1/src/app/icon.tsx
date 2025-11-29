import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          {/* 外側の大きな円（満月） */}
          <circle cx="25" cy="25" r="15" fill="#F4D03F" opacity="0.9" />
          {/* 内側の小さな円（切り取る部分） */}
          <circle cx="30" cy="25" r="12" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
