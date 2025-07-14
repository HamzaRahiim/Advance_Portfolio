"use client"

import { motion } from "framer-motion"

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
        {["All", "Web Development", "Web Design", "Graphic Design", "UI-UX Design"].map((filter, index) => (
          <motion.button
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className={`px-6 py-2 rounded-lg transition-all font-medium ${
              filter === "Web Development"
                ? "text-white shadow-lg"
                : "bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
            }`}
            style={{
              backgroundColor: filter === "Web Development" ? theme.primary : "transparent",
            }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <motion.div
            key={item}
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
        ))}
      </div>
    </motion.div>
  )
}
