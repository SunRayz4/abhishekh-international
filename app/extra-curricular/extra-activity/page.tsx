"use client"

import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"
import { useState } from "react"
import Link from "next/link"

const extraCurricularNavItems = [
  { title: "Sports", href: "/extra-curricular/sports" },
  { title: "Arts & Culture", href: "/extra-curricular/arts" },
  { title: "Clubs", href: "/extra-curricular/clubs" },
  { title: "Events", href: "/extra-curricular/events" },
]

const filters = [
  "All",
  "World Animal Welfare Day Celebration",
  "Eco Friendly Ganesha",
  "Preserving Classical Culture of India",
  "Janmashtami Celebration",
  "Independence Day Celebration",
  "Subject Enrichment Activities",
  "Imbibing Good Habits",
  "Meditation for Healthy Minds",
]

const imageList = [
  { src: "/images/p1.jpeg", category: "World Animal Welfare Day Celebration" },
  { src: "/images/p2.jpeg", category: "Eco Friendly Ganesha" },
  { src: "/images/p3.jpeg", category: "Janmashtami Celebration" },
  { src: "/images/p6.jpeg", category: "Preserving Classical Culture of India" },
  { src: "/images/p7.jpeg", category: "Subject Enrichment Activities" },
  { src: "/images/p8.jpeg", category: "Imbibing Good Habits" },
  { src: "/images/p9.jpeg", category: "Independence Day Celebration" },
  { src: "/images/vf cxzxxzuytrewq.jpeg", category: "Meditation for Healthy Minds" },
]

export default function ExtraActivityPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredImages = activeFilter === "All"
    ? imageList
    : imageList.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
     


      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="text-[#800000] text-lg font-semibold flex items-center gap-2 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7M5 12h14"
            />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-[#800000] mb-4 text-center">Extra Activity</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-[#800000] to-[#800000] mx-auto rounded-full mb-10"></div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="md:w-64 w-full flex-shrink-0">
            <div className="space-y-2">
              {filters.map((filter, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(filter)}
                  className={`w-full text-left px-4 py-2 rounded-md border ${
                    activeFilter === filter
                      ? "bg-[#d1c4e9] text-[#800000] font-semibold"
                      : "bg-white hover:bg-[#f3e5f5] text-[#800000]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-[220px] w-full rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={`Extra Activity ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
