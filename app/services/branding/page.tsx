"use client"

import { motion } from "framer-motion"
import { Palette, Eye, Target, Layers, CheckCircle, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import MobileMenu from "@/components/mobile-menu"

const brandingFeatures = [
  {
    title: "Brand Strategy",
    description:
      "Comprehensive brand strategy that defines your unique position and connects with your target audience.",
    icon: Target,
    benefits: ["Brand Positioning", "Market Research", "Competitive Analysis", "Brand Architecture"],
  },
  {
    title: "Visual Identity",
    description: "Distinctive visual identity that captures your brand essence and creates memorable experiences.",
    icon: Eye,
    benefits: ["Logo Design", "Color Palette", "Typography", "Visual Guidelines"],
  },
  {
    title: "Brand Guidelines",
    description: "Comprehensive brand guidelines that ensure consistent application across all touchpoints.",
    icon: Layers,
    benefits: ["Style Guide", "Usage Rules", "Application Examples", "Brand Standards"],
  },
]

const brandingServices = [
  {
    title: "Logo & Identity Design",
    description: "Memorable logos and visual identities that represent your brand's unique personality",
    deliverables: ["Primary Logo", "Logo Variations", "Brand Mark", "Favicon"],
  },
  {
    title: "Brand Strategy & Positioning",
    description: "Strategic foundation that defines your brand's purpose, values, and market position",
    deliverables: ["Brand Strategy", "Positioning Statement", "Brand Voice", "Messaging Framework"],
  },
  {
    title: "Visual Brand System",
    description: "Comprehensive visual system that brings your brand to life across all applications",
    deliverables: ["Color System", "Typography", "Iconography", "Photography Style"],
  },
  {
    title: "Brand Guidelines",
    description: "Detailed guidelines that ensure consistent brand application and protect brand integrity",
    deliverables: ["Brand Manual", "Usage Guidelines", "Do's and Don'ts", "Application Examples"],
  },
]

const brandingMetrics = [
  { metric: "400%", label: "Increase in Brand Recognition" },
  { metric: "300%", label: "Growth in Brand Equity" },
  { metric: "250%", label: "Boost in Customer Loyalty" },
  { metric: "180%", label: "Improvement in Brand Perception" },
]

export default function BrandingPage() {
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
                className="w-20 h-20 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Palette className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Branding
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete brand identity development that tells your unique story across every touchpoint, creating lasting
              connections with your audience.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {brandingFeatures.map((feature, index) => {
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
                    className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mb-6"
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

          {/* Branding Services */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Complete Branding Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {brandingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-400"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-orange-500">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800">Deliverables:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverable} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Branding Process */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Our Branding Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Discovery", description: "Deep dive into your brand, market, and audience" },
                { step: "02", title: "Strategy", description: "Develop brand strategy and positioning framework" },
                { step: "03", title: "Design", description: "Create visual identity and brand assets" },
                { step: "04", title: "Guidelines", description: "Deliver comprehensive brand guidelines" },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-orange-500">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Branding Metrics */}
          <motion.div
            className="bg-white border border-orange-200 rounded-2xl p-8 mb-20 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Brands We've Transformed</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Our branding strategies have helped businesses build stronger brand recognition, increase customer
              loyalty, and achieve sustainable growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brandingMetrics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9 + index * 0.1, type: "spring" }}
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
            transition={{ delay: 2.2, duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Ready to Build a Memorable Brand?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that tells your unique story and connects with your audience on a deeper
              level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Brand
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
