"use client"

import { motion } from "framer-motion"
import { Megaphone, Target, TrendingUp, Users, CheckCircle, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

const digitalMarketingFeatures = [
  {
    title: "Strategic Planning",
    description: "Comprehensive digital strategies tailored to your brand's unique story and business objectives.",
    icon: Target,
    benefits: ["Market Analysis", "Competitor Research", "Goal Setting", "KPI Definition"],
  },
  {
    title: "Campaign Management",
    description: "End-to-end campaign execution with continuous monitoring and optimization for maximum impact.",
    icon: TrendingUp,
    benefits: ["Campaign Setup", "Performance Tracking", "Real-time Optimization", "Reporting"],
  },
  {
    title: "Multi-channel Integration",
    description: "Seamless coordination across all digital platforms to ensure consistent brand messaging.",
    icon: Users,
    benefits: ["Cross-platform Strategy", "Unified Messaging", "Channel Optimization", "Audience Targeting"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your brand, audience, and market to understand your unique position.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a comprehensive digital marketing strategy aligned with your business goals.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute campaigns across multiple channels with precision and creativity.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuously monitor, analyze, and optimize for better performance and ROI.",
  },
]

const caseStudyStats = [
  { metric: "300%", label: "Increase in Online Visibility" },
  { metric: "250%", label: "Growth in Lead Generation" },
  { metric: "180%", label: "Boost in Conversion Rate" },
  { metric: "400%", label: "ROI Improvement" },
]

export default function DigitalMarketingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-orange-50 to-orange-100 text-black">
  
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Megaphone className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Digital{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your online presence into a powerful storytelling platform that captivates audiences and drives
              measurable results across all digital channels.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {digitalMarketingFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-orange-400 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-500">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + benefitIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Process Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Our Digital Marketing Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-orange-500">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Ready to Transform Your Digital Presence?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that tells your brand's story and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-400/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </section>
    </div>
  )
}
