"use client"

import { motion } from "framer-motion"
import { useState } from "react";

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

interface PortfolioSectionProps {
  theme: any
}

export default function PortfolioSection({ theme }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <p className="text-gray-400 text-sm">Showcasing Some Of My Best Work</p>
        <h2 className="text-5xl font-bold text-white">
          My <span style={{ color: theme.primary }}>Portfolio</span>
        </h2>
        <AnimatedUnderline theme={theme} />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {["All", "Web Development", "Web Design", "Graphic Design", "UI-UX Design"].map((filter) => {
          const isActive = activeFilter === filter;
          const isHovered = hoveredFilter === filter;
          const shouldTransform = isActive || isHovered;

          return (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              onClick={() => setActiveFilter(filter)}
              onMouseEnter={() => setHoveredFilter(filter)}
              onMouseLeave={() => setHoveredFilter(null)}
              className={`relative px-6 py-2 font-medium overflow-hidden
                ${isActive ? "text-white shadow-lg" : "bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"}
              `}
              style={{
                backgroundColor: isActive ? theme.primary : "transparent",
                // Curve effect: right side upar, left side neeche
                borderRadius: shouldTransform ? "8px 20px 8px 20px" : "8px",
                clipPath: shouldTransform 
                  ? "polygon(15% 0%, 100% 15%, 85% 100%, 0% 85%)" 
                  : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                boxShadow: shouldTransform 
                  ? `0 8px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)` 
                  : "none",
              }}
            >
              {/* Background gradient for curve effect */}
              {shouldTransform && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(45deg, ${theme.primary}40 0%, ${theme.primary} 50%, ${theme.primary}60 100%)`,
                    clipPath: "polygon(15% 0%, 100% 15%, 85% 100%, 0% 85%)",
                  }}
                />
              )}
              
              {/* Button text */}
              <span className="relative z-10">{filter}</span>
              
              {/* Corner accents */}
              {shouldTransform && (
                <>
                  {/* Top right accent */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    className="absolute top-0 right-0 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: theme.primary,
                      transform: "translate(25%, -25%)",
                    }}
                  />
                  {/* Bottom left accent */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    className="absolute bottom-0 left-0 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: theme.primary,
                      transform: "translate(-25%, 25%)",
                    }}
                  />
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
          // Animation directions: left, right, top, bottom
          const directions = [
            { x: -100, y: 0 }, // left
            { x: 100, y: 0 },  // right
            { x: 0, y: -100 }, // top
            { x: 0, y: 100 },  // bottom
          ];
          const dir = directions[idx % 4];
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, ...dir }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, ...dir }}
              transition={{ duration: 0.6, delay: 0.05 * idx, type: 'spring', stiffness: 60 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all cursor-pointer group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔗</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  )
}
