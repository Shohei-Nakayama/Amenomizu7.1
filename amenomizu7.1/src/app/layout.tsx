import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";
import CrescentMoon from "./components/CrescentMoon";
import GoogleAnalytics from "./components/GoogleAnalytics";
import StructuredData from "./components/StructuredData";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "あめのみづ鍼灸院 | 神奈川県座間市の鍼灸院",
    template: "%s | あめのみづ鍼灸院",
  },
  description:
    "神奈川県座間市の鍼灸院。小田急相模原駅から徒歩3分。ひとりひとりに最適な治療をご提供します。",
  keywords: [
    "あめのみづ鍼灸院",
    "鍼灸院",
    "座間市",
    "小田急相模原",
    "神奈川県",
    "鍼灸",
    "はり",
    "きゅう",
    "治療",
  ],
  authors: [{ name: "あめのみづ鍼灸院" }],
  creator: "あめのみづ鍼灸院",
  publisher: "あめのみづ鍼灸院",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "あめのみづ鍼灸院 | 神奈川県座間市の鍼灸院",
    description:
      "神奈川県座間市の鍼灸院。小田急相模原駅から徒歩3分。ひとりひとりに最適な治療をご提供します。",
    url: "https://www.amenomizu.jp",
    siteName: "あめのみづ鍼灸院",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "あめのみづ鍼灸院 | 神奈川県座間市の鍼灸院",
    description:
      "神奈川県座間市の鍼灸院。小田急相模原駅から徒歩3分。ひとりひとりに最適な治療をご提供します。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.className} antialiased`}>
        <GoogleAnalytics />
        <StructuredData />
        <CrescentMoon />
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
