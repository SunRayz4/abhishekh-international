
// "use client"

// import { WelcomeSection } from "@/components/welcome-section"

// import { Award, BookOpen, GraduationCap, Users, Lightbulb, Dumbbell } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// import { SocialSidebar } from "@/components/social-sidebar"
// import { Chatbot } from "@/components/chatbot"
// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card";

// import React from "react"
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import Image from "next/image"
// import { useEffect, useRef } from "react"
// import { useState } from "react"




// const images = [
//   "/hero-section/IMG-20250729-WA0005.jpg",
//   "/hero-section/IMG-20250729-WA0006.jpg",
//   "/hero-section/IMG-20250729-WA0007.jpg",
//   "/hero-section/IMG-20250729-WA0008.jpg",
//   "/hero-section/IMG-20250729-WA0009.jpg",
//   "/hero-section/IMG-20250729-WA0010.jpg",



//   // Add more paths as needed
// ]

// const features = [
//   {
//     icon: BookOpen,
//     title: "Academic Excellence",
//     description: "Our curriculum is designed to foster critical thinking, creativity, and a love for learning.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Qualified Faculty",
//     description: "Learn from experienced educators who are passionate about teaching and student development.",
//   },
//   {
//     icon: Dumbbell,
//     title: "Sports & Recreation",
//     description: "State-of-the-art sports facilities to encourage physical fitness and team spirit.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation Hub",
//     description: "Modern labs and innovation centers to nurture creativity and scientific temperament.",
//   },
//   {
//     icon: Users,
//     title: "Community Engagement",
//     description: "Regular community service activities to instill social responsibility in students.",
//   },
//   {
//     icon: Award,
//     title: "Recognition & Awards",
//     description: "Our students consistently achieve excellence in academics, sports, and cultural activities.",
//   },
// ]

// export default function Home() {
// const sliderRef = useRef(null)
//   const [current, setCurrent] = useState(0)
//   const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//       slides: { perView: 1 },
//       drag: false,
//     },
//     []
//   )

   
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length)
//     }, 5000) // rotate every 5 seconds

//     return () => clearInterval(interval)
//   }, [])


  
//   const testimonials = [
//      {
//         quote:
//           "I'm thoroughly impressed with the school's academic and extracurricular offerings, which provide in-depth knowledge and clarity on various subjects. The teachers excel at building a strong foundation and addressing students' doubts, making it an excellent choice for my daughters' education. I'm delighted with their progress and highly recommend this school.",
//         author: "Mrs. Snehal Lokhande",
//         role: "Parent of Hindavi and Shivannya Lokhande",
//         image: "/testimonials/Mrs. Snehal Lokhande.jpg", // Replace with actual paths
//       },
//       {
//         quote:
//           "We're pleased with the school's exceptional teaching quality, which has enabled our child to learn and grow effectively. The school's emphasis on co-curricular activities has also been instrumental in fostering our child's overall development, making it a truly well-rounded educational experience.",
//         author: "Mrs. Geeta Patel",
//         role: "Parent of Diksha Patel",
//         image: "/testimonials/Mrs. Geeta Patel.jpg",
//       },
//       {
//         quote:
//            "Top-notch school amenities, including a playground, library, and digital boards, complemented by a supportive and cooperative staff, make for an ideal learning environment.",
//         author: "Mrs. Vaishali Ughade",
//         role: "Parent of Sarvadnya Ughade",
//         image: "/testimonials/Mrs. Vaishali Ughade.jpg",
//       },
//       {
//         quote:
//          "We appreciate the school's effective teaching approach and the strong bond between teachers and students. The school also does a great job of organizing extracurricular activities and celebrating festivals, making learning a fun and engaging experience.",
//         author: "Mr. and Mrs. Hajare",
//         role: "Parent of Shivansh Hajare",
//         image: "/testimonials/Mr. and Mrs. Hajare .jpg",
//       },
//   ]


//   const prevTestimonial = () =>
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   const nextTestimonial = () =>
//     setCurrent((prev) => (prev + 1) % testimonials.length)

//   const testimonial = testimonials[current]

//   return (
//     <div className="flex flex-col font-serif">
//       <SocialSidebar />
//       <Chatbot />

//   <section className="relative w-full min-h-[80vh] overflow-hidden">
//       <div ref={sliderInstanceRef} className="keen-slider h-[80vh]">
//         {images.map((src, idx) => (
//           <div key={idx} className="keen-slider__slide relative h-[80vh]">
//             <Image
//               src={src}
//               alt={`Slide ${idx + 1}`}
//               layout="fill"
//               objectFit="cover"
//               priority={idx === 0}
//             />
//             <div className="absolute inset-0 bg-black/60 z-10" />

