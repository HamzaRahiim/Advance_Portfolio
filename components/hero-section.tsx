"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";

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
  setActiveMenu?: (menu: string) => void
}

const jobTitles = [
  "Web Developer",
  "UI/UX Developer",
  "Front-end Developer",
];

export default function HeroSection({ theme, setActiveMenu }: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Navigation handlers
  const handleNavigation = (section: string) => {
    if (setActiveMenu) {
      setActiveMenu(section);
    } else {
      // Fallback to scroll if setActiveMenu is not provided
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-center px-4 pb-8 md:pb-0" style={{ minHeight: '100vh' }}>
      <div className="space-y-2 mt-8 mb-6">
        <p className="text-gray-400 text-sm md:text-base mb-2">Get To Know Me</p>
        <h1 className="hidden md:block text-4xl md:text-5xl font-bold text-white ">Hamza Rahim</h1>
        <div className="flex justify-center " style={{ position: 'relative', minHeight: 40 }}>
          <AnimatedUnderline theme={theme} />
        </div>
        <div style={{ position: 'relative', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={jobTitles[index]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl xl:text-4xl font-semibold whitespace-nowrap"
              style={{ color: theme.primary, position: 'absolute', left: 0, right: 0 }}
            >
              {jobTitles[index]}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Show name below image on small screens, with extra margin for visibility */}
        <h1 className="block md:hidden text-3xl font-bold text-white mt-6 mb-2">Hamza Rahim</h1>
      </div>
      <div className="flex justify-center space-x-4 text-gray-400 mb-6">
        <a href="https://github.com/hamzarahim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">🐙</span>
        </a>
        <a href="https://linkedin.com/in/hamzarahim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer shadow">
          <span className="text-xl">in</span>
        </a>
      </div>
      <p className="text-gray-300 leading-relaxed max-w-xl mx-auto text-sm md:text-base mb-8">
        I'm Hamza Rahim, a passionate Front-end Developer specializing in Next.js and React. I craft modern, responsive web applications with a focus on clean code, performance, and user experience. I love turning ideas into interactive digital products and am always eager to learn and work with the latest technologies in the web ecosystem.
      </p>
      <div className="flex justify-center gap-4 mb-20 md:mb-2">
        <motion.button
          className="w-auto px-6 py-2 text-white font-normal rounded-lg transition-all hover:scale-105 shadow text-sm md:text-base"
          style={{ backgroundColor: theme.primary }}
          onClick={() => handleNavigation('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.button>
        <motion.button
          className="w-auto px-6 py-2 text-white font-normal rounded-lg transition-all hover:scale-105 shadow text-sm md:text-base"
          style={{ backgroundColor: theme.primary }}
          onClick={() => handleNavigation('about')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.button>
      </div>
    </div>
  )
}
