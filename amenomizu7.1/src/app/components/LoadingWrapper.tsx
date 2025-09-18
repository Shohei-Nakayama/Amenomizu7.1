"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ページの読み込み完了を待つ
    const handleLoad = () => {
      setIsLoading(false);
    };

    // 既に読み込み完了している場合
    if (typeof window !== "undefined" && document.readyState === "complete") {
      setIsLoading(false);
    } else if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
    }

    // 最低限の表示時間を設定（オプション）
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
      clearTimeout(minLoadingTime);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image
            src="/image/loading.png"
            alt="Loading..."
            width={100}
            height={100}
            priority
            style={{
              animation: "spin 1s linear infinite",
            }}
          />
          <p style={{ marginTop: "20px", fontSize: "18px" }}>読み込み中...</p>
        </div>

        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
