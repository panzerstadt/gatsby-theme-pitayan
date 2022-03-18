import React, { useState } from "react"
import { RiLinksLine } from "react-icons/ri"
import { copyToClipboard } from "@/utils"

const URLCopyIconButton: React.FC<Record<string, unknown>> = () => {
  const [hasCopied, setHasCopied] = useState<boolean>(false)
  const [isAnimated, setIsAnimated] = useState<boolean>(false)

  const copyOnClick = () => {
    if (hasCopied) return

    copyToClipboard(window.location.href)
    setHasCopied(true)
    setIsAnimated(false)

    setTimeout(() => {
      setHasCopied(false)
    }, 1000)
  }

  return (
    <button className="text-gray-500" onClick={copyOnClick}>
      <RiLinksLine
        className={isAnimated ? "" : "animate-fade-in-scale"}
        onAnimationEnd={() => setIsAnimated(true)}
      />
    </button>
  )
}

export default URLCopyIconButton