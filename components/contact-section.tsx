"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, User, MapPin, Phone } from "lucide-react";

interface ContactSectionProps {
  theme: any
}

export default function ContactSection({ theme }: ContactSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="space-y-8"
    >
      {/* Title Section */}
      <div className="text-center space-y-2">
        <p className="text-gray-400 text-sm">Feel Free To Contact Me Anytimes</p>
        <h2 className="text-5xl font-bold text-white">
          My <span style={{ color: theme.primary }}>Contact</span>
        </h2>
        <div className="relative w-16 h-1 mx-auto overflow-hidden" style={{ backgroundColor: theme.primary }}>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-white"
            animate={{ x: [-8, 56, -8] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-white"
            animate={{ x: [56, -8, 56] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <form className="space-y-6 w-full">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 shadow focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 shadow focus:border-blue-500 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 shadow focus:border-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 shadow focus:border-blue-500 focus:outline-none resize-none"
          ></textarea>
          <div className="flex justify-start">
            <Button
              className="px-8 py-3 text-white font-semibold rounded-lg shadow hover:opacity-90 transition-all"
              style={{ backgroundColor: theme.primary }}
            >
              Send Message
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="w-full flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
          <p className="text-gray-400 text-base mb-2">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
          <div className="flex items-center gap-3">
            <User className="w-6 h-6" style={{ color: theme.primary }} />
            <div>
              <div className="font-semibold text-white">Name</div>
              <div className="font-medium" style={{ color: theme.primary }}>Hamza Rahim</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" style={{ color: theme.primary }} />
            <div>
              <div className="font-semibold text-white">Location</div>
              <div className="font-medium" style={{ color: theme.primary }}>Karachi, Pakistan</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" style={{ color: theme.primary }} />
            <div>
              <div className="font-semibold text-white">Call Me</div>
              <div className="font-medium" style={{ color: theme.primary }}>+92 300 123 4567</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" style={{ color: theme.primary }} />
            <div>
              <div className="font-semibold text-white">Email Me</div>
              <div className="font-medium" style={{ color: theme.primary }}>info@example.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full mt-8 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.949964479836!2d-0.2962906846758377!3d51.55855431601137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610b2e2e2c6b1%3A0x2e2b2e2b2e2b2e2b!2sWembley%2C%20UK!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  )
}
