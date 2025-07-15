"use client"

import { motion } from "framer-motion"
import { SubNavHeader } from "@/components/sub-nav-header"
import { GraduationCap } from "lucide-react"

const facultyList = [
  { id: 1, name: "Mrs. Snehal Vinay Umarji", designation: "Principal", qualification: "B.S.L, L.L.B, M.Ed" },
  { id: 2, name: "Mrs. Jagaruti Satpute", designation: "Co-Ordinator", qualification: "B.Com, B.Ed, D.C.A" },
  { id: 3, name: "Mrs. Kavita Sharma", designation: "Co-Ordinator", qualification: "B.Com, B.Ed, D.C.A" },
  { id: 4, name: "Mrs. Vandana Kanade", designation: "Teacher", qualification: "M.A, B.Ed" },
  { id: 5, name: "Mrs. Kavita Dhumal", designation: "Teacher", qualification: "M.A, M.Ed" },
  { id: 6, name: "Mrs. Snehal Shinde", designation: "Teacher", qualification: "B.Sc, D.Ed" },
  { id: 7, name: "Mrs. Swati Hande", designation: "Teacher", qualification: "B.Sc, B.Ed" },
  { id: 8, name: "Mrs. Vaishali Khot", designation: "Teacher", qualification: "B.Com, B.P.Ed" },
  { id: 9, name: "Mrs. Anisha Langly", designation: "Teacher", qualification: "B.A, T.T.C, MLISC" },
  { id: 10, name: "Mrs. Leena Chandekar", designation: "Teacher", qualification: "M.A, D.Ed" },
  { id: 11, name: "Mrs. Ragini Buvaji", designation: "Teacher", qualification: "B.A, B.Ed" },
  { id: 12, name: "Mrs. Komal Mhaindarkar", designation: "Teacher", qualification: "B.A, A.T.D." },
  { id: 13, name: "Mrs. Pranita More", designation: "Teacher", qualification: "B.Sc, B.Ed" },
  { id: 14, name: "Mrs. Manisha Gaikwad", designation: "Teacher", qualification: "B.Sc, B.Ed" },
  { id: 15, name: "Mrs. Mrunal Bagul", designation: "Teacher", qualification: "B.A, B.Ed" },
  { id: 16, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "M.A (Eco), Music" },
  { id: 17, name: "Mrs. Aarati Bhalerao", designation: "Teacher", qualification: "M.A, B.P.Ed" },
  { id: 18, name: "Mrs. Priya Thorat", designation: "Teacher", qualification: "M.C.A." },
  { id: 19, name: "Mrs. Priyanka Diwane", designation: "Teacher", qualification: "B.E. Computer" },
  { id: 20, name: "Mrs. Jayashri Bhure", designation: "Teacher", qualification: "B.E. (E.N.T.C.), German A1-A2-B1" },
  { id: 21, name: "Mrs. Suvarna Kondhalkar", designation: "Teacher", qualification: "B.Sc, B.Ed" },
  { id: 22, name: "Mrs. Lavina Shelke", designation: "Teacher", qualification: "D.Ed" },
  { id: 23, name: "Mrs. Seema Rasal", designation: "Teacher", qualification: "B.A, M.Lib" },
  { id: 24, name: "Ms. Pradnya Pujari", designation: "Dance Teacher", qualification: "M.Com" },
  { id: 25, name: "Mr. Sandesh Sakore", designation: "Teacher", qualification: "B.Sc, B.P.Ed" },
  { id: 26, name: "Ms. Uma Kale", designation: "Teacher", qualification: "C.P.Ed" },
  { id: 27, name: "Mr. Maruti Ghokshe", designation: "Special Educator", qualification: "B.A, B.E. (Sp.Edu) RCI" },
  { id: 28, name: "Mrs. Swati Kasbe", designation: "Wellness Teacher / Counsellor", qualification: "B.A, Psychology" },
  { id: 29, name: "Mrs. Varsha Gaikwad", designation: "Nurse", qualification: "B.Sc Nursing" },
]

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <SubNavHeader title="Faculty Information" items={[]} />

      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#6a1b9a] mb-2">Our Faculty</h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] rounded-full mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            A team of qualified, passionate, and committed educators nurturing minds at Abhishek International School.
          </p>
        </motion.div>

        <div className="overflow-x-auto mt-10 shadow-xl rounded-xl border border-[#e1bee7] bg-white">
          <table className="w-full table-auto text-left border-collapse">
            <thead className="bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] text-white text-sm sm:text-base">
              <tr>
                <th className="px-4 py-3">Sr. No.</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Designation</th>
                <th className="px-4 py-3">Qualification</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm sm:text-base">
              {facultyList.map((f, index) => (
                <tr
                  key={f.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{f.name}</td>
                  <td className="px-4 py-3">{f.designation}</td>
                  <td className="px-4 py-3">{f.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
