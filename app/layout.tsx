import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { FloatingActionButtons } from "./components/FloatingActionButtons" // Import the new component
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Ad Foundry - Ideas that sell, stories that stay",
  description:
    "Creative marketing agency specializing in storytelling-driven campaigns. We transform brands through cinematic narratives and data-driven strategies.",
  keywords: "marketing agency, storytelling, digital marketing, branding, creative campaigns",
  icons: {
    shortcut: "/Logo.svg", // or your custom icon path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-ivory flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingActionButtons /> {/* Add the floating buttons here */}
        <Footer />
      </body>
    </html>
  )
}