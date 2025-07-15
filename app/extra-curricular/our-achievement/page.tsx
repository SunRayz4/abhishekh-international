"use client"

import Image from "next/image"
import { useState } from "react"
import { SubNavHeader } from "@/components/sub-nav-header"

const extraCurricularNavItems = [
  { title: "Sports", href: "/extra-curricular/sports" },
  { title: "Arts & Culture", href: "/extra-curricular/arts" },
  { title: "Clubs", href: "/extra-curricular/clubs" },
  { title: "Events", href: "/extra-curricular/events" },
  { title: "Achievements", href: "/extra-curricular/achievements" },
]

const categories = [
  "All",
  "Achievement",
  "Cleanliness Award",
  "Cyclothon Rally",
  "Karate Championship",
]

const images = [
  "/images/Achive1.jpg",
  "/images/Achive2.jpg",
  "/images/Cleanliness.jpg",
  "/images/Cyclothon.jpg",
]

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      

      <div className="container mx-auto px-4 py-16 text-center" style={{marginTop: '-100px'}}>
       <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-800" style={{color:'#6a1b9a'}}>Achievements</h1>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
      </div>

        <p className="text-gray-800 max-w-4xl mb-10 text-lg font-medium " style={{marginLeft:'300px'}}>
          <span className="font-semibold text-[#6a1b9a] ">The icing on the cake</span> was to see students proving their
          merits in all the fields and bringing laurels to add to our pride in most of the events to Abhishek
          International School. Athletics Grand field Events and Kabaddi tournament, PCMC River Cyclothon, Karate, Kick
          boxing, Marathon, Yoga State Level Matches, SOF Exam - IEO/ NSO/ IMO/ NCO, Elementary Drawing Exam – 100%
          Result with flying colours. Zilla Parishad Matches – Basket ball/ Cricket/ Chess/ Carrom
        </p>

        <div className="grid md:grid-cols-[200px_1fr] gap-6">
          {/* Left Filters */}
          <div className="bg-[#f3e5f5] rounded-xl p-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 my-1 rounded-md font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#ab47bc] text-white"
                    : "bg-white text-[#6a1b9a] hover:bg-[#e1bee7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-md">
                <div className="relative w-full h-[250px]">
                  <Image
                    src={img}
                    alt={`Achievement ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
