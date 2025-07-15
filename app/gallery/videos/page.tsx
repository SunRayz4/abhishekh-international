
"use client";

import { useState } from "react";

const filters = [
  "All",
  "School Inspection",
  "Teachers Day",
  "Ashadhi Ekadashi Celebration",
  "Independence Day",
  "National Sports Day",
  "Ganesh Utsav",
  "Yoga Day",
  "Admission Open",
  "Guru Purnima",
  "Video Editor Music",
];

const videoList = [
  { url: "https://www.youtube.com/embed/UOLS0IGKYsw", category: "School Inspection" },
  { url: "https://www.youtube.com/embed/61bDr9-E8Gk", category: "Teachers Day" },
  { url: "https://www.youtube.com/embed/JQQUeZPGygE", category: "Ashadhi Ekadashi Celebration" },
  { url: "https://www.youtube.com/embed/XodmgRlWYUA", category: "Independence Day" },
  { url: "https://www.youtube.com/embed/fSbYElgfE2U", category: "National Sports Day" },
  { url: "https://www.youtube.com/embed/Oqtl_3JRKcA", category: "Ganesh Utsav" },
  { url: "https://www.youtube.com/embed/zUXty2njAcs", category: "Yoga Day" },
  { url: "https://www.youtube.com/embed/KDjttNYCLOQ", category: "Admission Open" },
  { url: "https://www.youtube.com/embed/K4uKIXzlsqA", category: "Guru Purnima" },
  { url: "https://www.youtube.com/embed/ZZBmUprp29U", category: "Video Editor Music" },
];

export default function VideoGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVideos =
    activeFilter === "All"
      ? videoList
      : videoList.filter((video) => video.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#6a1b9a] mb-4 text-center">Video Gallery</h1>
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

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
            {filteredVideos.map((video, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={`Video ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 text-center text-[#6a1b9a] font-medium">
                  {video.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
