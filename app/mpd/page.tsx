// "use client"

// import { Card, CardContent } from "@/components/ui/card"

// const data = [
//   {
//     title: "General Information",
//     items: [
//       ["Name of the School", "Abhishek International School"],
//       ["Affiliation No.", "1131099"],
//       ["School Code", "31087"],
//       ["Address", "Plot No.2, Sector No.6, Moshi Pradhikaran, PCNTDA, Pune - 411038"],
//       ["Principal Name", "Mrs. Snehal Vinay Umarji"],
//       ["Qualification", "B.S.L, L.L.B, M.Ed"],
//       ["Email", "abhishekinternational.cbse@gmail"],
//       ["Contact", "8446713030"],
//     ]
//   },
//   {
//     title: "Documents and Information",
//     items: [
//       ["Affiliation/Upgradation Letter", "View Document"],
//       ["Society/Trust Certificate", "View Document"],
//       ["NOC from State Government", "View Document"],
//       ["RTE Act Recognition Certificate", "View Document"],
//       ["Building Safety Certificate", "View Document"],
//       ["Fire Safety Certificate", "View Document"],
//       ["DEO/Self Certification", "View Document"],
//       ["Water/Health/Sanitation Certificates", "View Document"],
//     ]
//   },
//   {
//     title: "Result and Academics",
//     items: [
//       ["Fee Structure", "View Document"],
//       ["Academic Calendar", "View Document"],
//       ["School Management Committee", "View Document"],
//       ["PTA Members", "View Document"],
//       ["Class X Result (2023-24)", "Registered: 23 | Passed: 23"],
//       ["Class XII Result", "Not Applicable"]
//     ]
//   },
//   {
//     title: "Staff (Teaching)",
//     items: [
//       ["Principal", "Mrs. Snehal Vinay Umarji"],
//       ["Total Teachers", "29"],
//       ["PGT", "1"], ["TGT", "14"], ["PRT", "12"],
//       ["Teacher-Section Ratio", "1:1:5"],
//       ["Special Educator", "Mr. Maruti Dadarao Gokshe"],
//       ["Counsellor", "Mrs. Swati Sandeep Kasbe"]
//     ]
//   },
//   {
//     title: "School Infrastructure",
//     items: [
//       ["Campus Area", "4000 sq.m"],
//       ["Classrooms", "24 (47 sq.m each)"],
//       ["Laboratories", "3 (57 sq.m each)"],
//       ["Internet", "Yes"],
//       ["Girls Toilets", "30"],
//       ["Boys Toilets", "30"],
//       ["YouTube Inspection Video", "Watch"]
//     ]
//   }
// ]

// export default function MandatoryDisclosurePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white px-4 py-16 font-serif">
//       <div className="container mx-auto max-w-6xl">
//         {/* Page Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-800">
//             Mandatory Public <span className="text-[#8e24aa]">Disclosure</span>
//           </h1>
//           <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
//         </div>

//         {/* Section Cards */}
//         <div className="grid gap-12">
//           {data.map((section, index) => (
//             <Card key={index} className="border-0 shadow-2xl hover:shadow-purple-200 transition-all duration-300 rounded-xl bg-white">
//               <CardContent className="p-8">
//                 <h2 className="text-2xl font-bold text-[#6a1b9a] mb-6">{section.title}</h2>
//                 <div className="space-y-4">
//                   {section.items.map(([label, value], i) => (
//                     <div
//                       key={i}
//                       className="flex flex-col md:flex-row md:justify-between md:items-center bg-[#f3e5f5]/50 px-4 py-3 rounded-lg"
//                     >
//                       <span className="text-gray-800 font-medium">{label}</span>
//                       <span className="text-[#6a1b9a] font-semibold">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const disclosureData = [
  {
    title: "General Information",
    icon: "🏫",
    items: [
      ["School Name", "Abhishek International School"],
      ["Affiliation No.", "1131099"],
      ["School Code", "31087"],
      ["Address", "Plot No.2, Sector No.6, Moshi Pradhikaran, Pune - 411038"],
      ["Principal", "Mrs. Snehal Vinay Umarji"],
      ["Qualification", "B.S.L, L.L.B, M.Ed"],
      ["Email", "abhishekinternational.cbse@gmail"],
      ["Contact", "8446713030"],
    ]
  },
  {
    title: "Documents & Certificates",
    icon: "📄",
    items: [
      ["Affiliation/Upgradation Letter", "View Document"],
      ["Trust Registration Certificate", "View Document"],
      ["State NOC", "View Document"],
      ["RTE Recognition Certificate", "View Document"],
      ["Building Safety Certificate", "View Document"],
      ["Fire Safety Certificate", "View Document"],
      ["DEO/Self Certificate", "View Document"],
      ["Water/Health/Sanitation", "View Document"],
    ]
  },
  {
    title: "Results & Academics",
    icon: "🎓",
    items: [
      ["Fee Structure", "View Document"],
      ["Academic Calendar", "View Document"],
      ["SMC Members", "View Document"],
      ["PTA Members", "View Document"],
      ["Class X Result (2023–24)", "23 Registered | 23 Passed"],
      ["Class XII Result", "Not Applicable"]
    ]
  },
  {
    title: "Teaching Staff",
    icon: "👩‍🏫",
    items: [
      ["Total Teachers", "29"],
      ["PGT", "1"], ["TGT", "14"], ["PRT", "12"],
      ["Teacher-Section Ratio", "1:1:5"],
      ["Special Educator", "Mr. Maruti Dadarao Gokshe"],
      ["Counsellor", "Mrs. Swati Sandeep Kasbe"]
    ]
  },
  {
    title: "School Infrastructure",
    icon: "🏗️",
    items: [
      ["Campus Area", "4000 sq.m"],
      ["Classrooms", "24 (47 sq.m each)"],
      ["Labs", "3 (57 sq.m each)"],
      ["Internet Facility", "Yes"],
      ["Girls Toilets", "30"],
      ["Boys Toilets", "30"],
      ["Inspection Video", "Watch"]
    ]
  }
]

export default function MandatoryDisclosurePage() {
  return (
    <div className="bg-gradient-to-br from-[#f9f6fb] to-white py-20 px-4 font-serif">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Mandatory Public <span className="text-[#8e24aa]">Disclosure</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-12">
          {disclosureData.map((section, idx) => (
            <Card
              key={idx}
              className="bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden"
            >
              <div className="px-6 py-8">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-[#6a1b9a]">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.items.map(([label, value], i) => (
                    <div
                      key={i}
                      className="flex justify-between items-start bg-[#f3e5f5]/50 px-4 py-3 rounded-md shadow-sm hover:bg-[#f3e5f5]/70 transition-colors"
                    >
                      <span className="text-gray-800 font-medium">{label}</span>
                      {value === "View Document" || value === "Watch" ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#6a1b9a] hover:bg-[#e1bee7] flex gap-1 items-center"
                        >
                          {value} <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <span className="text-[#6a1b9a] font-semibold text-right">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
