"use client"

import { motion } from "framer-motion"
import { Share2, Users, Heart, MessageCircle, CheckCircle, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

const socialMediaFeatures = [
  {
    title: "Content Strategy",
    description: "Compelling content that tells your brand story and engages your audience across all platforms.",
    icon: MessageCircle,
    benefits: ["Content Planning", "Brand Voice Development", "Visual Storytelling", "Content Calendar"],
  },
  {
    title: "Community Management",
    description: "Building authentic relationships with your audience through meaningful interactions and engagement.",
    icon: Users,
    benefits: ["Daily Engagement", "Customer Support", "Community Building", "Reputation Management"],
  },
  {
    title: "Social Advertising",
    description: "Targeted social media advertising campaigns that drive awareness, engagement, and conversions.",
    icon: Share2,
    benefits: ["Paid Social Campaigns", "Audience Targeting", "Creative Development", "Performance Optimization"],
  },
]

const platforms = [
  {
    name: "Instagram",
    description: "Visual storytelling through posts, stories, reels, and IGTV",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Facebook",
    description: "Community building and targeted advertising for all demographics",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "LinkedIn",
    description: "Professional networking and B2B content marketing",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Twitter",
    description: "Real-time engagement and thought leadership content",
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "YouTube",
    description: "Long-form video content and educational storytelling",
    color: "from-red-500 to-red-600",
  },
]

const socialMetrics = [
  { metric: "500%", label: "Average Engagement Growth" },
  { metric: "300%", label: "Increase in Followers" },
  { metric: "250%", label: "Boost in Brand Mentions" },
  { metric: "180%", label: "Growth in Social Traffic" },
]

export default function SocialMediaMarketingPage() {
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
                className="w-20 h-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Share2 className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Social Media{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engaging social narratives that build communities and foster authentic connections with your audience
              across all major platforms.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {socialMediaFeatures.map((feature, index) => {
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
                    className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full flex items-center justify-center mb-6"
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
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Platforms We Dominate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-400 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-r ${platform.color} rounded-full mr-3`} />
                    <h3 className="text-xl font-bold text-orange-500">{platform.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media Metrics */}
          <motion.div
            className="bg-white border border-orange-200 rounded-2xl p-8 mb-20 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Social Media Success Stories</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Our social media strategies have helped brands build thriving communities and achieve remarkable growth
              across all platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {socialMetrics.map((stat, index) => (
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

          {/* Content Types */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Content That Connects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Visual Posts", description: "Eye-catching graphics and photography that stop the scroll" },
                {
                  title: "Video Content",
                  description: "Engaging reels, stories, and long-form videos that tell your story",
                },
                {
                  title: "User-Generated Content",
                  description: "Authentic content from your community that builds trust",
                },
                {
                  title: "Interactive Content",
                  description: "Polls, quizzes, and live sessions that boost engagement",
                },
              ].map((content, index) => (
                <motion.div
                  key={content.title}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-orange-500">{content.title}</h3>
                  <p className="text-gray-600 text-sm">{content.description}</p>
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
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Ready to Build Your Social Community?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create social media strategies that turn followers into loyal brand advocates and drive real
              business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Social Strategy
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
