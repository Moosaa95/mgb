import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MBG Industrial and General Technologies",
  description: "MBG Industrial and General Technologies: Empowering a sustainable future through innovative engineering, solar energy solutions, and infrastructure development.",
  keywords: "MBG, Industrial Technologies, General Technologies, Solar Engineering, Renewable Energy, Infrastructure Development, Project Management, Sustainable Solutions",
  authors: [{name: "Musa Abdullahi", url:""}],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "MBG Industrial and General Technologies",
    description: "Empowering a sustainable future through innovative engineering and renewable energy solutions.",
    url: "https://yourwebsite.com", // Replace with actual URL
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg", // Replace with actual OG image URL
        width: 800,
        height: 600,
        alt: "MBG Industrial and General Technologies",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
