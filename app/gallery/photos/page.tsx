
"use client";

import Image from "next/image";
import { useState } from "react";

const filters = [
  "All",
  "Play Ground",
  "Class Activity",
  "Karate Competition",
  "District Level Matches",
  "Throw Ball Competition",
  "Dron Activity",
  "Exibition",
  "Fancy Dress Competition",
  "Ganesh Idol Making",
  "Mahapour Chashak",
  "Oldage Home Visit",
  "Picnic",
  "Republic Day",
  "Cyclothon Rally",
  "Shloka Competition",
  "Teachers Staff",
];

const imageList = [
  { src: "/gallery/1stPrize.jpg", category: "Play Ground" },
  { src: "/gallery/a1 (1).jpg", category: "Play Ground" },
  { src: "/gallery/a1.jpg", category: "Class Activity" },
  { src: "/gallery/a3.jpg", category: "Class Activity" },
  { src: "/gallery/a11.jpg", category: "Karate Competition" },
  { src: "/gallery/a11 (1).jpg", category: "District Level Matches" },
  { src: "/gallery/a14 (1).jpg", category: "Throw Ball Competition" },
  { src: "/gallery/a14.jpg", category: "Fancy Dress Competition" },
  { src: "/gallery/dron2.png", category: "Republic Day" },
  { src: "/gallery/dron3.jpg", category: "Picnic" },
   { src: "/gallery/matches1.jpg", category: "Karate Competition" },
  { src: "/gallery/matches2.jpg", category: "District Level Matches" },
  { src: "/gallery/matches3.jpg", category: "Throw Ball Competition" },
  { src: "/gallery/matches4.jpg", category: "Fancy Dress Competition" },
  { src: "/gallery/matches5.jpg", category: "Republic Day" },
  { src: "/gallery/ThrowBall.jpg", category: "Picnic" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
    activeFilter === "All"
      ? imageList
      : imageList.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#6a1b9a] mb-4 text-center">Gallery</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-10"></div>

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
                      ? "bg-[#d1c4e9] text-[#6a1b9a] font-semibold"
                      : "bg-white hover:bg-[#f3e5f5] text-gray-800"
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
  className="relative h-[220px] w-full rounded-xl overflow-hidden shadow-md group"
>
  <Image
    src={img.src}
    alt={`Gallery ${idx + 1}`}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute bottom-2 right-2 bg-white/80 text-sm text-[#6a1b9a] font-semibold px-3 py-1 rounded-md shadow">
    {img.category}
  </div>
</div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}