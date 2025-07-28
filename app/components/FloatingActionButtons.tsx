import type React from "react"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const FloatingActionButtons = () => {
  // Base style for the floating animation
  const animationStyle = {
    animation: "float 4s ease-in-out infinite",
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center gap-6 md:left-auto md:right-5">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+91 9550771823"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white"
        style={{ ...animationStyle, animationDelay: "0s" }}
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+91 9550771823"
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white"
        style={{ ...animationStyle, animationDelay: "1s" }}
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* Email Button */}
      <a
        href="mailto:theadfoundryinfo@gmail.com"
        aria-label="Email us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-700 text-white"
        style={{ ...animationStyle, animationDelay: "2s" }}
      >
        <MdEmail size={28} />
      </a>
    </div>
  )
}