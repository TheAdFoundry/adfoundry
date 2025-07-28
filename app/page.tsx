"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowDown, Play } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, MouseEvent } from "react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // --- Animation Variants for Smoother Transitions ---

  // Container for the staggered letter animation
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.06, // Slightly faster stagger for a fluid feel
      },
    },
  }

  // Individual letter animation using a spring for a nice bounce
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }
  
  // A generic spring-based transition for elements appearing after the title
  const springTransition = (delay: number) => ({
    delay,
    type: "spring",
    damping: 15,
    stiffness: 80,
  })

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-ivory via-orange-50 to-orange-100 relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      <div className="h-20" /> {/* Spacer for fixed navbar */}

      {/* Interactive Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, index) => {
          const size = 12 + Math.random() * 24
          const initialX = Math.random() * 100
          const initialY = Math.random() * 100
          const dx = useTransform(mouseX, (val) => (val ? (initialX - (val / 100)) / 4 : 0))
          const dy = useTransform(mouseY, (val) => (val ? (initialY - (val / 100)) / 4 : 0))

          return (
            <motion.div
              key={index}
              className="absolute rounded-full blur-xl"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${initialX}%`,
                top: `${initialY}%`,
                backgroundColor: `rgba(255, 87, 51, ${0.1 + Math.random() * 0.2})`,
                x: dx,
                y: dy,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          )
        })}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => x && y ? `radial-gradient(400px at ${x}px ${y}px, rgba(255, 140, 0, 0.15), transparent 80%)` : 'transparent'
            ),
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-start min-h-[calc(100vh-5rem)] relative px-6 md:px-20">
        <div className="text-left z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-black mb-8"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-[#2d251a]">
              {"The ".split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="bg-[#FF5733] text-[#fffdd0] rounded-md px-2 py-1 inline-block"
              variants={letter}
            >
              AD
            </motion.span>
            <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-[#2d251a]">
              {" Foundry".split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={springTransition(1.5)} // Adjusted delay and using spring
          >
            <h2 className="text-2xl md:text-4xl text-orange-600 mb-12 font-light italic">
              "Ideas that sell, stories that stay"
            </h2>

            <motion.div
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 1, ease: "circOut" }} // Smoother ease
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={springTransition(2)} // Adjusted delay and using spring
          >
            <Link href="/principles">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }} // Smooth hover transition
              >
                <Play className="w-5 h-5" />
                Start Our Story
              </motion.button>
            </Link>

            <Link href="/services">
              <motion.button
                className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }} // Smooth hover transition
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }} // Final element delay
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-orange-400 cursor-pointer"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}