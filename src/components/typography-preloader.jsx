"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"

const words = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Hallo", lang: "German" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Привет", lang: "Russian" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "你好", lang: "Chinese" },
  { text: "नमस्ते", lang: "Hindi" },
]

export default function TypographyPreloader({ onComplete, duration = 1200, className }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [isTransitionComplete, setIsTransitionComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const wordDuration = 100

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration / 20)
        return Math.min(newProgress, 100)
      })
    }, 20)

    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = (prev + 1) % words.length
        if (nextIndex === 0) {
          clearInterval(wordInterval)
          setTimeout(() => {
            setShowTransition(true)
            setTimeout(() => {
              setIsTransitionComplete(true)
              setTimeout(() => {
                setIsExiting(true)
                setTimeout(() => {
                  setIsVisible(false)
                  onComplete?.()
                }, 100) // Increased duration to allow the background transition to complete
              }, 50) // Slightly longer delay before starting exit
            }, 150)
          }, 100)
          return prev
        }
        return nextIndex
      })
    }, wordDuration)

    return () => {
      clearInterval(wordInterval)
      clearInterval(progressInterval)
    }
  }, [duration, onComplete])

  if (!isVisible) return null

  const currentWord = words[currentWordIndex]

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-all ease-in-out overflow-hidden",
        {
          "bg-[#0A0A0A] opacity-100 transform-none duration-300": !isExiting,
          "bg-transparent opacity-0 scale-95 duration-800 pointer-events-none": isExiting,
        },
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden pointer-events-none z-0 transition-opacity duration-500" style={{ opacity: showTransition ? 0 : 1 }}>
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-full">
          <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-[100%]" />
          <div className="absolute inset-0 bg-blue-400/20 blur-[80px] rounded-[100%] scale-y-75 translate-y-1/4" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/40 to-transparent blur-[50px]" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-[10%] h-[80%] bg-blue-400/10 blur-[40px] -rotate-12" />
        <div className="absolute bottom-0 right-1/4 w-[10%] h-[80%] bg-blue-400/10 blur-[40px] rotate-12" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] h-[90%] bg-blue-300/10 blur-[60px]" />
      </div>

      <div
        className={cn("absolute bg-[#0A0A0A] transition-all ease-out z-20", {
          "w-4 h-4 rounded-full bottom-4 left-1/2 -translate-x-1/2 duration-0 opacity-0": !showTransition,
          "w-[300vw] h-[300vh] rounded-full bottom-0 left-1/2 -translate-x-1/2 duration-1500 opacity-100":
            showTransition && !isTransitionComplete,
          "w-[300vw] h-[300vh] rounded-none bottom-0 left-0 translate-x-0 duration-200 opacity-0": isTransitionComplete,
        })}
      />

      <div
        className={cn("relative flex flex-col items-center space-y-12 z-10 transition-all ease-out", {
          "opacity-100 scale-100 duration-300": !showTransition,
          "opacity-0 scale-95 duration-500": showTransition,
        })}
      >
        <div className="relative h-24 flex items-center justify-center">
          <div className="text-7xl text-white md:text-8xl font-bold tracking-tight text-[#51a2ff] font-sans" key={currentWordIndex}>
            {currentWord.text}
          </div>
        </div>

        <div className="w-48 h-0.5 bg-[#51a2ff] relative overflow-hidden rounded-full">
          <div
            className="h-full bg-white transition-all duration-50 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
