"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Rss, Phone, Settings, Palette, MousePointer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import profileImage from "@/components/assets/portfolio_pic.webp"

const themes = {
  blue: { primary: "#3B82F6", secondary: "#1E40AF", accent: "#60A5FA" },
  purple: { primary: "#8B5CF6", secondary: "#7C3AED", accent: "#A78BFA" },
  green: { primary: "#10B981", secondary: "#059669", accent: "#34D399" },
  orange: { primary: "#F59E0B", secondary: "#D97706", accent: "#FBBF24" },
  pink: { primary: "#EC4899", secondary: "#DB2777", accent: "#F472B6" },
}

const menuItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "portfolio", icon: Briefcase, label: "Portfolio" },
  { id: "blog", icon: Rss, label: "Blog" },
  { id: "contact", icon: Phone, label: "Contact" },
]

export default function Portfolio() {
  const [activeMenu, setActiveMenu] = useState("home")
  const [showSettings, setShowSettings] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("blue")
  const [customCursor, setCustomCursor] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (customCursor) {
      window.addEventListener("mousemove", handleMouseMove)
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "auto"
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.style.cursor = "auto"
    }
  }, [customCursor])

  const theme = themes[currentTheme as keyof typeof themes]

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <HeroSection theme={theme} />
      case "about":
        return <AboutSection theme={theme} />
      case "portfolio":
        return <PortfolioSection theme={theme} />
      case "blog":
        return <BlogSection theme={theme} />
      case "contact":
        return <ContactSection theme={theme} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Custom Cursor */}
      {customCursor && (
        <div
          className="fixed pointer-events-none z-50 w-4 h-4 rounded-full mix-blend-difference transition-all duration-100"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            backgroundColor: theme.primary,
            boxShadow: `0 0 20px ${theme.primary}80`,
          }}
        />
      )}

      {/* Settings Panel - Left Corner */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed left-6 top-6 z-40">
        <div className="relative">
          <Button
            onClick={() => setShowSettings(!showSettings)}
            className="w-12 h-12 rounded-xl bg-gray-800/90 hover:bg-gray-700 flex items-center justify-center border border-gray-700 backdrop-blur-sm"
          >
            <Settings className="w-5 h-5 text-white" />
          </Button>

          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                className="absolute top-16 left-0 bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 space-y-6 border border-gray-700 min-w-[280px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-white text-sm font-medium">
                    <Palette className="w-4 h-4" />
                    <span>Theme Colors</span>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => setCurrentTheme(key)}
                        className={`w-10 h-10 rounded-lg border-2 transition-all hover:scale-110 ${
                          currentTheme === key ? "border-white shadow-lg" : "border-gray-600"
                        }`}
                        style={{ backgroundColor: theme.primary }}
                        title={key.charAt(0).toUpperCase() + key.slice(1)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-white text-sm font-medium">
                    <MousePointer className="w-4 h-4" />
                    <span>Cursor Style</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => setCustomCursor(false)}
                      className={`text-xs py-2 px-4 rounded-lg transition-all ${
                        !customCursor ? "text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      }`}
                      style={{
                        backgroundColor: !customCursor ? theme.primary : undefined,
                      }}
                    >
                      Default
                    </Button>
                    <Button
                      onClick={() => setCustomCursor(true)}
                      className={`text-xs py-2 px-4 rounded-lg transition-all ${
                        customCursor ? "text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      }`}
                      style={{
                        backgroundColor: customCursor ? theme.primary : undefined,
                      }}
                    >
                      Custom
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="flex items-center justify-center min-h-screen relative">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.primary}15 50%, ${theme.secondary}10 50%, ${theme.secondary}10 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
              backgroundColor: `${theme.primary}08`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
              backgroundColor: `${theme.secondary}08`,
            }}
          />
        </div>

        {/* Main Card Container - 85% width on md+, full width on mobile */}
        <div className="w-full md:w-[85%] h-screen flex items-center justify-center p-4 md:p-8 relative z-10">
          {/* Main Card */}
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full max-h-[90vh]"
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 rounded-2xl h-full flex flex-col">
              <CardContent className="p-6 h-full flex flex-col overflow-hidden">
                {activeMenu === "home" ? (
                  <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full overflow-hidden">
                    {/* Profile Image - Only for home page */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full max-w-xs lg:max-w-sm aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg flex items-center justify-center mb-6 lg:mb-0 lg:mr-10"
                    >
                      <Image
                        src={profileImage}
                        alt="Profile"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                    {/* Content Area - Centered and Responsive */}
                    <div className="flex-1 flex flex-col justify-center items-center h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 p-2">
                      {renderContent()}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2">
                    {renderContent()}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Navigation Menu - Desktop: Fixed to right edge, Mobile: Sticky bottom */}
      <div className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 z-30">
        <div className="relative">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeMenu === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-16 h-16 flex items-center justify-center transition-all duration-300 group relative ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                style={{
                  backgroundColor: isActive ? theme.primary : "rgba(31, 41, 55, 0.9)",
                  borderRadius: isActive ? "12px 0 0 12px" : "12px 0 0 12px",
                  marginRight: isActive ? "0" : "-8px",
                  zIndex: isActive ? 10 : 1,
                }}
                whileHover={{ scale: 1.05, marginRight: isActive ? "0" : "0" }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />

                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Mobile Navigation Menu - Sticky Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
        <div className="flex justify-around items-center p-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeMenu === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                style={{
                  backgroundColor: isActive ? theme.primary : "transparent",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: theme.primary }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: theme.secondary }}
        />
      </div>
    </div>
  )
}
