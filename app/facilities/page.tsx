
// "use client";

// import { motion } from 'framer-motion';
// import {
//   Monitor,
//   Book,
//   Bus,
//   Trophy,
//   School,
//   AlertCircle,
//   ArrowRight
// } from 'lucide-react';
// import Image from 'next/image';

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// const facilities = [
//   {
//     title: "Classrooms & Learning Spaces",
//     icon: <School className="text-purple-600 w-6 h-6" />,
//     description: "Spacious classrooms equipped with the latest multimedia hardware and software to make the learning process interesting and valuable.",
//     features: [
//       "Interactive smart boards",
//       "Ergonomic furniture",
//       "Optimal lighting and ventilation",
//       "Digital learning tools"
//     ],
//     image: "/classroom.jpg",
//     color: "bg-purple-50"
//   },
//   {
//     title: "Computer Lab",
//     icon: <Monitor className="text-purple-600 w-6 h-6" />,
//     description: "Our computer lab with adequate PCs has all required software installed to facilitate the teaching-learning process in this digital age.",
//     features: [
//       "Modern workstations",
//       "High-speed internet",
//       "Educational software suite",
//       "Supervised access"
//     ],
//     image: "/computer-lab.jpg",
//     color: "bg-pink-50"
//   },
//   {
//     title: "Library",
//     icon: <Book className="text-purple-600 w-6 h-6" />,
//     description: "A well-equipped library to widen students' horizons with diverse reading materials and research resources.",
//     features: [
//       "Extensive book collection",
//       "Digital resources",
//       "Quiet study areas",
//       "Reading programs"
//     ],
//     image: "/library.jpg",
//     color: "bg-rose-50"
//   },
//   {
//     title: "Sports Facilities",
//     icon: <Trophy className="text-purple-600 w-6 h-6" />,
//     description: "State-of-the-art playground and sports equipment for both traditional and modern athletic activities.",
//     features: [
//       "Professional coaching",
//       "Multiple sports options",
//       "Safety-certified equipment",
//       "Inter-school competitions"
//     ],
//     image: "/sports.jpg",
//     color: "bg-fuchsia-50"
//   }
// ];

// const transportRules = [
//   "Students should reach the bus stop 5 minutes before boarding time",
//   "Orderly boarding without pushing or shoving",
//   "No extending hands or heads outside windows",
//   "Maintain discipline and use appropriate language",
//   "Wait at bus stop after disembarking and cross roads carefully",
//   "Damage to school buses will result in fines",
//   "Parents must escort children to/from bus stops",
//   "No mid-year withdrawal of transport service",
//   "Transport fees are separate from tuition and non-refundable"
// ];

// export default function FacilitiesPage() {
//   return (
//     <div className="bg-gradient-to-b from-purple-50 to-white font-serif min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Hero Section */}
//         <motion.div 
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">World-Class Facilities</span>
//           </h1>
//           <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Designed to inspire learning, creativity, and holistic development through exceptional infrastructure and resources.
//           </p>
//         </motion.div>

