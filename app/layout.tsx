import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastián Quintero - Frontend Developer",
  description: "Portafolio profesional de Sebastián Quintero, desarrollador frontend especializado en React, Next.js y tecnologías modernas web.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "JavaScript", "UI/UX", "Web Development"],
  authors: [{ name: "Sebastián Quintero" }],
  creator: "Sebastián Quintero",
  icons: {
    icon: [
      { url: "/software-development.png" },
      { url: "/software-development.png", sizes: "32x32", type: "image/png" },
      { url: "/software-development.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/software-development.png",
    apple: "/software-development.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sebastian-quintero.dev",
    title: "Sebastián Quintero - Frontend Developer",
    description: "Portafolio profesional de Sebastián Quintero, desarrollador frontend especializado en React, Next.js y tecnologías modernas web.",
    siteName: "Sebastián Quintero Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Quintero - Frontend Developer",
    description: "Portafolio profesional de Sebastián Quintero, desarrollador frontend especializado en React, Next.js y tecnologías modernas web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
