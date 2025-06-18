"use client"
import { useEffect } from "react"

export const BotpressWidget = () => {
  useEffect(() => {
  const inject = document.createElement("script")
  inject.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js"
  inject.async = true
  inject.onerror = () => console.error("Inject.js failed to load")

  const config = document.createElement("script")
  config.src = "https://files.bpcontent.cloud/2025/04/22/03/20250422034551-33JRTCQD.js"
  config.async = true
  config.onerror = () => console.error("Botpress config script failed to load")

  document.body.appendChild(inject)
  document.body.appendChild(config)

  return () => {
    document.body.removeChild(inject)
    document.body.removeChild(config)
  }
}, [])


  return null
}