//         {/* Facilities Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-20">
//           {facilities.map((facility, index) => (
//             <motion.div
//               key={facility.title}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               variants={fadeIn}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full border border-gray-100 hover:shadow-lg transition-all duration-300 group">
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image 
//                     src={facility.image}
//                     alt={facility.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <h2 className="text-2xl font-bold text-white drop-shadow-lg">{facility.title}</h2>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className={`${facility.color} p-3 rounded-lg mr-4`}>
//                       {facility.icon}
//                     </div>
//                     <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
//                   </div>
//                   <ul className="space-y-2 mb-6">
//                     {facility.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         <span className="text-purple-500 mr-2 mt-1">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                           </svg>
//                         </span>
//                         <span className="text-gray-700 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
//                     View gallery
//                     <ArrowRight className="ml-2 w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Remaining parts like Transport section and CTA remain unchanged */}
//                 {/* Transport Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100"
//         >
//           <div className="md:flex">
//             <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white relative overflow-hidden">
//               <div className="absolute inset-0 bg-[url('/bus-pattern.svg')] bg-[length:200px] opacity-10"></div>
//               <div className="relative z-10">
//                 <div className="flex items-center mb-4">
//                   <Bus className="w-8 h-8 mr-3" />
//                   <h2 className="text-2xl font-bold">School Transport</h2>
//                 </div>
//                 <p className="mb-6">
//                   Safe and reliable transportation services covering a 10km radius around the school with GPS tracking and trained staff.
//                 </p>
//                 <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
//                   <h3 className="font-bold mb-2 flex items-center">
//                     <AlertCircle className="mr-2 w-5 h-5" />
//                     Important Notes
//                   </h3>
//                   <ul className="text-sm space-y-2">
//                     <li>• School acts as coordinator between parents and contractors</li>
//                     <li>• Services subject to seat availability</li>
//                     <li>• No route changes for individual convenience</li>
//                     <li>• Parents cannot travel in buses</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-3/5 p-8">
//               <div className="flex items-start mb-6">
//                 <div className="bg-indigo-100 p-2 rounded-lg mr-4">
//                   <Bus className="text-indigo-600 w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">Bus Rules & Guidelines</h3>
//                   <p className="text-gray-600">For the safety and comfort of all students</p>
//                 </div>
//               </div>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {transportRules.map((rule, index) => (
//                   <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
//                     <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </span>
//                     <span className="text-gray-700 text-sm">{rule}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex items-start">
//                 <AlertCircle className="text-indigo-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
//                 <p className="text-sm text-gray-700">
//                   <strong className="text-indigo-700">Note:</strong> Bus facility may be withdrawn if contractors don't comply with Supreme Court safety guidelines. All buses are equipped with first-aid kits and speed governors.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="relative overflow-hidden rounded-xl mb-12"
//         >
//           <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px] opacity-5"></div>
//           <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white">
//             <div className="max-w-2xl mx-auto">
//               <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Our Facilities Firsthand</h2>
//               <p className="mb-6 text-indigo-100">
//                 Schedule a campus tour to see how our world-class facilities can benefit your child's education and development.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center">
//                   Book a Campus Tour
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </button>
//                 <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center justify-center">
//                   Virtual Tour
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Trophy,
 
  Bus,
  Video,
 
  Book
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const facilities = [
 
  // {
  //   title: "Computer Lab",
  //   icon: <Monitor className="text-[#800000] w-6 h-6" />,
  //   description:
  //     "The age of technology is upon us and it is becoming increasingly difficult for someone to function without the knowledge of computers. Our Computer lab with adequate number of PCs has all the required software installed which in turn facilitates the teaching-learning process.",
  //   image: "/images/Computer-lab1.jpg",
  //   color: "bg-pink-50"
  // },
  {
    title: "Sports",
    icon: <Trophy className="text-[#800000] w-6 h-6" />,
    description:
      "Our school has a state-of-the-art playground where new age as well as traditional sports are played.",
    image: "/images/Sports.png",
    color: "bg-rose-50"
  },
  {
    title: "Library",
    icon: <Book className="text-[#800000] w-6 h-6" />,
    description:
      "A well-equipped library to widen students' horizons with diverse reading materials and research resources.",
      image: "/images/library.jpg",
    color: "bg-purple-50"
    
  },
   {
    title: "CCTV",
    icon: <Video className="text-[#800000] w-6 h-6" />,
    description: "CCTV Facility Available Inside School Building.",
    image: "/images/CCTV.png",
    color: "bg-indigo-50"
  },
  {
    title: "Computer Lab",
    icon: <Monitor className="text-[#800000] w-6 h-6" />,
    description:
      "The age of technology is upon us and it is becoming increasingly difficult for someone to function without the knowledge of computers. Our Computer lab with adequate number of PCs has all the required software installed which in turn facilitates the teaching-learning process.",   
      image: "/images/Computer-lab2.jpg",
  },
  {
  title: "Mathematics Lab",
  icon: <Monitor className="text-[#800000] w-6 h-6" />,
  description:
    "Our Mathematics lab provides a hands-on learning experience, allowing students to explore and understand complex concepts through practical experiments and activities. It's an ideal space for students to develop problem-solving skills and build a strong foundation in mathematics.",
  image: "/images/Math.jpg",
  color: "bg-yellow-50"
},
{
  title: "Composite Science Lab",
  icon: <Monitor className="text-[#800000] w-6 h-6" />,
  description:
    "Our Composite Science lab is a well-equipped facility that fosters curiosity and experimentation, enabling students to explore concepts in Physics, Chemistry, and Biology through hands-on activities. It provides a comprehensive learning experience, bridging theoretical knowledge with practical application.",
  image: "/images/science.jpg", 
  color: "bg-green-50"
  },
  {
    title: "Smart Classrooms",
    icon: <Monitor className="text-[#800000] w-6 h-6" />,
    description:
    "Our smart board classroom is equipped with interactive technology, enabling engaging and immersive learning experiences for students. The smart board facilitates dynamic lessons, presentations, and discussions, making complex concepts more accessible and fun to learn.",
    image: "/images/SmartClassroom.jpg",
    color: "bg-blue-50"


  }

];

// const transportRules = [
//   "Students should reach the bus stop 5 minutes before the boarding time.",
//   "At the bus, they must get into the bus in an orderly manner.",
//   "They should not put their hands or heads outside.",
//   "They should be well disciplined, good mannered and should not use any indecent words.",
//   "They should wait at the bus stop after getting off and should cross the road with proper attention.",
//   "Any damage made to the school bus will be fined.",
//   "To facilitate easy movement of students to and from school, the school acts 'only' as a coordinator between parents and the Bus Contractors. The bus service covers a radius of ten kilometres around the school. Bus services are optional and will be available to the wards of only those parents who will furnish the undertaking as prescribed by the school and available with the school transport in-charge.",
//   "Students can avail the school transport arrangements subject to the availability of seats. The school does not entertain any request for change in bus-routes to suit an individual’s convenience. Change of bus stop for a day or a week is not entertained.",
//   "Parents are not allowed to travel in the bus under any circumstances. Parents are requested to see the children are escorted to and from the bus.",
//   "Students who come on their own must report to school by 8:30 am.",
//   "Bus services to be availed for one academic year without withdrawal in between.",
//   "Transport fees are not included in School Fees. Transport Fees is non-refundable.",
//   "Bus facility can be withdrawn unless the bus contractor complies with the safety guidelines laid down by the Honorable Supreme Court of India."
// ];

export default function FacilitiesPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white font-serif min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-[#800000] 0 text-transparent bg-clip-text">Facilities</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#800000] to-pink-500 rounded-full mx-auto mb-6"></div>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={facility.image}
                    alt={facility.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">{facility.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${facility.color} p-3 rounded-lg mr-4`}>
                      {facility.icon}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transport Rules */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Bus className="w-6 h-6 text-[#800000] mr-2" />
              Transport - School Bus Rules
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
              {transportRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}