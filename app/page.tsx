"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

import {
  Search,
  Mail,
  Wifi,
  Monitor,
  Users,
  Phone,
  MessageCircle,
  Ticket,
  ArrowRight,
  LogIn,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SupportPortal() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
  if (searchQuery.trim()) {
    const siteSearchUrl = "https://tiji-faqs.vercel.app/search?q=";
    const query = encodeURIComponent(searchQuery.trim());
    const url = `${siteSearchUrl}${query}`;
    window.open(url, "_blank");
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Top Nav Bar *
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b">
        <h1 className="text-lg font-bold text-red-700">ML Support Portal</h1>
        <Link href="/admin/upload">
          <Button variant="outline" className="flex gap-2 items-center">
            <LogIn className="h-4 w-4" />
          </Button>
        </Link>
      </nav>
      /}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How can we help you today?</h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">Find answers, get support, and connect with our team</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 bg-white rounded-full p-2 shadow-lg">
              <Input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="border-0 focus-visible:ring-0 text-gray-900 text-lg"
              />
              <Button onClick={handleSearch} size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            icon={<Mail className="h-8 w-8" />}
            title="Email Support"
            description="Gmail setup, password reset, and email troubleshooting"
            href="/category/email-support"
            color="bg-green-500"
          />
          <CategoryCard
            icon={<Wifi className="h-8 w-8" />}
            title="Connectivity"
            description="Internet connection issues and network troubleshooting"
            href="/category/connectivity-support"
            color="bg-blue-500"
          />
          <CategoryCard
            icon={<Monitor className="h-8 w-8" />}
            title="Hardware & Peripherals"
            description="Computer hardware, printers, and device setup"
            href="/category/devices-support"
            color="bg-purple-500"
          />
          <CategoryCard
            icon={<Users className="h-8 w-8" />}
            title="Services"
            description="MLhuillier services, accounts, and general inquiries"
            href="/category/services-support"
            color="bg-orange-500"
          />
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Announcements</h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>System Updates & News</CardTitle>
              <CardDescription>Stay informed about the latest Advisories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
               {/* <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTjEohCUzWZ_GklytTccEHnMxQQL3z3g2k06sp1tAyQ_S-1-2qGAPZvAr9E0w3eTva7OHfwsmgFa5v9/embed?&autoplay=1&start=true&loop=true"
                  frameBorder="0"
                  width="912"
                  height="565"
                  allowFullScreen
                ></iframe>
            */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Need More Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            icon={<Phone className="h-8 w-8" />}
            title="Call Us"
            description="Speak directly with our support team"
            action="(032) 411 8898"
            href="tel:+63324118898"
            color="bg-green-500"
          />
          <ContactCard
            icon={<MessageCircle className="h-8 w-8" />}
            title="Email Support"
            description="Send us a detailed message"
            action="Send Email"
            href="mailto:support@mlhuillier.com"
            color="bg-blue-500"
          />
          <ContactCard
            icon={<Ticket className="h-8 w-8" />}
            title="Create Ticket"
            description="Submit a formal support request"
            action="Create Ticket"
            href="#"
            color="bg-purple-500"
          />
        </div>
      </section>
    </div>
  )
}

function CategoryCard({
  icon,
  title,
  description,
  href,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  color: string
}) {
  return (
    <Link href={href} passHref>
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
        <CardContent className="p-6 text-center">
          <div
            className={`${color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <span className="inline-flex items-center justify-center mt-4 text-blue-600 group-hover:text-blue-700 font-medium">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

function TopicCard({
  title,
  description,
  badge,
  href,
}: {
  title: string
  description: string
  badge?: string
  href: string
}) {
  return (
    <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
          {badge && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
          Read More <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  )
}

function ContactCard({
  icon,
  title,
  description,
  action,
  href,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  href: string
  color: string
}) {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className={`${color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Button asChild className="w-full">
          <a href={href}>{action}</a>
        </Button>
      </CardContent>
    </Card>
  )
}
