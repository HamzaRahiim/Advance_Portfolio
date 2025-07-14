"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

interface BlogSectionProps {
  theme: any
}

export default function BlogSection({ theme }: BlogSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <p className="text-gray-400 text-sm">Check Out My Latest Blog Posts</p>
        <h2 className="text-5xl font-bold text-white">
          My <span style={{ color: theme.primary }}>Blog</span>
        </h2>
        <AnimatedUnderline theme={theme} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {[
          {
            date: "31 Dec, 2023",
            title: "Women In Web Design: How To Achieve Success",
            image: "/placeholder.svg?height=200&width=300",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
            date: "28 Dec, 2023",
            title: "The Services Provide For Designs",
            image: "/placeholder.svg?height=200&width=300",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolore, porro rem quod illo quam...",
          },
          {
            date: "25 Dec, 2023",
            title: "Mobile App Landing Design & App Maintain",
            image: "/placeholder.svg?height=200&width=300",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
        ].map((post, idx) => {
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
              key={idx}
              initial={{ opacity: 0, ...dir }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, ...dir }}
              transition={{ duration: 0.6, delay: 0.05 * idx, type: 'spring', stiffness: 60 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-600 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-sm" style={{ color: theme.primary }}>
                  {post.date}
                </span>
                <h3 className="text-white font-semibold text-lg leading-tight">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  )
}
