"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion } from "motion/react"

// Logo object: { name, id, img }

// Utility function to randomly shuffle an array
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Utility function to distribute logos across multiple columns
function distributeLogos(allLogos, columnCount) {
  const shuffled = shuffleArray(allLogos)
  const columns = Array.from({ length: columnCount }, () => [])
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })
  return columns
}

// LogoColumn component: Displays a single column of animated logos
const LogoColumn = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000 // Time each logo is displayed (in milliseconds)
    const columnDelay = index * 200 // Stagger the start of each column's animation
    // Calculate which logo should be displayed based on the current time
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)

    // Memoize the current logo to prevent unnecessary re-renders
    const CurrentLogo = useMemo(
      () => logos[currentIndex].img,
      [logos, currentIndex]
    )

    return (
      // Framer Motion component for the column container
      <motion.div
        className="w-40 h-40 md:w-64 md:h-64 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }} // Start invisible and below final position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
        transition={{
          delay: index * 0.1, // Stagger the animation of each column
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* AnimatePresence enables animation of components that are removed from the DOM */}
        <AnimatePresence mode="wait">
          {/* Framer Motion component for each logo */}
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            // Animation for when the logo enters
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            // Animation for when the logo is displayed
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            // Animation for when the logo exits
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <img 
              src={logos[currentIndex].img}
              alt={logos[currentIndex].name}
              className="w-42 h-42 md:w-64 md:h-64 object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

// Main LogoCarousel component
function LogoCarousel({ columnCount = 2 }) {
  const [logoSets, setLogoSets] = useState([])
  const [currentTime, setCurrentTime] = useState(0)

  // Memoize the array of logos to prevent unnecessary re-renders
  const allLogos = useMemo(
    () => [
      { name: "Company 1", id: 1, img: "/company/Picture1.png" },
      { name: "Company 2", id: 2, img: "/company/Picture2.png" },
      { name: "Company 3", id: 3, img: "/company/Picture3.png" },
      { name: "Company 4", id: 4, img: "/company/Picture4.png" },
      { name: "Company 5", id: 5, img: "/company/Picture5.png" },
      { name: "Company 6", id: 6, img: "/company/Picture6.png" },
      { name: "Company 7", id: 7, img: "/company/Picture7.png" },
    ],
    []
  )

  // Distribute logos across columns when the component mounts
  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount)
    setLogoSets(distributedLogos)
  }, [allLogos])

  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  // Render the logo columns
  return (
    <div className="flex space-x-4 h-24 md:h-48 justify-center items-center ">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}


export { LogoCarousel }

