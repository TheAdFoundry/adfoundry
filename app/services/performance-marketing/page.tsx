"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, BarChart3, CheckCircle, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

const performanceFeatures = [
  {
    title: "PPC Campaigns",
    description: "Strategic pay-per-click advertising that maximizes your budget and delivers qualified leads.",
    icon: Target,
    benefits: ["Google Ads Management", "Facebook Ads", "LinkedIn Advertising", "Retargeting Campaigns"],
  },
  {
    title: "Conversion Optimization",
    description: "Data-driven improvements to your conversion funnel for maximum ROI and customer acquisition.",
    icon: TrendingUp,
    benefits: ["Landing Page Optimization", "A/B Testing", "User Experience Analysis", "Conversion Rate Improvement"],
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and reporting to measure success and identify growth opportunities.",
    icon: BarChart3,
    benefits: ["Performance Dashboards", "ROI Tracking", "Attribution Modeling", "Custom Reports"],
  },
]

const platforms = [
  { name: "Google Ads", description: "Search, Display, Shopping, and YouTube advertising" },
  { name: "Facebook & Instagram", description: "Social media advertising with precise targeting" },
  { name: "LinkedIn Ads", description: "B2B focused advertising for professional audiences" },
  { name: "Microsoft Ads", description: "Bing search advertising for additional reach" },
  { name: "TikTok Ads", description: "Engaging video content for younger demographics" },
  { name: "Amazon Advertising", description: "E-commerce focused advertising solutions" },
]

const performanceMetrics = [
  { metric: "450%", label: "Average ROAS Achieved" },
  { metric: "65%", label: "Reduction in Cost Per Lead" },
  { metric: "280%", label: "Increase in Conversion Rate" },
  { metric: "150%", label: "Growth in Revenue" },
]

export default function PerformanceMarketingPage() {
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
                className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Performance{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven campaigns that deliver measurable results while maintaining your brand's narrative integrity.
              Every dollar spent is optimized for maximum return on investment.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {performanceFeatures.map((feature, index) => {
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
                    className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-6"
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

          {/* Platforms Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Advertising Platforms We Master</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-400"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-orange-500">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="bg-white border border-orange-200 rounded-2xl p-8 mb-20 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Performance That Speaks Volumes</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Our performance marketing campaigns consistently deliver exceptional results across industries, from
              startups to enterprise companies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {performanceMetrics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Our Performance Marketing */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
              Why Our Performance Marketing Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Data-Driven Decisions",
                  description:
                    "Every campaign decision is backed by comprehensive data analysis and real-time performance metrics.",
                },
                {
                  title: "Creative Excellence",
                  description:
                    "High-performing ads that don't sacrifice creativity for conversion - we deliver both impact and results.",
                },
                {
                  title: "Continuous Optimization",
                  description:
                    "24/7 monitoring and optimization ensures your campaigns are always performing at their peak potential.",
                },
                {
                  title: "Transparent Reporting",
                  description:
                    "Clear, detailed reporting that shows exactly how your investment is driving business growth.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-orange-500">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Ready to Maximize Your Marketing ROI?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create performance marketing campaigns that deliver measurable results and accelerate your business
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Performance Audit
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
