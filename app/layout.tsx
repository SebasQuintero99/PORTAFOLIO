import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import StructuredData from "./components/StructuredData";
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
  title: {
    default: "Juan Sebastian Quintero Ortiz - Ingeniero de Software | Full-Stack Developer",
    template: "%s | Juan Sebastian Quintero"
  },
  description: "Ingeniero de Software de la Universidad Surcolombiana especializado en desarrollo Full-Stack con React, Next.js, TypeScript, Node.js y PostgreSQL. Más de 8 proyectos completados en Neiva, Huila, Colombia.",
  keywords: [
    "Juan Sebastian Quintero Ortiz",
    "Ingeniero de Software Neiva",
    "Full-Stack Developer Colombia",
    "Desarrollador React Huila",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Universidad Surcolombiana",
    "Desarrollador Web Neiva",
    "Software Engineer Colombia",
    "React Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Juan Sebastian Quintero Ortiz", url: "https://www.sebastianquintero.dev" }],
  creator: "Juan Sebastian Quintero Ortiz",
  publisher: "Juan Sebastian Quintero Ortiz",
  metadataBase: new URL("https://www.sebastianquintero.dev"),
  alternates: {
    canonical: "https://www.sebastianquintero.dev"
  },
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
    locale: "es_CO",
    url: "https://www.sebastianquintero.dev",
    title: "Juan Sebastian Quintero Ortiz - Ingeniero de Software Full-Stack",
    description: "Ingeniero de Software de la Universidad Surcolombiana especializado en desarrollo Full-Stack. React, Next.js, TypeScript, Node.js, PostgreSQL. Neiva, Huila, Colombia.",
    siteName: "Juan Sebastian Quintero - Portfolio",
    images: [
      {
        url: "/portafolio.png",
        width: 1200,
        height: 630,
        alt: "Juan Sebastian Quintero Ortiz - Ingeniero de Software"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Sebastian Quintero Ortiz - Ingeniero de Software Full-Stack",
    description: "Ingeniero de Software especializado en React, Next.js, TypeScript y Node.js. Universidad Surcolombiana, Neiva, Colombia.",
    images: ["/portafolio.png"],
    creator: "@SebasQuintero"
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
    google: "google-site-verification-code-here",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
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
