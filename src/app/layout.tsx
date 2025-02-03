import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/app/menu/Navbar"
import "./globals.css"
import type React from "react"
import Footer from "@/app/landing page/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}

