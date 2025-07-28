"use client"

import { motion } from "framer-motion"
import { PenTool, Video, Camera, Palette, CheckCircle, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

const contentFeatures = [
  {
    title: "Video Production",
    description: "Cinematic video content that tells your brand story with visual impact and emotional resonance.",
    icon: Video,
    benefits: ["Brand Videos", "Product Demos", "Social Media Content", "Commercial Production"],
  },
  {
    title: "Copywriting",
    description: "Compelling written content that captures your brand voice and drives action across all platforms.",
    icon: PenTool,
    benefits: ["Website Copy", "Blog Content", "Ad Copy", "Email Marketing"],
  },
  {
    title: "Visual Design",
    description: "Stunning visual content that captures attention and communicates your message effectively.",
    icon: Palette,
    benefits: ["Graphic Design", "Infographics", "Social Media Graphics", "Brand Assets"],
  },
]

const contentTypes = [
  {
    title: "Brand Videos",
    description: "Cinematic storytelling that showcases your brand's personality and values",
    icon: Video,
    examples: ["Company Stories", "Product Launches", "Behind the Scenes", "Customer Testimonials"],
  },
  {
    title: "Social Content",
    description: "Engaging content optimized for each social media platform",
    icon: Camera,
    examples: ["Instagram Posts", "TikTok Videos", "LinkedIn Articles", "Twitter Threads"],
  },
  {
    title: "Marketing Materials",
    description: "Professional marketing collateral that drives conversions",
    icon: Palette,
    examples: ["Brochures", "Presentations", "Email Templates", "Landing Pages"],
  },
  {
    title: "Interactive Content",
    description: "Engaging interactive experiences that boost user engagement",
    icon: PenTool,
    examples: ["Quizzes", "Polls", "Interactive Videos", "AR Filters"],
  },
]

const contentMetrics = [
  { metric: "350%", label: "Increase in Engagement" },
  { metric: "280%", label: "Growth in Content Reach" },
  { metric: "200%", label: "Boost in Brand Awareness" },
  { metric: "150%", label: "Improvement in Conversions" },
]

export default function ContentCreationPage() {
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
                className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PenTool className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Content{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Creation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compelling content that doesn't just inform—it captivates, engages, and converts your audience through
              powerful storytelling and visual excellence.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {contentFeatures.map((feature, index) => {
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
                    className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-6"
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

          {/* Content Types */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Content That Converts</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contentTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <motion.div
                    key={type.title}
                    className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-500">{type.title}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <div key={example} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Content Metrics */}
          <motion.div
            className="bg-white border border-orange-200 rounded-2xl p-8 mb-20 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Content That Delivers Results</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Our content creation strategies consistently drive engagement, build brand awareness, and convert
              audiences into loyal customers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {contentMetrics.map((stat, index) => (
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

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Ready to Create Content That Captivates?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create compelling content that tells your brand story and drives meaningful engagement with your
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Creating
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
