import Link from "next/link"
import { Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur-lg border-t border-orange-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#2d251a] mb-4">The <span className="bg-[#FF5733] text-[#FFFFF0] rounded-md px-0.5 py-0.5 inline-block">AD</span> Foundry</h3>
            <p className="text-gray-700 mb-6 max-w-md">
              "Ideas that sell, stories that stay", We're a creative marketing agency that transforms brands
              through compelling storytelling and innovative campaigns.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:theadfoundryinfo@gmail.com"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors duration-300 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://instagram.com/theadfoundry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors duration-300 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#2d251a]">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/services/digital-marketing" className="hover:text-orange-600 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/performance-marketing" className="hover:text-orange-600 transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-orange-600 transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services/seo-analytics" className="hover:text-orange-600 transition-colors">SEO & Analytics</Link></li>
              <li><Link href="/services/content-creation" className="hover:text-orange-600 transition-colors">Content Creation</Link></li>
              <li><Link href="/services/branding" className="hover:text-orange-600 transition-colors">Branding</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#2d251a] mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/principles" className="hover:text-orange-600 transition-colors">Our Principles</Link></li>
              <li><Link href="/how-we-work" className="hover:text-orange-600 transition-colors">How We Work</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-orange-600 transition-colors">Why Choose Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} The Ad Foundry. All rights reserved. Crafted with passion for storytelling.</p>
        </div>
      </div>
    </footer>
  )
}