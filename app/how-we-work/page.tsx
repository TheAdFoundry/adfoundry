"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Users, FileText, Clapperboard, Megaphone, MessageSquare, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const workflowSteps = [
  {
    step: "01",
    title: "Understand Clients",
    description:
      "We dive deep into your brand's DNA, understanding your vision, goals, and the story you want to tell.",
    icon: Users,
    details: [
      "Brand discovery sessions",
      "Market research & analysis",
      "Audience persona development",
      "Competitive landscape review",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    step: "02",
    title: "Plan & Proposal",
    description: "Strategic planning meets creative vision as we craft a comprehensive roadmap for your success.",
    icon: FileText,
    details: [
      "Strategic framework development",
      "Creative concept ideation",
      "Timeline & milestone planning",
      "Budget optimization",
    ],
    color: "from-red-500 to-orange-600",
  },
  {
    step: "03",
    title: "Production",
    description: "Where ideas come to life through cinematic storytelling and cutting-edge creative execution.",
    icon: Clapperboard,
    details: [
      "Content creation & production",
      "Visual design & branding",
      "Video & multimedia production",
      "Quality assurance & testing",
    ],
    color: "from-orange-600 to-yellow-500",
  },
  {
    step: "04",
    title: "Promotion",
    description:
      "Strategic deployment across all channels to ensure your story reaches and resonates with your audience.",
    icon: Megaphone,
    details: [
      "Multi-channel campaign launch",
      "Performance monitoring",
      "Real-time optimization",
      "Audience engagement tracking",
    ],
    color: "from-yellow-500 to-orange-400",
  },
  {
    step: "05",
    title: "Feedback & Optimization",
    description: "Continuous improvement through data analysis and client collaboration for sustained success.",
    icon: MessageSquare,
    details: [
      "Performance analysis & reporting",
      "Client feedback integration",
      "Strategy refinement",
      "Long-term optimization",
    ],
    color: "from-orange-400 to-red-400",
  },
]

export default function HowWeWorkPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory to-orange-50 text-black">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              How We{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process transforms your vision into compelling stories that drive results and create
              lasting impact.
            </p>
          </motion.div>
          {/* Process Flow Visualization - MOVED HERE */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-orange-500">Our Proven Process</h2>
            <div className="flex justify-center items-center space-x-4 flex-wrap">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Tooltip that shows the step title on hover */}
                    <AnimatePresence>
                      {hoveredStep === index && (
                        <motion.div
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.title}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* The numbered circle */}
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold cursor-pointer`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  {/* The connecting line */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-2 origin-left"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workflow Steps Details */}
          <div className="max-w-6xl mx-auto">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center mb-20 ${isEven ? "" : "lg:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-12" : "lg:pl-12"} mb-8 lg:mb-0`}>
                    <div className="bg-white border border-orange-200 rounded-2xl p-8 shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <span
                          className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mr-4`}
                        >
                          {step.step}
                        </span>
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-orange-400">{step.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{step.description}</p>
                      <div className="space-y-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div
                      className={`w-64 h-64 rounded-full bg-gradient-to-br ${step.color} opacity-20 flex items-center justify-center relative overflow-hidden`}
                    >
                      <Icon className="w-32 h-32 text-white/30" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link href="/why-choose-us">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Why Choose Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}