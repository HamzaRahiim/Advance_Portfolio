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
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null)

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
        return <HeroSection theme={theme} setActiveMenu={setActiveMenu} />
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed left-0 top-0 md:top-10 z-40">
        <div className="relative">
          <Button
            onClick={() => setShowSettings(!showSettings)}
            className="w-12 h-12 rounded-none rounded-br-xl bg-gray-800/90 hover:bg-gray-700 flex items-center justify-center border-r border-b border-gray-700 backdrop-blur-sm border-l-0 border-t-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Settings className="w-5 h-5 text-white" />
            </motion.div>
          </Button>

          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                className="absolute top-12 left-0 bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 space-y-6 border border-gray-700 min-w-[280px]"
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
                        className={`w-10 h-10 rounded-lg border-2 transition-all hover:scale-110 ${currentTheme === key ? "border-white shadow-lg" : "border-gray-600"
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
                      className={`text-xs py-2 px-4 rounded-lg transition-all ${!customCursor ? "text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        }`}
                      style={{
                        backgroundColor: !customCursor ? theme.primary : undefined,
                      }}
                    >
                      Default
                    </Button>
                    <Button
                      onClick={() => setCustomCursor(true)}
                      className={`text-xs py-2 px-4 rounded-lg transition-all ${customCursor ? "text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-300"
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
            initial={(() => {
              switch (activeMenu) {
                case 'home': return { opacity: 0, x: -400, scale: 0.95 };
                case 'about': return { opacity: 0, x: 400, scale: 0.95 };
                case 'portfolio': return { opacity: 0, y: -400, scale: 0.95 };
                case 'blog': return { opacity: 0, y: 400, scale: 0.95 };
                case 'contact': return { opacity: 0, scale: 0.8 };
                default: return { opacity: 0, scale: 0.9, y: 20 };
              }
            })()}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 40 }}
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
                      className="w-full lg:w-[40%] aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg flex items-center justify-center mb-6 lg:mb-0 lg:mr-10"
                    >
                      <Image
                        src={profileImage}
                        alt="Profile"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                    {/* Show name below image on mobile only, outside the image container */}
                    <div className="block md:hidden w-full mb-2">
                      <h1 className="text-2xl font-bold text-white text-center mt-2">Hamza Rahim</h1>
                    </div>
                    {/* Content Area - Centered and Responsive */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-center items-center h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 p-2">
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
      <div className="hidden md:flex fixed right-0 top-0 h-full items-center z-30">
        <div className="flex flex-col justify-center items-center h-[90vh] bg-gray-900/80 rounded-2xl shadow-lg p-4 relative" style={{ minHeight: '600px' }}>
          {/* Cutout effect for active menu */}
          {menuItems.map((item, idx) => activeMenu === item.id && (
            <div
              key={item.id + '-cutout'}
              className="absolute left-0"
              style={{
                top: `calc(${idx * 72}px + 8px)`, // 64px button + 8px gap
                width: 32,
                height: 64,
                background: 'transparent',
                borderTopRightRadius: 32,
                borderBottomRightRadius: 32,
                boxShadow: `8px 0 16px 0 rgba(0,0,0,0.15)`,
                zIndex: 15,
                pointerEvents: 'none',
                backgroundColor: '#18181b', // match card bg
              }}
            />
          ))}
          <div className="flex flex-col justify-center items-center h-full gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              const isHovered = hoveredMenuItem === item.id;
              return (
                <div key={item.id} className="relative flex items-center justify-center">
                  <motion.button
                    onClick={() => setActiveMenu(item.id)}
                    onMouseEnter={() => setHoveredMenuItem(item.id)}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className={`flex items-center justify-center transition-all duration-300 group relative
                      ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
                      ${isActive ? "z-20" : "z-10"}
                    `}
                    style={{
                      width: isActive ? 64 : 56,
                      height: isActive ? 64 : 56,
                      marginLeft: isActive ? -32 : 0,
                      borderRadius: isActive ? '50%' : '12px',
                      background: isActive ? 'radial-gradient(circle at 40% 60%, rgba(31,41,55,0.9) 60%, ' + theme.primary + ' 100%)' : 'rgba(31,41,55,0.9)',
                      boxShadow: isActive ? '0 4px 24px 0 rgba(0,0,0,0.25)' : undefined,
                      position: 'relative',
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.button>

                  {/* Enhanced Tooltip with theme background */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-full mr-4 px-4 py-2 text-lg rounded-lg font-semibold shadow-lg whitespace-nowrap z-50"
                        style={{
                          backgroundColor: theme.primary,
                          color: '#fff',
                          minWidth: 90,
                          textAlign: 'center',
                          boxShadow: `0 8px 16px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)`,
                        }}
                      >
                        {item.label}
                        {/* Arrow pointer */}
                        <div
                          className="absolute left-full top-1/2 transform -translate-y-1/2"
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: `8px solid ${theme.primary}`,
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
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
                className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"
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
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-80 blur-3xl"
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
