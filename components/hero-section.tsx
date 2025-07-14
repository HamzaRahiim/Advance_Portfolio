"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const AnimatedUnderline = ({ theme }: { theme: any }) => (
  <div className="relative w-16 h-1 mx-auto overflow-hidden" style={{ backgroundColor: theme.primary }}>
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-black"
      animate={{
        x: [-8, 56, -8],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-black"
      animate={{
        x: [56, -8, 56],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 3,
      }}
    />
  </div>
)

interface HeroSectionProps {
  theme: any
}

export default function HeroSection({ theme }: HeroSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-center space-y-6 p-4">
      <div className="space-y-2">
        <p className="text-gray-400 text-sm md:text-base">Get To Know Me</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Alex Smith</h1>
        <div className="flex justify-center">
          <span className="block w-16 h-1 rounded-full" style={{ backgroundColor: theme.primary }}></span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold" style={{ color: theme.primary }}>
          WEB DEVELOPER
        </h2>
      </div>
      <div className="flex justify-center space-x-4 text-gray-400">
        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">🐦</span>
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">f</span>
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">in</span>
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">🐙</span>
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">📷</span>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed max-w-xl mx-auto text-sm md:text-base">
        I am a freelancer based in the United Kingdom and I have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
      </p>
      <div className="flex justify-center space-x-4">
        <Button
          className="px-8 py-2 text-white font-medium rounded-lg transition-all hover:scale-105 shadow text-sm md:text-base"
          style={{ backgroundColor: theme.primary }}
        >
          Hire Me
        </Button>
        <Button
          className="px-8 py-2 text-white font-medium rounded-lg transition-all hover:scale-105 shadow text-sm md:text-base"
          style={{ backgroundColor: theme.secondary }}
        >
          About Me
        </Button>
      </div>
    </div>
  )
}
