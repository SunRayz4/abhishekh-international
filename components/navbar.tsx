
'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Target, X ,ChevronDown} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useRef, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SocialSidebar } from "./social-sidebar"
import PopupImageModal from "./PopupImageModal"


const navItems = [

  {
    title: "MPD",
    href: "/mpd",
    subItems: [],
  },

  {
  title: "About",
  href: "/about",
  subItems: [
    { title: "About Us", href: "/about" },
    { title: "Vision & Mission", href: "/about/vision-mission" },
    { title: "Management Members", href: "/about/management" },
    { title: "Principal's Message", href: "/about/principal-message" },
    { title: "Curriculum", href: "/about/curriculum" },
    { title: "Infrastructure", href: "/pdf/infrastructure details1.pdf", target: "_blank" },
    { title: "Rules", href: "/about/rules" },
    { title: "Faculty Information", href: "/about/faculty" }
  ],
},
  {
    title: "Comprehensive Info",
    href: "/comprehensive-info",
    subItems: [],
  },
  {
    title: "Extra Curricular Activities",
    href: "/extra-curricular",
    subItems: [
      { title: "Our Achievement", href: "/extra-curricular/our-achievement" },
      { title: "Extra Activity", href: "/extra-curricular/extra-activity" },
     
    ],
  },
  
  {
  title: "Admission",
  href: "/admission",
  subItems: [
    { title: "Elligibility & intake", href: "/admission/elligibilty-intake" },
    { title: "Fee Structure", href: "/pdf/AIS Fees structure 25-26-.pdf", target: "_blank" },
    { title: "Admission Form", href: "/pdf/AdmissionForm1.pdf", target: "_blank" },
  ],
},
 
  {
  title: "Academics",
  href: "/academics",
  subItems: [
    { title: "Academic Planner", href: "/pdf/Annual Calendar 2025-26.pdf", target: "_blank" },
    { title: "Programmes", href: "/academics/programs" },
    { title: "Teaching Methodology", href: "/academics/teaching-methodology" },
     { title: "Annual Report-2025-26", href: "/academics/annualreport" },
   
  ],
},
  {
    title: "Facilities",
    href: "/facilities",
     subItems: [],
 
  },
  {
    title: "Gallery",
    href: "/gallery",
    subItems: [
      { title: "Photo Gallery", href: "/gallery/photos"  },
      { title: "Video Gallery", href: "/gallery/videos" },
    
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
    subItems: [],
  },
]

export function Navbar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(true) // shown on initial load
// const [showModal, setShowModal] = useState(true) // shown on initial load

  // ✅ Add images and current index inside component
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/img/admissionopen.jpeg`,
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    setMounted(true);
   

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target as Node))
      ) {
        setOpenDropdownIndex(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
      dropdownRefs.current = Array(navItems.length).fill(null);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [navItems.length])
  return (
    <>
  
  <PopupImageModal
  show={showModal}
  onClose={() => {
    if (currentImageIndex < images.length - 1) {
      // Show next image instead of closing
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // Last image → close modal and reset
      setShowModal(false);
      setCurrentImageIndex(0);
    }
  }}
  imageUrl={images[currentImageIndex]}
/>


      
    
<SocialSidebar />

     <Link href="/" className="flex items-center justify-center gap-3 mb-2 lg:mb-0 " style={{ textDecoration: 'none' ,padding: '0.5rem', color: '#800000'}}>
  <img
    src="/school_logo.png"
    alt="School Logo"
    className="w-12 h-12 rounded-md object-cover"
    draggable={false}
  />
  <span className="text-[#800000] text-xl lg:text-2xl font-serif font-bold text-center" style={{ fontFamily: 'serif' }}>
    Abhishek International School
  </span>
</Link>

<header className="sticky top-0 z-50 w-full shadow-sm border-b border-gray-300 bg-[#800000]">
  <div className="container mx-auto px-6 py-2 flex flex-col lg:flex-row items-center lg:justify-center">
    
    

    {/* Desktop Nav - Centered */}
    {mounted && (

   <nav className="hidden lg:flex flex-row items-center gap-4 font-serif font-semibold text-white text-[15px] mt-0 tracking-wide">

      {navItems.map((item, index) => (
        // <div
        //   key={item.title}
        //   className="flex items-center gap-2 relative"
        //   ref={(el) => (dropdownRefs.current[index] = el)}
        // >
        <div
  key={item.title}
  className="flex items-center gap-2 relative"
  ref={(el) => {
    dropdownRefs.current[index] = el;
  }}
>

          {item.subItems.length > 0 ? (
            <>
              <button
                onClick={() =>
                  setOpenDropdownIndex(openDropdownIndex === index ? null : index)
                }
                className="flex items-center gap-1 hover:text-gray-100 transition duration-200 px-1"
              >
                {item.title}
                <ChevronDown size={16} className="mt-0.5" />
              </button>

              {openDropdownIndex === index && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-xl z-50 transition-all duration-300">
                  <ul className="py-2">
                    {item.subItems.map((sub, i) => (
                      <li key={sub.title}>
                        <Link
                          href={sub.href}
                          target={sub.target || "_self"}
                          rel={
                            sub.target === "_blank" ? "noopener noreferrer" : undefined
                          }
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-maroon text-sm transition duration-150"
                          onClick={() => setOpenDropdownIndex(null)} // Close on select
                        >
                          {sub.title}
                        </Link>
                        {i !== item.subItems.length - 1 && (
                          <div className="border-t border-gray-100 mx-4" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className="hover:text-gray-100 transition duration-200 px-1"
            >
              {item.title}
            </Link>
          )}

          {/* Divider | */}
          {index !== navItems.length - 1 && (
            <span className="hidden lg:inline-block text-white text-opacity-50 px-1">
              |
            </span>
          )}
        </div>
      ))}
    </nav>
    )}

    {/* Mobile Nav - Hidden on Large Screens */}


    {/* Mobile Menu Button */}
   <Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="lg:hidden">
      <Menu className="h-6 w-6 text-white" />
    </Button>
  </SheetTrigger>

  {/* Mobile Navigation Drawer */}
  <SheetContent
    side="left"
    className="w-[280px] sm:w-[340px] border-l border-gray-200 p-6 rounded-r-lg bg-white h-full overflow-y-auto"
  >
    {/* Close Icon */}
    <SheetTrigger asChild>
      {/* <Button variant="ghost" size="icon" className="mb-4 float-right">
        <X className="w-5 h-5 text-gray-700" />
      </Button> */}
    </SheetTrigger>

    {/* School Logo */}
    <Link href="/" className="flex items-center mb-8 gap-3">
      <img
        src="/school_logo.png"
        alt="School Logo"
        className="w-12 h-12 rounded-md object-cover"
        draggable={false}
      />
      <span className="text-[16px] font-serif font-semibold text-gray-800">
        Abhishek International School
      </span>
    </Link>

    {/* Mobile Nav Accordion */}
    <Accordion type="multiple" className="space-y-2 font-serif">
      {navItems.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          {item.subItems.length > 0 ? (
            <>
              <AccordionTrigger className="flex justify-between items-center py-2 text-gray-800">
                {item.title}
               
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    target={subItem.target || "_self"}
                    rel={
                      subItem.target === "_blank" ? "noopener noreferrer" : undefined
                    }
                    className="block py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md px-2"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </AccordionContent>
            </>
          ) : (
            <Link
              href={item.href}
              className="block py-2 px-2 text-gray-800 rounded-md hover:bg-gray-100"
            >
              {item.title}
            </Link>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  </SheetContent>
</Sheet>

  </div>
</header>



      {/* Marquee CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  )
}
