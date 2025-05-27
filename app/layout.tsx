"use client"
import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LoadingProvider } from "@/components/loading-provider"
const inter = Inter({ subsets: ["latin"] })



export default function RootLayout({ children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className = "scroll-smooth">
      <body className={inter.className}>
      <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  )
}



import './globals.css'