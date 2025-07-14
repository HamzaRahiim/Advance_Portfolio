"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  theme: any
}

export default function ContactSection({ theme }: ContactSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-white text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold" style={{ color: theme.primary }}>
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span className="text-white text-sm">📧</span>
                </div>
                <span className="text-gray-300">alex.smith@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span className="text-white text-sm">📱</span>
                </div>
                <span className="text-gray-300">+44 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold" style={{ color: theme.primary }}>
            Send Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
            ></textarea>
            <Button
              className="w-full py-3 text-white font-medium rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: theme.primary }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
