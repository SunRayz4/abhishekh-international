
// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const filters = [
//   "All",
//   "Play Ground",
//   "Class Activity",
//   "Karate Competition",
//   "District Level Matches",
//   "Throw Ball Competition",
//   "Dron Activity",
//   "Exibition",
//   "Fancy Dress Competition",
//   "Ganesh Idol Making",
//   "Mahapour Chashak",
//   "Oldage Home Visit",
//   "Picnic",
//   "Republic Day",
//   "Cyclothon Rally",
//   "Shloka Competition",
//   "Teachers Staff",
// ];

// const imageList = [
//    { src: "/gallery/IMG-20250729-WA0013.jpg", category: "Karate Competition" },
//   { src: "/gallery/IMG-20250730-WA0016.jpg", category: "District Level Matches" },
 

//   { src: "IMG-20250730-WA0017.jpg", category: "Picnic" },  
//   { src: "/gallery/IMG-20250730-WA0018.jpg", category: "Karate Competition" },
//   { src: "/gallery/IMG-20250730-WA0019.jpg", category: "District Level Matches" },
//   { src: "/gallery/IMG-20250730-WA0020.jpg", category: "Throw Ball Competition" },
//   { src: "/gallery/IMG-20250730-WA0022.jpg", category: "Fancy Dress Competition" },
//   { src: "/gallery/IMG-20250730-WA0023.jpg", category: "Republic Day" },
//   { src: "/gallery/IMG-20250730-WA0024.jpg", category: "Picnic" },
//   { src: "/gallery/IMG-20250730-WA0025.jpg", category: "Karate Competition" },
//   { src: "/gallery/IMG-20250730-WA0026.jpg", category: "District Level Matches" },
//   { src: "/gallery/IMG-20250730-WA0027.jpg", category: "Throw Ball Competition" },
//   { src: "/gallery/IMG-20250730-WA0028.jpg", category: "Fancy Dress Competition" },
//   { src: "/gallery/IMG-20250730-WA0029.jpg", category: "Republic Day" },
//   // { src: "/gallery/IMG-20250730-WA0030.jpg", category: "Picnic" },
//   { src: "/gallery/IMG-20250730-WA0031.jpg", category: "Karate Competition" },
//   { src: "/gallery/IMG-20250730-WA0032.jpg", category : "District Level Matches" },
//   { src: "/gallery/IMG-20250730-WA0033.jpg", category: "Throw Ball Competition" },
//   { src: "/gallery/a7.jpg", category: "Fancy Dress Competition" },
//   { src: "/gallery/a8.jpg", category: "Republic Day" },
//   { src: "/gallery/ache1.jpg", category: "Picnic" },
//   { src: "/gallery/ache2.jpg", category: "Karate Competition" },
//   { src: "/gallery/1stPrize.jpg", category: "Play Ground" },
//   { src: "/gallery/a1 (1).jpg", category: "Play Ground" },
//   { src: "/gallery/a1.jpg", category: "Class Activity" },
//   { src: "/gallery/a3.jpg", category: "Class Activity" },
//   { src: "/gallery/a11.jpg", category: "Karate Competition" },
//   { src: "/gallery/a11 (1).jpg", category: "District Level Matches" },

//   { src: "/gallery/a14.jpg", category: "Fancy Dress Competition" },
//   { src: "/gallery/dron2.png", category: "Republic Day" },
//   { src: "/gallery/dron3.jpg", category: "Picnic" },
//    { src: "/gallery/matches1.jpg", category: "Karate Competition" },
//   { src: "/gallery/matches2.jpg", category: "District Level Matches" },
//   { src: "/gallery/matches3.jpg", category: "Throw Ball Competition" },
//   { src: "/gallery/matches4.jpg", category: "Fancy Dress Competition" },
//   { src: "/gallery/matches5.jpg", category: "Republic Day" },
//   { src: "/gallery/ThrowBall.jpg", category: "Picnic" },
 

// ];

// export default function GalleryPage() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filteredImages =
//     activeFilter === "All"
//       ? imageList
//       : imageList.filter((img) => img.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl font-bold text-[#800000] mb-4 text-center">Gallery</h1>
//         <div className="h-1 w-24 bg-[#800000] mx-auto rounded-full mb-10"></div>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar Filters */}
//           {/* <div className="md:w-64 w-full flex-shrink-0">
          
//           </div> */}

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
//             {filteredImages.map((img, idx) => (
//               <div
//   key={idx}
//   className="relative h-[220px] w-full rounded-xl overflow-hidden shadow-md group"
// >
//   <Image
//     src={img.src}
//     alt={`Gallery ${idx + 1}`}
//     fill
//     className="object-cover group-hover:scale-105 transition-transform duration-300"
//   />
//   {/* <div className="absolute bottom-2 right-2 bg-white/80 text-sm text-[#800000] font-semibold px-3 py-1 rounded-md shadow">
//     {img.category}
//   </div> */}
// </div>

