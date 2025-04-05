"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAboveFooter, setIsAboveFooter] = useState(false)
  const buttonRef = useRef(null)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    // Check if we're near the footer
    const footer = document.querySelector("footer")
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // If footer is visible in the viewport
      if (footerTop < windowHeight) {
        setIsAboveFooter(true)
      } else {
        setIsAboveFooter(false)
      }
    }
  }

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          ref={buttonRef}
          onClick={scrollToTop}
          className={`fixed right-6 z-50 rounded-full p-3 shadow-lg ${isAboveFooter ? "bottom-20" : "bottom-6"}`}
          size="icon"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}

