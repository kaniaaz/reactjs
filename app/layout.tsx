import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import ThemeProvider from "@/app/components/themeProvider";


export const metadata: Metadata = {
title: "Thania • Portofolio",
description: "Portofolio Next.js",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="id" suppressHydrationWarning>
<body>
<ThemeProvider>
<Navbar />
<main className="container">{children}</main>
</ThemeProvider>
</body>
</html>
);
}