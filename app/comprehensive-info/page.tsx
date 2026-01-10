"use client"

import { SubNavHeader } from "@/components/sub-nav-header"
import { FileText } from "lucide-react"
import Link from "next/link"



const documents = [
  { title: "Transfer Certificate", file: "/pdf/SCHOOL LEAVING CERTIFICATE Format.pdf" },
  { title: "Self Affidavit of School", file: "/pdf/AIS self certificate sect increase .pdf" },
  { title: "Staff Statement", file: "/pdf/staff statement.pdf" },
  { title: "Section Wise Student Strength", file: "/pdf/section wise student strength.pdf" },
  { title: "Academic Planner", file: "/pdf/Annual Calendar 2025-26.pdf" },
  { title: "Annual Report", file: "/pdf/Annual Report.pdf" },
  { title: "POCSO Committee", file: "/pdf/POCSO committee1 .pdf" },
  { title: "List of Books", file: "/pdf/Book list 25-26.pdf" },
  { title: "No Homework Policy (Std I & II)", file: "/pdf/no home work policy.pdf" },
  { title: "Vishakha Committee", file: "/pdf/AIS Vishakha committee 25-26.pdf" },
  { title: "Anti-bullying Committee", file: "/pdf/AIS Anti bulling committee .pdf" },
  { title: "Redressal Committee", file: "/pdf/RedressalCommitte.pdf" },
  { title: "Details of Curriculum", file: "/pdf/Details Of Curriculam.pdf" },
  { title: "CBSE Accreditation Details", file: "/pdf/Affiliation letter.pdf" },
]

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
  

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#800000]">School Documents</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#800000] to-[] mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            All essential school documents, policies, and committee details are provided here for transparency and ease of access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <Link
              key={idx}
              href={doc.file}
              target="_blank"
              className="bg-white border border-[#e1bee7] p-6 rounded-xl shadow-md hover:shadow-xl transition flex gap-4 items-center"
            >
              <FileText className="h-8 w-8 text-[#800000]" />
              <span className="text-[#800000] font-medium">{doc.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
