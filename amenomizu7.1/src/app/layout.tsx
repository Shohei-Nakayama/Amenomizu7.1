import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";
import CrescentMoon from "./components/CrescentMoon";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "あめのみづ鍼灸院",
  description: "あめのみづ鍼灸院のウェブサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.className} antialiased`}>
        <CrescentMoon />
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
