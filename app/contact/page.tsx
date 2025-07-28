"use client"

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
    service: [] as string[], // Kept as "service" but initialized as an array
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Validation to ensure at least one service is selected
    if (formData.service.length === 0) {
      setError("Please select at least one service.")
      return
    }
    setIsSubmitting(true)
    setError(null)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
    const templateIdToAdmin =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN || ""
    const templateIdToUser =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER || ""
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

    // Prepare data for EmailJS: join the array into a single string
    const emailData = {
      ...formData,
      service: formData.service.join(", "),
    }

    try {
      // Send email to admin
      await emailjs.send(serviceId, templateIdToAdmin, emailData, publicKey)

      // Send confirmation email to the user
      await emailjs.send(serviceId, templateIdToUser, emailData, publicKey)

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after a delay
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

    // Handle checkbox changes for the 'service' field
    if (type === "checkbox" && name === "service") {
      const { checked } = e.target as HTMLInputElement
      setFormData(prevFormData => {
        const currentServices = prevFormData.service
        if (checked) {
          // Add the service to the array if checked
          return { ...prevFormData, service: [...currentServices, value] }
        } else {
          // Remove the service from the array if unchecked
          return {
            ...prevFormData,
            service: currentServices.filter(item => item !== value),
          }
        }
      })
    } else {
      // Handle other input fields
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

                  {/* Services Checkboxes */}
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

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  className="bg-white border border-orange-200 rounded-2xl p-6 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400">
                        Email Us
                      </h3>
                      <p className="text-gray-400">Get in touch directly</p>
                    </div>
                  </div>
                  <a
                    href="mailto:theadfoundryinfo@gmail.com"
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg"
                  >
                    theadfoundryinfo@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  className="bg-white border border-orange-200 rounded-2xl p-6 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <Instagram className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400">
                        Follow Us
                      </h3>
                      <p className="text-gray-400">See our latest work</p>
                    </div>
                  </div>
                  <a
                    href="https://instagram.com/theadfoundry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg"
                  >
                    @theadfoundry
                  </a>
                </motion.div>

                <motion.div
                  className="bg-white border border-orange-200 rounded-2xl p-6 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400">
                        Response Time
                      </h3>
                      <p className="text-gray-400">We're quick to respond</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">Within 24 hours</p>
                </motion.div>
              </div>

              {/* What Happens Next */}
              <motion.div
                className="bg-white border border-orange-200 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-orange-400">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  {[
                    "We'll review your project details within 24 hours",
                    "Schedule a discovery call to understand your vision",
                    "Create a customized proposal tailored to your needs",
                    "Begin crafting your unique brand story",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
