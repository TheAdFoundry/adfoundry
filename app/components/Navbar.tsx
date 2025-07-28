"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = ["Principles", "Services", "How We Work", "Why Choose Us", "Contact"]
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-orange-100 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div className="flex items-center space-x-2 cursor-pointer" whileHover={{ scale: 1.02 }}>
              <div>
                <div className="text-xl font-bold text-[#2d251a]">
                  THE <span className="bg-[#FF5733] text-[#FFFFF0] rounded-md px-0.5 py-0.5 inline-block">AD</span>
                </div>
                <div className="text-xl font-bold text-gray-900 text-[#2d251a]">
                  FOUNDRY<span className="align-super text-xs ml-0.5">®</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item, index) => {
              const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`
              const isActive = pathname === href

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Link
                    href={href}
                    className={`px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 font-medium relative group ${
                      // This line checks if the link is active and applies the orange text color if it is.
                      isActive ? "text-orange-600 bg-orange-50" : ""
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 18L18 6M6 6l12 12" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((item) => {
                const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`
                const isActive = pathname === href
                return (
                  <Link
                    key={item}
                    href={href}
                    className={`text-lg font-medium ${
                       // This line checks if the link is active and applies the orange text color if it is.
                      isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              })}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <motion.button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 mt-4 rounded-full font-semibold text-base">
                  Get a Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}