//             <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-white text-center max-w-3xl"
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
//                   Welcome to Abhishek International School
//                 </h1>
//                 <p className="text-xl md:text-2xl mb-6 drop-shadow">
//                   Nurturing young minds to become future leaders through quality education and holistic development.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4">
//                   <Button
//                     asChild
//                     size="lg"
//                     className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                     style={{ backgroundColor: "#800000" }}
//                   >
//                      <Link href="https://abhishekmoshi.sunrayztechnology.com/OnlineEnquiry.aspx">Apply Now</Link>
//                   </Button>

//                   {/* <Button
//                     asChild
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-black hover:bg-white hover:text-[#800000] px-6 py-3 rounded-lg transition-all duration-300"
//                   >
//                     <Link href="/about">Learn More</Link>
//                   </Button> */}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>


//       <WelcomeSection />

      
// {/* Why Choose Us Section */}
// <section className="py-16 ">
//   <div className="container mx-auto px-4">
//     <div className="mb-12 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
       
//         <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800">
//           Why Choose <span className="text-[#800000]">Abhishek International School ?</span>
//         </h2>
//         <div className="mb-6 h-1 w-24 bg-[#800000] mx-auto"></div>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600">
//           Discover what makes us the preferred choice for parents who value holistic education and excellence
//         </p>
//       </motion.div>
//     </div>

//     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {features.map((feature, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -10 }}
//           className="relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#800000] opacity-10"></div>
          
//           <div className="p-6 relative z-10">
//             <div className="flex items-start mb-4">
//               <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f3e5f5] text-[#800000] mr-4">
//                 <feature.icon className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
//             </div>
            
//             <p className="text-gray-600">{feature.description}</p>
            
//             <div className="mt-6 pt-4 border-t border-gray-100">
//               <div className="flex flex-wrap gap-2">
//                 {Array(5).fill(0).map((_, i) => (
//                   <div 
//                     key={i}
//                     className="w-2 h-2 rounded-full bg-[#800000]"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>

    
 

      
      
      
//      <div className="container mx-auto px-4 py-16">
//    <div className="px-4 py-16 text-center bg-white">
//       <h2 className="text-3xl font-bold text-[#800000] mb-2">What Parents Say</h2>
//       <div className="h-1 w-24 bg-[#800000] mx-auto mb-8 rounded-full" />
//       <p className="text-gray-700 mb-10 max-w-xl mx-auto">
//         Hear from our school community about their experiences
//       </p>

//       <Card className="max-w-2xl mx-auto shadow-lg border-0 transition-all duration-500">
//         <CardContent className="p-8">
//           <div className="flex flex-col items-center text-center">
//              <Image
//     src={testimonial.image}
//     alt={testimonial.author}
//     width={120}
//     height={120}
//     className="rounded-full object-cover border-4 border-[#800000] mb-6"
//   />
            
//             <svg
//               className="text-[#800000] mb-4"
//               xmlns="http://www.w3.org/2000/svg"
//               width="32"
//               height="32"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//             </svg>
//             <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
//             <p className="font-bold text-[#800000]">{testimonial.author}</p>
//             <p className="text-sm text-gray-600">{testimonial.role}</p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Circle Indicators */}
//       <div className="flex justify-center gap-3 mt-6">
//         {testimonials.map((_, index) => (
//           <div
//             key={index}
//             className={`h-3 w-3 rounded-full transition-all duration-300 ${
//               current === index
//                 ? "bg-[#800000] scale-125"
//                 : "bg-gray-300 opacity-70"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
// </div>

//   </div>
// </section>
//       {/* CTA Section */}
//       <section className="py-16 bg-[#800000] text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="mb-6 text-3xl font-bold sm:text-3xl">Ready to Join Our School?</h2>
//             <p className="mx-auto mb-8 max-w-2xl text-lg">
//               Take the first step towards providing your child with a quality education that focuses on holistic
//               development.
//             </p>
            
          
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button asChild size="lg" className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-[#800000">
//                   <Link href="/admission">Apply for Admission</Link>
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button asChild size="lg" variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#f3e5f5] px-6 py-3 rounded-lg transition-all duration-300">
//                   <Link href="/contact">Contact Us</Link>
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Latest News & Events */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
            
             
//         <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800">
//           Latest News <span className="text-[#800000]">& Events</span>
//         </h2>
            
//             <div className="mb-6 h-1 w-24 bg-[#800000] mx-auto"></div>
//           </div>

//           <div className="grid gap-6 md:grid-cols-3">
//             {[1, 2, 3].map((item, index) => (
//               <motion.div
//                 key={item}
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
//               >
//                 <div className="mb-4 text-sm font-medium text-[#800000]">April {item + 10}, 2023</div>
//                 <h3 className="mb-2 text-xl font-bold text-gray-900">Annual Sports Day Celebration</h3>
//                 <p className="mb-4 text-gray-600">
//                   Our school celebrated its Annual Sports Day with great enthusiasm. Students participated in various
//                   sports activities.
//                 </p>
//                 <Link href="#" className="text-[#800000] hover:text-[#4a148c] font-medium">
//                   Read More →
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-10 text-center">
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button asChild variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#f3e5f5]">
//                 <Link href="/extra-curricular/events">View All Events</Link>
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




"use client"

import { WelcomeSection } from "@/components/welcome-section"
import { Award, BookOpen, GraduationCap, Users, Lightbulb, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SocialSidebar } from "@/components/social-sidebar"
import { Chatbot } from "@/components/chatbot"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import React, { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

const images = [
  "/hero-section/IMG-20250729-WA0005.jpg",
  "/hero-section/IMG-20250729-WA0006.jpg",
  "/hero-section/IMG-20250729-WA0007.jpg",
  "/hero-section/IMG-20250729-WA0008.jpg",
  "/hero-section/IMG-20250729-WA0009.jpg",
  "/hero-section/IMG-20250729-WA0010.jpg",
]

const features = [
  { icon: BookOpen, title: "Academic Excellence", description: "Our curriculum is designed to foster critical thinking, creativity, and a love for learning." },
  { icon: GraduationCap, title: "Qualified Faculty", description: "Learn from experienced educators who are passionate about teaching and student development." },
  { icon: Dumbbell, title: "Sports & Recreation", description: "State-of-the-art sports facilities to encourage physical fitness and team spirit." },
  { icon: Lightbulb, title: "Innovation Hub", description: "Modern labs and innovation centers to nurture creativity and scientific temperament." },
  { icon: Users, title: "Community Engagement", description: "Regular community service activities to instill social responsibility in students." },
  { icon: Award, title: "Recognition & Awards", description: "Our students consistently achieve excellence in academics, sports, and cultural activities." },
]

export default function Home() {
  const sliderRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({ loop: true, slides: { perView: 1 }, drag: false }, [])

  const testimonials = [
    {
      quote: "I'm thoroughly impressed with the school's academic and extracurricular offerings, which provide in-depth knowledge and clarity on various subjects. The teachers excel at building a strong foundation and addressing students' doubts, making it an excellent choice for my daughters' education. I'm delighted with their progress and highly recommend this school.",
      author: "Mrs. Snehal Lokhande",
      role: "Parent of Hindavi and Shivannya Lokhande",
      image: "/testimonials/Mrs. Snehal Lokhande.jpg",
    },
    {
      quote: "We're pleased with the school's exceptional teaching quality, which has enabled our child to learn and grow effectively. The school's emphasis on co-curricular activities has also been instrumental in fostering our child's overall development, making it a truly well-rounded educational experience.",
      author: "Mrs. Geeta Patel",
      role: "Parent of Diksha Patel",
      image: "/testimonials/Mrs. Geeta Patel.jpg",
    },
    {
      quote: "Top-notch school amenities, including a playground, library, and digital boards, complemented by a supportive and cooperative staff, make for an ideal learning environment.",
      author: "Mrs. Vaishali Ughade",
      role: "Parent of Sarvadnya Ughade",
      image: "/testimonials/Mrs. Vaishali Ughade.jpg",
    },
    {
      quote: "We appreciate the school's effective teaching approach and the strong bond between teachers and students. The school also does a great job of organizing extracurricular activities and celebrating festivals, making learning a fun and engaging experience.",
      author: "Mr. and Mrs. Hajare",
      role: "Parent of Shivansh Hajare",
      image: "/testimonials/Mr. and Mrs. Hajare .jpg",
    },
  ]

  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const testimonial = testimonials[current]

  // Rotate testimonials automatically
  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  // Modal state for Apply Form
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex flex-col font-serif">
      <SocialSidebar />
      <Chatbot />

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        <div ref={sliderInstanceRef} className="keen-slider h-[80vh]">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide relative h-[80vh]">
              <Image src={src} alt={`Slide ${idx + 1}`} layout="fill" objectFit="cover" priority={idx === 0} />
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white text-center max-w-3xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Abhishek International School</h1>
                  <p className="text-xl md:text-2xl mb-6 drop-shadow">
                    Nurturing young minds to become future leaders through quality education and holistic development.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {/* Apply Now Button */}
                    <Button
                      size="lg"
                      className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ backgroundColor: "#800000" }}
                      onClick={openModal}
                    >
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#800000]">Apply Now</h2>
            <iframe
              src="https://abhishekmoshi.sunrayztechnology.com/OnlineEnquiry.aspx"
              className="w-full h-[600px]"
              title="Apply Form"
            ></iframe>
          </div>
        </div>
      )}

      <WelcomeSection />

      {/* Why Choose Us Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800">
                Why Choose <span className="text-[#800000]">Abhishek International School ?</span>
              </h2>
              <div className="mb-6 h-1 w-24 bg-[#800000] mx-auto"></div>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Discover what makes us the preferred choice for parents who value holistic education and excellence
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#800000] opacity-10"></div>
                <div className="p-6 relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f3e5f5] text-[#800000] mr-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-[#800000]" />
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="container mx-auto px-4 py-16">
            <div className="px-4 py-16 text-center bg-white">
              <h2 className="text-3xl font-bold text-[#800000] mb-2">What Parents Say</h2>
              <div className="h-1 w-24 bg-[#800000] mx-auto mb-8 rounded-full" />
              <p className="text-gray-700 mb-10 max-w-xl mx-auto">Hear from our school community about their experiences</p>

              <Card className="max-w-2xl mx-auto shadow-lg border-0 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <Image src={testimonial.image} alt={testimonial.author} width={120} height={120} className="rounded-full object-cover border-4 border-[#800000] mb-6" />
                    <svg className="text-[#800000] mb-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
                    <p className="font-bold text-[#800000]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, index) => (
                  <div key={index} className={`h-3 w-3 rounded-full transition-all duration-300 ${current === index ? "bg-[#800000] scale-125" : "bg-gray-300 opacity-70"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#800000] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="mb-6 text-3xl font-bold sm:text-3xl">Ready to Join Our School?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Take the first step towards providing your child with a quality education that focuses on holistic development.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-[#800000">
                  {/* <Link href="https://abhishekmoshi.sunrayztechnology.com/OnlineEnquiry.aspx">Apply for Admission</Link> */}
                  <Link 
  href="https://abhishekmoshi.sunrayztechnology.com/OnlineEnquiry.aspx" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Apply for Admission
