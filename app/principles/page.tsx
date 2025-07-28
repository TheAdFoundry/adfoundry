"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const principles = [
  {
    title: "WHY",
    subtitle: "Our Purpose",
    icon: Target,
    content:
      "We believe every brand has a unique story waiting to be told. In a world saturated with advertisements, we create narratives that don't just sell products they build emotional connections that last a lifetime.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "HOW",
    subtitle: "Our Approach",
    icon: Lightbulb,
    content:
      "Through cinematic storytelling, data driven insights, and creative innovation, we transform your brand's essence into compelling narratives that resonate across all digital platforms and touchpoints.",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "WHAT",
    subtitle: "Our Promise",
    icon: Users,
    content:
      "We deliver comprehensive marketing solutions that combine strategic thinking with creative execution, ensuring your brand doesn't just reach your audience it moves them, inspires them, and stays with them.",
    color: "from-orange-600 to-orange-400",
  },
]

export default function PrinciplesPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory to-orange-50 text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Golden Rules
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  The foundation of every great story begins with understanding the{" "}
  <span className="italic font-bold">Why, How,</span> and{" "}
  <span className="italic font-bold">What</span>{' '}
  that drives us forward.
</p>
          </motion.div>

          {/* Principles Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                >
                  <div className="bg-white border border-orange-200 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Background gradient effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      animate={activeCard === index ? { opacity: 0.1 } : { opacity: 0 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${principle.color} flex items-center justify-center mb-6 relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-black" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-4xl font-bold mb-2 text-orange-500">{principle.title}</h3>
                      <h4 className="text-xl text-orange-400 mb-4">{principle.subtitle}</h4>
                      <p className="text-gray-600 leading-relaxed">{principle.content}</p>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="w-6 h-6 text-orange-400" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link href="/services">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </section>
    </div>
  )
}