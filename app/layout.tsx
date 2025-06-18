import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Support Portal - Get Help & Assistance",
  description: "Find answers, get support, and connect with our team for all your questions and technical issues.",
  generator: "v0.dev"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Tidio Script 
        <Script
          src="//code.tidio.co/u66hw5ihvwd6enmceu23mforedpxpuw5.js"
          strategy="afterInteractive"
        /> 

        {/* ✅ Botpress Webchat Inject.js */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"
          strategy="afterInteractive"
          onError={() => console.error("Botpress inject.js failed to load")}
        />

        {/* ✅ Botpress Bot Config */}
        <Script
          src="https://files.bpcontent.cloud/2025/04/22/03/20250422034551-33JRTCQD.js"
          strategy="afterInteractive"
          onError={() => console.error("Botpress config script failed to load")}
        />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
