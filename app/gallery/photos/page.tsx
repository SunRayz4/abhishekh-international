
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
   { src: "/gallery/IMG-20250729-WA0013.jpg", category: "Karate Competition" },
  { src: "/gallery/IMG-20250730-WA0016.jpg", category: "District Level Matches" },
 

  { src: "IMG-20250730-WA0017.jpg", category: "Picnic" },  
  { src: "/gallery/IMG-20250730-WA0018.jpg", category: "Karate Competition" },
  { src: "/gallery/IMG-20250730-WA0019.jpg", category: "District Level Matches" },
  { src: "/gallery/IMG-20250730-WA0020.jpg", category: "Throw Ball Competition" },
  { src: "/gallery/IMG-20250730-WA0022.jpg", category: "Fancy Dress Competition" },
  { src: "/gallery/IMG-20250730-WA0023.jpg", category: "Republic Day" },
  { src: "/gallery/IMG-20250730-WA0024.jpg", category: "Picnic" },
  { src: "/gallery/IMG-20250730-WA0025.jpg", category: "Karate Competition" },
  { src: "/gallery/IMG-20250730-WA0026.jpg", category: "District Level Matches" },
  { src: "/gallery/IMG-20250730-WA0027.jpg", category: "Throw Ball Competition" },
  { src: "/gallery/IMG-20250730-WA0028.jpg", category: "Fancy Dress Competition" },
  { src: "/gallery/IMG-20250730-WA0029.jpg", category: "Republic Day" },
  // { src: "/gallery/IMG-20250730-WA0030.jpg", category: "Picnic" },
  { src: "/gallery/IMG-20250730-WA0031.jpg", category: "Karate Competition" },
  { src: "/gallery/IMG-20250730-WA0032.jpg", category : "District Level Matches" },
  { src: "/gallery/IMG-20250730-WA0033.jpg", category: "Throw Ball Competition" },
  { src: "/gallery/a7.jpg", category: "Fancy Dress Competition" },
  { src: "/gallery/a8.jpg", category: "Republic Day" },
  { src: "/gallery/ache1.jpg", category: "Picnic" },
  { src: "/gallery/ache2.jpg", category: "Karate Competition" },
  { src: "/gallery/1stPrize.jpg", category: "Play Ground" },
  { src: "/gallery/a1 (1).jpg", category: "Play Ground" },
  { src: "/gallery/a1.jpg", category: "Class Activity" },
  { src: "/gallery/a3.jpg", category: "Class Activity" },
  { src: "/gallery/a11.jpg", category: "Karate Competition" },
  { src: "/gallery/a11 (1).jpg", category: "District Level Matches" },

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

  // Create new images inside the component to avoid breaking the default export
  const newImages = Array.from({ length: 47 }, (_, i) => ({
    src: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/Photogallery/gallery1/${i + 1}.JPG`,
    category: "All", // default category
  }));

  // Combine old and new images
  const combinedImages = [...imageList, ...newImages];

  const filteredImages =
    activeFilter === "All"
      ? combinedImages
      : combinedImages.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#800000] mb-4 text-center">Gallery</h1>
        <div className="h-1 w-24 bg-[#800000] mx-auto rounded-full mb-10"></div>

        <div className="flex flex-col md:flex-row gap-8">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