</Link>

                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#f3e5f5] px-6 py-3 rounded-lg transition-all duration-300">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800">
              Latest News <span className="text-[#800000]">& Events</span>
            </h2>
            <div className="mb-6 h-1 w-24 bg-[#800000] mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
  {[
    {
      date: "20 December 2025",
      title: "Multi-Themed Exhibition “AVINYA”",
      description:
        "Our school successfully organized the Multi-Themed Exhibition “AVINYA”. The exhibition showcased a wide range of innovative and creative student projects, reflecting strong academic understanding, teamwork, and practical application of concepts.",
    },
    {
      date: "24 December 2025",
      title: "Annual Concert Celebration",
      description:
        "Our school celebrated its Annual Concert with great enthusiasm. Students from Nursery to Std. X presented vibrant performances based on the theme “Panchmahabhuta”, along with special attractions such as Lathikathi, Yoga, and Mallakhamb.",
    },
    {
      date: "10 January 2026",
      title: "78th Army Day Inter-School Drill Competition",
      description:
        "Our school proudly participated in the Army Day Inter-School Drill Competition. Demonstrating exceptional discipline, coordination, and dedication, the Girls’ Drill Troop secured the First Prize, bringing great pride to the institution.",
    },
  ].map((event, index) => (
    <motion.div
      key={index}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-4 text-sm font-medium text-[#800000]">
        {event.date}
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {event.title}
      </h3>

      <p className="mb-4 text-gray-600">
        {event.description}
      </p>

      <Link
        href="#"
        className="font-medium text-[#800000] hover:text-[#4a148c]"
      >
        Read More →
      </Link>
    </motion.div>
  ))}
</div>


          <div className="mt-10 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#f3e5f5]">
                <Link href="/extra-curricular/events">View All Events</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

