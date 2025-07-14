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
      className="space-y-8 p-4"
    >
      <div className="flex items-start space-x-8 h-full">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-shrink-0"
        >
          <div className="w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800">
            <Image
              src={profileImage}
              alt="Profile"
              width={320}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-8 pr-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center space-y-2"
          >
            <p className="text-gray-400 text-sm">My Intro</p>
            <h2 className="text-5xl font-bold text-white">
              About <span style={{ color: theme.primary }}>Me</span>
            </h2>
            <AnimatedUnderline theme={theme} />
          </motion.div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Who Am <span style={{ color: theme.primary }}>I ?</span>
              </h3>
              <h4 className="text-xl text-white">
                I'm Alex Smith, A Visual <span style={{ color: theme.primary }}>UX/UI Designer</span> And{" "}
                <span style={{ color: theme.primary }}>Web Developer</span>
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I am a freelancer based in the United Kingdom and I have been building noteworthy UX/UI designs and
                websites for years, which comply with the latest design trends. I help convert a vision and an idea into
                meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks,
                iterate fast and deliver faster.
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
                    <span className="text-white">Alex</span>
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
                    <span className="text-white">+44 123 456 789</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Last Name : </span>
                    <span className="text-white">Smith</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Nationality : </span>
                    <span className="text-white">British</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Address : </span>
                    <span className="text-white">London, UK</span>
                  </div>
                  <div>
                    <span className="text-gray-400">E-mail : </span>
                    <span style={{ color: theme.primary }}>Info@Example.Com</span>
                  </div>
                </div>
              </div>
            </div>
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
                    { year: "2020 - Present", title: "Senior UX/UI Designer", company: "Tech Solutions Ltd" },
                    { year: "2018 - 2020", title: "UI Designer", company: "Creative Agency" },
                    { year: "2016 - 2018", title: "Junior Designer", company: "Design Studio" },
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
                    { year: "2014 - 2016", title: "Master in Computer Science", school: "University of London" },
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
      </div>
    </motion.div>
  )
}
