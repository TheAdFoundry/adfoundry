="use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Instagram, Send, Clock } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: [] as string[],
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.service.length === 0) {
      setError("Please select at least one service.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    // Securely loaded from .env
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
    const templateIdToAdmin =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN || ""
    const templateIdToUser =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER || ""
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

    const emailData = {
      ...formData,
      service: formData.service.join(", "),
    }

    try {
      await emailjs.send(serviceId, templateIdToAdmin, emailData, publicKey)
      await emailjs.send(serviceId, templateIdToUser, emailData, publicKey)

      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          service: [],
          message: "",
        })
      }, 3000)
    } catch (err) {
      console.error("EmailJS error:", err)
      setError("Failed to send message. Please try again later.")
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

    if (type === "checkbox" && name === "service") {
      const { checked } = e.target as HTMLInputElement
      setFormData(prev => {
        const current = prev.service
        return {
          ...prev,
          service: checked
            ? [...current, value]
            : current.filter(item => item !== value),
        }
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const serviceOptions = [
    "Digital Marketing",
    "Performance Marketing",
    "Social Media Marketing",
    "SEO & Analytics",
    "Content Creation",
    "Branding",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-orange-50 to-orange-100 text-black">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2d251a]">
              Let's Create{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to tell your story? We're here to listen, collaborate, and
              bring your vision to life through compelling narratives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="bg-white border border-orange-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-orange-400">
                Start Your Project
              </h2>
              {isSubmitted ? (
                <motion.div
                  className="text-center flex flex-col items-center justify-center h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Mail className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Your message has been sent. We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-black"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-black"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-black"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services Interested In *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {serviceOptions.map(option => (
                        <label
                          key={option}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="service"
                            value={option}
                            checked={formData.service.includes(option)}
                            onChange={handleChange}
                            className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us Your Story *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 text-black resize-none"
                      placeholder="Describe your project, goals, and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  {error && (
                    <p className="text-red-500 text-sm mt-4">{error}</p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Sidebar content skipped for brevity */}
          </div>
        </div>
      </section>
    </div>
  )
}
