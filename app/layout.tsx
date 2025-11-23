import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بوصلة الحياة - Life Compass",
  description: "رحلة تغيير حقيقية في 7 خطوات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic">{children}</body>
    </html>
  );
}
