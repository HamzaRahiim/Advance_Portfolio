"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import profileImage from "@/components/assets/portfolio_pic.webp"
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

interface AboutSectionProps {
  theme: any
}

export default function AboutSection({ theme }: AboutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="space-y-8 p-4 w-full max-w-7xl mx-auto"
    >
      {/* Title Section */}
      <div className="w-full flex flex-col items-center justify-center mt-4 mb-8">
        <p className="text-gray-400 text-base mb-2">My Intro</p>
        <h2 className="text-5xl font-bold text-center text-black dark:text-white">
          About <span style={{ color: theme.primary }}>Me</span>
        </h2>
        <div className="mt-2 mb-2">
          <AnimatedUnderline theme={theme} />
        </div>
      </div>

      {/* Main About Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full md:w-[40%] flex-shrink-0 flex justify-center"
        >
          <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
            <Image
              src={profileImage}
              alt="Profile"
              width={480}
              height={360}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full md:w-[60%] flex flex-col justify-center space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-black dark:text-white">
              Who Am <span style={{ color: theme.primary }}>I ?</span>
            </h3>
            <h4 className="text-3xl font-bold text-black dark:text-white">
              I'm <span style={{ color: theme.primary }}>Hamza Rahim</span>, A Visual <span style={{ color: theme.primary }}>Front-end Developer</span> And <span style={{ color: theme.primary }}>UI/UX Designer</span>
            </h4>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              I am a passionate developer based in Pakistan and I have been building noteworthy UI/UX designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Personal <span style={{ color: theme.primary }}>Informations</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">First Name : </span>
                  <span className="text-white">Hamza</span>
                </div>
                <div>
                  <span className="text-gray-400">Age : </span>
                  <span className="text-white">27 Years</span>
                </div>
                <div>
                  <span className="text-gray-400">Freelance : </span>
                  <span className="text-green-400">Available</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone : </span>
                  <span className="text-white">+92 300 123 4567</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Last Name : </span>
                  <span className="text-white">Rahim</span>
                </div>
                <div>
                  <span className="text-gray-400">Nationality : </span>
                  <span className="text-white">Pakistani</span>
                </div>
                <div>
                  <span className="text-gray-400">Address : </span>
                  <span className="text-white">Karachi, Pakistan</span>
                </div>
                <div>
                  <span className="text-gray-400">E-mail : </span>
                  <span style={{ color: theme.primary }}>info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resume Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-bold text-white text-center">
          My <span style={{ color: theme.primary }}>Resume</span>
        </h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold" style={{ color: theme.primary }}>
              Experience
            </h4>
            <div className="space-y-4">
              {[
                { year: "2020 - Present", title: "Senior Front-end Developer", company: "Tech Solutions Ltd" },
                { year: "2018 - 2020", title: "UI/UX Designer", company: "Creative Agency" },
                { year: "2016 - 2018", title: "Junior Front-end Developer", company: "Design Studio" },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="bg-gray-800 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                    <span className="text-sm text-gray-400">{exp.year}</span>
                  </div>
                  <h5 className="text-white font-semibold">{exp.title}</h5>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold" style={{ color: theme.primary }}>
              Education
            </h4>
            <div className="space-y-4">
              {[
                { year: "2014 - 2016", title: "Master in Computer Science", school: "University of Karachi" },
                { year: "2011 - 2014", title: "Bachelor in Design", school: "Art Institute" },
                { year: "2009 - 2011", title: "Diploma in Web Design", school: "Design College" },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="bg-gray-800 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                    <span className="text-sm text-gray-400">{edu.year}</span>
                  </div>
                  <h5 className="text-white font-semibold">{edu.title}</h5>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-bold text-white text-center">
          My <span style={{ color: theme.primary }}>Skills</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { skill: "UI/UX Design", percentage: 95 },
            { skill: "Web Development", percentage: 85 },
            { skill: "Graphic Design", percentage: 90 },
            { skill: "Mobile Design", percentage: 80 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="text-white font-medium">{item.skill}</span>
                <span className="text-gray-400">{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: 1.6 + index * 0.2 }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
