"use client"

import { motion } from "framer-motion"
import { Palette, Crown, Film, Zap, Users, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const advantages = [
  {
    title: "Creative Freedom",
    description:
      "We believe the best ideas come from unrestricted creativity. Our team has the freedom to explore bold concepts and innovative approaches that set your brand apart.",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    stats: "100% Original Concepts",
  },
  {
    title: "Founders-Led Attention",
    description:
      "Your project gets direct attention from our founders, ensuring every detail aligns with your vision and our commitment to excellence.",
    icon: Crown,
    color: "from-red-500 to-orange-600",
    stats: "Personal Involvement",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "We don't just create ads we craft cinematic experiences that captivate audiences and leave lasting impressions through powerful storytelling.",
    icon: Film,
    color: "from-orange-600 to-yellow-500",
    stats: "Award-Winning Creative",
  },
  {
    title: "Young Creativity",
    description:
      "Our young, dynamic team brings fresh perspectives and cutting edge trends to every project, ensuring your brand stays ahead of the curve.",
    icon: Zap,
    color: "from-yellow-500 to-orange-400",
    stats: "Gen-Z Insights",
  },
  {
    title: "No Barriers for Team",
    description:
      "We foster an environment where every team member can contribute their best ideas, creating a collaborative culture that drives innovation.",
    icon: Users,
    color: "from-orange-400 to-red-400",
    stats: "Collaborative Excellence",
  },
]

const testimonials = [
  {
    quote:
      "The Ad Foundry transformed our brand story in ways we never imagined. Their cinematic approach made our products feel like characters in an epic tale.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "Working with their young, creative team was refreshing. They understood our vision and elevated it beyond our expectations.",
    author: "Michael Chen",
    position: "Founder",
    company: "GreenSpace Innovations",
  },
]

export default function WhyChooseUsPage() {
  const [hoveredAdvantage, setHoveredAdvantage] = useState<number | null>(null)

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another marketing agency. We're storytellers, innovators, and your partners in creating
              campaigns that resonate and convert.
            </p>
          </motion.div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  onHoverStart={() => setHoveredAdvantage(index)}
                  onHoverEnd={() => setHoveredAdvantage(null)}
                >
                  <div className="bg-white border border-orange-200 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:scale-105">
                    {/* Background gradient effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon and Stats */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${advantage.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8 text-black" />
                      </motion.div>
                      <div className="text-right">
                        <div className="text-sm text-orange-400 font-semibold">{advantage.stats}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 text-orange-400">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>

                    {/* Hover effect */}
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

          {/* Stats Section */}
          {/*<motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "Original Content" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>/*}

          {/* Testimonials */}
          {/*<motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-orange-200 rounded-2xl p-8 relative shadow-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Quote className="w-8 h-8 text-orange-400 mb-4" />
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-400">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>/*}

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Ready to Start Your Story?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the brands that have chosen to tell their stories differently. Let's create something extraordinary
              together.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
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