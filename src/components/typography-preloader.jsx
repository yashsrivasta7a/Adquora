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
          "bg-gray-50 opacity-100 transform-none duration-300": !isExiting,
          "bg-transparent opacity-0 scale-95 duration-800 pointer-events-none": isExiting,
        },
        className,
      )}
    >
      <div
        className={cn("absolute bg-black transition-all ease-out", {
          "w-4 h-4 rounded-full bottom-4 left-1/2 -translate-x-1/2 duration-0": !showTransition,
          "w-[300vw] h-[300vh] rounded-full bottom-0 left-1/2 -translate-x-1/2 duration-1500":
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
          <div className="text-7xl md:text-8xl font-bold tracking-tight text-black font-sans" key={currentWordIndex}>
            {currentWord.text}
          </div>
        </div>

        <div className="w-48 h-0.5 bg-gray-200 relative overflow-hidden rounded-full">
          <div
            className="h-full bg-gray-400 transition-all duration-50 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
