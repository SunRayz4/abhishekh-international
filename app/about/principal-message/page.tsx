
// import Image from "next/image"
// import { SubNavHeader } from "@/components/sub-nav-header"

// const aboutNavItems = [
//   { title: "About Us", href: "/about" },
//   { title: "Vision & Mission", href: "/about/vision-mission" },
//   { title: "Management Members", href: "/about/management" },
//   { title: "Principal's Message", href: "/about/principal-message" },
//   { title: "Curriculum", href: "/about/curriculum" },
// ]

// export default function PrincipalMessagePage() {
//   return (
//     <div className=" font-serif">
//       <SubNavHeader title="About" items={aboutNavItems} />

//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a]">Principal's Message</h1>
//           <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10 mb-20">
//           {/* Left Sidebar */}
//           <div className="md:col-span-1">
//             <div className="sticky top-24">
//               <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl mb-6 border-4 border-[#ab47bc]">
//                 <Image
//                   src="/images/principal.jpeg"
//                   alt="Mrs. Sudha Bhat"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="text-center">
//                 <h2 className="text-xl font-bold text-[#6a1b9a]">Mrs. Sudha Bhat</h2>
//                 <p className="text-[#8e24aa]">Principal</p>
              
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="md:col-span-2 font-sans leading-relaxed text-gray-700">
//             <p className="text-xl italic text-[#6a1b9a] font-serif mb-8">
//               "Education is not the filling of a pail, but the lighting of a fire."
//             </p>

//             <p className="mb-4">Dear Parents and Students,</p>

         
            
//             {/* NEW: Principal's Vision */}
           
//               <p className="text-gray-800">
//                 My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged
//                 to reach their full potential—academically, socially, and emotionally. I believe in cultivating a culture of
//                 respect, collaboration, and high expectations among students, staff, and families. By promoting innovative teaching,
//                 lifelong learning, and community involvement, we aim to prepare our students to become confident, compassionate,
//                 and responsible global citizens.
//               </p>
        

//             <p className="mb-4">Warm regards,</p>
//             <p className="font-bold text-[#6a1b9a]">
//               Mrs. Sudha Bhat<br />
//               Principal
//             </p>
//           </div>
//         </div>


        
         
//       </div>
//     </div>
//   )
// }
import Image from "next/image";
import { SubNavHeader } from "@/components/sub-nav-header";

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
];

export default function PrincipalMessagePage() {
  return (
    <div className="font-serif bg-gradient-to-b from-[#f9f6fb] to-white min-h-screen">
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a]">
            Principal's <span className="text-[#ab47bc]">Message</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {/* Left Sidebar - Principal Profile */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src="/images/principal.jpeg"
                  alt="Mrs. Sudha Bhat"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-white text-xl font-bold">Mrs. Sudha Bhat</h2>
                  <p className="text-[#e1bee7]">Principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Message */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              {/* Quote */}
              <div className="mb-8 p-6 bg-[#f3e5f5] rounded-lg border-l-4 border-[#ab47bc]">
                <p className="text-xl italic text-[#6a1b9a]">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
              </div>

              {/* Message Content */}
              <div className="prose max-w-none text-gray-700 space-y-6">
                <p className="text-lg">
                  <span className="font-bold text-[#6a1b9a]">Dear Parents and Students,</span>
                </p>

                <p className="text-gray-800 leading-relaxed">
                  My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged
                  to reach their full potential—academically, socially, and emotionally. I believe in cultivating a culture of
                  respect, collaboration, and high expectations among students, staff, and families. By promoting innovative teaching,
                  lifelong learning, and community involvement, we aim to prepare our students to become confident, compassionate,
                  and responsible global citizens.
                </p>

                <div className="mt-8">
                  <p className="mb-2">Warm regards,</p>
                  <div className="border-t border-[#e1bee7] pt-4">
                    <p className="font-bold text-[#6a1b9a] text-lg">Mrs. Sudha Bhat</p>
                    <p className="text-[#ab47bc]">Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}