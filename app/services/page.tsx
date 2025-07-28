"use client"

import { motion } from "framer-motion"
import { Megaphone, TrendingUp, Share2, Search, PenTool, Palette, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Digital Marketing",
    link: "digital-marketing", // Changed from 'Link' to 'link' for convention
    description:
      "Comprehensive digital strategies that transform your online presence into a powerful storytelling platform.",
    icon: Megaphone,
    features: ["Strategic Planning", "Campaign Management", "Multi-channel Integration", "ROI Optimization"],
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-500",
  },
  {
    title: "Performance Marketing",
    link: "performance-marketing",
    description:
      "Data-driven campaigns that deliver measurable results while maintaining your brand's narrative integrity.",
    icon: TrendingUp,
    features: ["PPC Campaigns", "Conversion Optimization", "Analytics & Reporting", "A/B Testing"],
    color: "from-red-500 to-orange-600",
    textColor: "text-red-500",
  },
  {
    title: "Social Media Marketing",
    link: "social-media-marketing",
    description:
      "Engaging social narratives that build communities and foster authentic connections with your audience.",
    icon: Share2,
    features: ["Content Strategy", "Community Management", "Account Handling", "Social Advertising"],
    color: "from-orange-600 to-yellow-500",
    textColor: "text-orange-600",
  },
  {
    title: "SEO & Analytics",
    link: "seo-analytics",
    description: "Strategic optimization that ensures your stories reach the right audience at the right time.",
    icon: Search,
    features: ["Technical SEO", "Content Optimization", "Performance Tracking", "Competitive Analysis"],
    color: "from-yellow-500 to-orange-400",
    textColor: "text-yellow-500",
  },
  {
    title: "Content Creation",
    link: "content-creation",
    description: "Compelling content that doesn't just inform it captivates, engages, and converts your audience.",
    icon: PenTool,
    features: ["Video Production", "Copywriting", "Visual Design", "Interactive Content"],
    color: "from-orange-400 to-red-400",
    textColor: "text-orange-400",
  },
  {
    title: "Branding",
    link: "branding",
    description: "Complete brand identity development that tells your unique story across every touchpoint.",
    icon: Palette,
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Positioning"],
    color: "from-red-400 to-orange-500",
    textColor: "text-red-400",
  },
]

export default function ServicesPage() {
  // The 'hoveredService' state was not being used, so it has been removed for cleaner code.
  // You can add it back if you plan to implement a feature that requires it.

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-orange-50 to-orange-100 text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden"> {/* Added overflow-hidden to contain floating elements */}
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
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every great story needs the right tools. We provide comprehensive marketing solutions that bring your
              brand's narrative to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  // 'onHover' state was removed as it was unused
                >
                  <div className="bg-white border border-orange-200 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                    {/* Background gradient effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" /> {/* Changed icon color to white for better contrast */}
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="flex items-center text-sm text-gray-500"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          >
                            <Star className={`w-3 h-3 ${service.textColor} mr-2 flex-shrink-0`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Link */}
                    <Link href={`/services/${service.link}`} passHref legacyBehavior>
                      <motion.a // Changed to motion.a for animation on an anchor tag
                        aria-label={`Learn more about ${service.title}`}
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-orange-500 font-semibold"
                        whileHover={{ scale: 1.1, x: 5 }}
                      >
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                    </Link>
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
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Ready to Tell Your Story?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create marketing campaigns that don't just reach your audience they move them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/how-we-work" passHref>
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See How We Work
                </motion.button>
              </Link>
              <Link href="/contact" passHref>
                <motion.button
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-400/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`, // Adjusted random range
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity, // CORRECTED: Use Infinity directly
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </section>
    </div>
  )
}