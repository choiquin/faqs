"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

type ChatMessage = {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

type ChatOption = {
  text: string
  next?: number
  url?: string
}

type ChatStep = {
  text: string
  next?: number
  options?: ChatOption[]
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [currentOptions, setCurrentOptions] = useState<ChatOption[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const chatData: Record<number, ChatStep> = {
    1: {
      text: "Hi there! 👋 I'm your virtual assistant. I'm here to help with your questions and guide you to the right resources.",
      next: 2,
    },
    2: {
      text: "What can I help you with today?",
      options: [
        { text: "Hardware & Peripherals", next: 3 },
        { text: "Internet Connection Issues", next: 4 },
        { text: "Email & Account Problems", next: 6 },
        { text: "Service Information", next: 8 },
        { text: "Career Opportunities", next: 9 },
        { text: "Other Questions", next: 12 },
      ],
    },
    3: {
      text: "I can help you with hardware and peripheral issues. Here's a helpful resource:",
      options: [
        { text: "View Hardware Guide", url: "#hardware-guide" },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    4: {
      text: "Having trouble with your internet connection? Let me help you troubleshoot.",
      next: 5,
    },
    5: {
      text: "Here are some resources that might help:",
      options: [
        { text: "Connection Troubleshooting", url: "#connectivity" },
        { text: "Contact IT Support", next: 13 },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    6: {
      text: "I can help with email and account-related issues.",
      next: 7,
    },
    7: {
      text: "Here are some helpful resources:",
      options: [
        { text: "Password Reset Guide", url: "#password-reset" },
        { text: "Email Setup Help", url: "#email-setup" },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    8: {
      text: "Looking for information about our services? Here's what you need:",
      options: [
        { text: "Service Overview", url: "#services" },
        { text: "Account Management", url: "#account" },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    9: {
      text: "Great! We're always looking for talented individuals to join our team.",
      next: 10,
    },
    10: {
      text: "Here are our current openings:",
      options: [
        { text: "Software Developer Positions", next: 11 },
        { text: "QA Specialist", url: "#qa-jobs" },
        { text: "Project Manager", url: "#pm-jobs" },
        { text: "System Administrator", url: "#sysadmin-jobs" },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    11: {
      text: "We have several developer positions available:",
      options: [
        { text: "Junior Developer", url: "#junior-dev" },
        { text: "Senior Developer", url: "#senior-dev" },
        { text: "Full Stack Developer", url: "#fullstack-dev" },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    12: {
      text: "For other questions, you can reach our support team:",
      options: [
        { text: "Call Support", next: 13 },
        { text: "Send Email", url: "mailto:support@company.com" },
        { text: "Create Support Ticket", url: "#create-ticket" },
        { text: "Back to Main Menu", next: 2 },
      ],
    },
    13: {
      text: "You can reach our support team at:\n📞 (032) 411 8898\n📞 (032) 380 3098\n\nOur hours: Monday-Friday, 8AM-6PM",
      options: [{ text: "Back to Main Menu", next: 2 }],
    },
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation()
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages, currentOptions])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const startConversation = () => {
    setTimeout(() => {
      showBotMessage(chatData[1])
    }, 500)
  }

  const showBotMessage = async (step: ChatStep) => {
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsTyping(false)
    addMessage(step.text, false)

    // If there's a next step without options, proceed after delay
    if (step.next && !step.options) {
      setTimeout(() => {
        showBotMessage(chatData[step.next!])
      }, 1500)
    }

    // If there are options, show them after a short delay
    if (step.options) {
      setTimeout(() => {
        setCurrentOptions(step.options || [])
      }, 800)
    }
  }

  const handleOptionClick = (option: ChatOption) => {
    // Add user message
    addMessage(option.text, true)

    // Clear current options
    setCurrentOptions([])

    // If it's a URL, open it
    if (option.url) {
      if (option.url.startsWith("mailto:")) {
        window.location.href = option.url
      } else {
        window.open(option.url, "_blank")
      }
    }

    // If there's a next step, proceed after delay
    if (option.next) {
      setTimeout(() => {
        showBotMessage(chatData[option.next!])
      }, 1000)
    }
  }

  const resetChat = () => {
    setMessages([])
    setCurrentOptions([])
    setIsTyping(false)
    startConversation()
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={toggleChatbot}
          size="lg"
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 h-96 shadow-xl border-0">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Virtual Assistant</h3>
                  <p className="text-xs text-blue-100">Online now</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetChat}
                  className="text-white hover:bg-white/20 p-1 h-auto"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChatbot}
                  className="text-white hover:bg-white/20 p-1 h-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="p-0 h-80 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  {!message.isUser && (
                    <div className="w-8 h-8 rounded-full bg-white mr-2 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src="/images/wilbee-avatar.png"
                        alt="WilBee"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {currentOptions.length > 0 && (
                <div className="space-y-2">
                  {currentOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left justify-start text-xs h-auto py-2 px-3 hover:bg-blue-50"
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