//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import Image from "next/image";
import { useState } from "react";

/* ================= EXISTING LOCAL IMAGES ================= */
const imageList = [
  { src: "/gallery/IMG-20250729-WA0013.jpg" },
  { src: "/gallery/IMG-20250730-WA0017.jpg" },
  { src: "/gallery/IMG-20250730-WA0018.jpg" },
  { src: "/gallery/IMG-20250730-WA0019.jpg" },
  { src: "/gallery/IMG-20250730-WA0020.jpg" },
  { src: "/gallery/IMG-20250730-WA0022.jpg" },
  { src: "/gallery/IMG-20250730-WA0023.jpg" },
  { src: "/gallery/IMG-20250730-WA0024.jpg" },
  { src: "/gallery/IMG-20250730-WA0025.jpg" },
  { src: "/gallery/IMG-20250730-WA0026.jpg" },
  { src: "/gallery/IMG-20250730-WA0027.jpg" },
  { src: "/gallery/IMG-20250730-WA0028.jpg" },
  { src: "/gallery/IMG-20250730-WA0029.jpg" },
  { src: "/gallery/IMG-20250730-WA0031.jpg" },
  { src: "/gallery/IMG-20250730-WA0032.jpg" },
  { src: "/gallery/IMG-20250730-WA0033.jpg" },
  { src: "/gallery/a7.jpg" },
  { src: "/gallery/a8.jpg" },
  { src: "/gallery/ache1.jpg" },
  { src: "/gallery/ache2.jpg" },
  { src: "/gallery/1stPrize.jpg" },
  { src: "/gallery/a1 (1).jpg" },
  { src: "/gallery/a3.jpg" },
  { src: "/gallery/a11.jpg" },
  { src: "/gallery/a14.jpg" },
  { src: "/gallery/matches4.jpg" },
  { src: "/gallery/matches5.jpg" },
  { src: "/gallery/ThrowBall.jpg" },
];

/* ================= TOP FILTER TYPES ================= */
type TopFilterKey =
  | "PrePrimary"
  | "Robotics"
  | "Commando Training"
  | "Avinya- Multi themed Exhibition"
  // | "Cultural Odyssey"
  // | "Annual Concert"
  // | "Sports and Fitness"
  // | "Enrichment Programmes"
  // | "National Festivals";

/* ================= API FOLDER MAP ================= */
const topFilters: Record<TopFilterKey, string> = {
  "PrePrimary": "PrePrimary",
  Robotics: "Robotics",
  "Commando Training": "CommandoTraining",
  "Avinya- Multi themed Exhibition": "Avinya",
  // "Cultural Odyssey": "CulturalOdyssey",
  // "Annual Concert": "AnnualConcert",
  // "Sports and Fitness": "SportsAndFitness",
  // "Enrichment Programmes": "EnrichmentProgrammes",
  // "National Festivals": "NationalFestivals",
};

/* ================= IMAGE COUNTS PER FOLDER ================= */
const folderImageCounts: Record<TopFilterKey, number> = {
  "PrePrimary": 12,
  Robotics: 15,
  "Commando Training": 5,
  "Avinya- Multi themed Exhibition": 20,
  // "Cultural Odyssey": 18,
  // "Annual Concert": 8,
  // "Sports and Fitness": 10,
  // "Enrichment Programmes": 6,
  // "National Festivals": 12,
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | TopFilterKey>("All");

  /* ================= DEFAULT API (ALL) ================= */
  const galleryApiImages = Array.from({ length: 47 }, (_, i) => ({
    src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/Photogallery/gallery1/${i + 1}.JPG`,
  }));

  /* ================= FILTER LOGIC ================= */
  let filteredImages: { src: string }[] = [];

  if (activeFilter === "All") {
    filteredImages = [...galleryApiImages, ...imageList];
  } else {
    const count = folderImageCounts[activeFilter]; // fetch actual folder count
    filteredImages = Array.from({ length: count }, (_, i) => ({
      src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/Photogallery/${
        topFilters[activeFilter]
      }/${i + 1}.jpg`,
    }));
  }

  /* ================= FILTER ORDER ================= */
  const topFilterOrder: TopFilterKey[] = [
    "PrePrimary",
    "Robotics",
    "Commando Training",
    "Avinya- Multi themed Exhibition",
    // "Cultural Odyssey",
    // "Annual Concert",
    // "Sports and Fitness",
    // "Enrichment Programmes",
    // "National Festivals",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#800000] mb-4 text-center">
          Gallery
        </h1>
        <div className="h-1 w-24 bg-[#800000] mx-auto rounded-full mb-8"></div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {/* <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeFilter === "All"
                  ? "bg-[#800000] text-white shadow-md"
                  : "bg-white border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
              }`}
          >
            All
          </button> */}

          {topFilterOrder.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                ${
                  activeFilter === filter
                    ? "bg-[#800000] text-white shadow-md"
                    : "bg-white border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No images available.
          </p>
        )}
      </div>
    </div>
  );
}

