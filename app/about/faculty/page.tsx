// "use client"

// import { motion } from "framer-motion"
// import { SubNavHeader } from "@/components/sub-nav-header"
// import { GraduationCap } from "lucide-react"

// const facultyList = [
//   { id: 1, name: "Mrs. Sudha Bhat", designation: "Principal", qualification: "B.S.C, B.Ed ,DSM" },
//   { id: 2, name: "Mrs. Jagaruti Satpute", designation: "Co-Ordinator", qualification: "B.Com, B.Ed, D.C.A" },
//   { id: 3, name: "Mrs. Kavita Sharma", designation: "Co-Ordinator", qualification: "B.Com, B.Ed, D.C.A" },
//   { id: 4, name: "Mrs. Vandana Kanade", designation: "Teacher", qualification: "M.A, B.Ed" },
//   { id: 5, name: "Mrs. Kavita Dhumal", designation: "Teacher", qualification: "M.A, M.Ed" },
//   { id: 6, name: "Mrs. Snehal Shinde", designation: "Teacher", qualification: "B.Sc, D.Ed" },
//   { id: 7, name: "Mrs. Swati Hande", designation: "Teacher", qualification: "B.Sc, B.Ed" },
//   { id: 8, name: "Mrs. Vaishali Khot", designation: "Teacher", qualification: "B.Com, B.P.Ed" },
//   { id: 9, name: "Mrs. Anisha Langly", designation: "Teacher", qualification: "B.A, T.T.C, MLISC" },
//   { id: 10, name: "Mrs. Leena Chandekar", designation: "Teacher", qualification: "M.A, D.Ed" },
//   { id: 11, name: "Mrs. Ragini Buvaji", designation: "Teacher", qualification: "B.A, B.Ed" },
//   { id: 12, name: "Mrs. Komal Mhaindarkar", designation: "Teacher", qualification: "B.A, A.T.D." },
//   { id: 13, name: "Mrs. Pranita More", designation: "Teacher", qualification: "B.Sc, B.Ed" },
//   { id: 14, name: "Mrs. Manisha Gaikwad", designation: "Teacher", qualification: "B.Sc, B.Ed" },
//   { id: 15, name: "Mrs. Mrunal Bagul", designation: "Teacher", qualification: "B.A, B.Ed" },
//   { id: 16, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "M.A (Eco), Music" },
//   { id: 17, name: "Mrs. Aarati Bhalerao", designation: "Teacher", qualification: "M.A, B.P.Ed" },
//   { id: 18, name: "Mrs. Priya Thorat", designation: "Teacher", qualification: "M.C.A." },
//   { id: 19, name: "Mrs. Priyanka Diwane", designation: "Teacher", qualification: "B.E. Computer" },
//   { id: 20, name: "Mrs. Jayashri Bhure", designation: "Teacher", qualification: "B.E. (E.N.T.C.), German A1-A2-B1" },
//   { id: 21, name: "Mrs. Suvarna Kondhalkar", designation: "Teacher", qualification: "B.Sc, B.Ed" },
//   { id: 22, name: "Mrs. Lavina Shelke", designation: "Teacher", qualification: "D.Ed" },
//   { id: 23, name: "Mrs. Seema Rasal", designation: "Teacher", qualification: "B.A, M.Lib" },
//   { id: 24, name: "Ms. Pradnya Pujari", designation: "Dance Teacher", qualification: "M.Com" },
//   { id: 25, name: "Mr. Sandesh Sakore", designation: "Teacher", qualification: "B.Sc, B.P.Ed" },
//   { id: 26, name: "Ms. Uma Kale", designation: "Teacher", qualification: "C.P.Ed" },
//   { id: 27, name: "Mr. Maruti Ghokshe", designation: "Special Educator", qualification: "B.A, B.E. (Sp.Edu) RCI" },
//   { id: 28, name: "Mrs. Swati Kasbe", designation: "Wellness Teacher / Counsellor", qualification: "B.A, Psychology" },
//   { id: 29, name: "Mrs. Varsha Gaikwad", designation: "Nurse", qualification: "B.Sc Nursing" },
// ]

// export default function FacultyPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
//       <SubNavHeader title="Faculty Information" items={[]} />

//       <section className="container mx-auto px-4 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl font-bold text-[#800000] mb-2">Our Faculty</h1>
//           <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#800000] to-[#800000] rounded-full mb-6" />
//           <p className="text-gray-700 max-w-2xl mx-auto text-lg">
//             A team of qualified, passionate, and committed educators nurturing minds at Abhishek International School.
//           </p>
//         </motion.div>

//         <div className="overflow-x-auto mt-10 shadow-xl rounded-xl border border-[#e1bee7] bg-white">
//           <table className="w-full table-auto text-left border-collapse">
//             <thead className="bg-gradient-to-r from-[#800000] to-[#800000] text-white text-sm sm:text-base">
//               <tr>
//                 <th className="px-4 py-3">Sr. No.</th>
//                 <th className="px-4 py-3">Name</th>
//                 <th className="px-4 py-3">Designation</th>
//                 <th className="px-4 py-3">Qualification</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-800 text-sm sm:text-base">
//               {facultyList.map((f, index) => (
//                 <tr
//                   key={f.id}
//                   className={index % 2 === 0 ? "bg-white" : "bg-#800000-50"}
//                 >
//                   <td className="px-4 py-3">{index + 1}</td>
//                   <td className="px-4 py-3">{f.name}</td>
//                   <td className="px-4 py-3">{f.designation}</td>
//                   <td className="px-4 py-3">{f.qualification}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { SubNavHeader } from "@/components/sub-nav-header"
import { GraduationCap } from "lucide-react"

const facultyList = [
  { id: 1, name: "Mrs. Sudha Bhat", designation: "Principal", qualification: "B.Sc, B.Ed" },
  { id: 2, name: "Mrs. Sushma Patil", designation: "Co-ordinator", qualification: "M.Sc" },
  { id: 3, name: "Mrs. Ashwini Shahane", designation: "TGT (Science)", qualification: "M.Sc, B.Ed" },
  { id: 4, name: "Mrs. Laxmi Jadhav", designation: "TGT (Science)", qualification: "B.Sc, B.Ed" },
  { id: 5, name: "Mrs. Mrunal Shekhar Bagul", designation: "TGT (Hist/Geo)", qualification: "MA, B.Ed" },
  { id: 6, name: "Mrs. Tambe Surekha", designation: "TGT (English)", qualification: "BA, B.Ed" },
  { id: 7, name: "Mrs. Vidya Patil", designation: "TGT (Hindi)", qualification: "MA, M.Ed" },
  { id: 8, name: "Mrs. Jayashree Bhure", designation: "TGT (German)", qualification: "German A1 A2 B1 Level" },
  { id: 9, name: "Mrs. Archana Kulkarni", designation: "TGT (Marathi)", qualification: "MA, M.Ed" },
  { id: 10, name: "Mrs. Pooja Nakhate", designation: "TGT (IT)", qualification: "BE (IT)" },
  { id: 11, name: "Mrs. Savita Dahale", designation: "PRT", qualification: "B.Sc, B.Ed" },
  { id: 12, name: "Mrs. Arpana Kalbande", designation: "PRT", qualification: "B.Sc, B.Ed" },
  { id: 13, name: "Mrs. Harsha Khodake", designation: "PRT", qualification: "MA, B.Ed" },
  { id: 14, name: "Mrs. Pranita More", designation: "PRT", qualification: "B.Sc, B.Ed" },
  { id: 15, name: "Mrs. Pooja Kapase", designation: "PRT", qualification: "M.Sc, B.Ed" },
  { id: 16, name: "Mrs. Chaitali Pange", designation: "PRT", qualification: "B.Sc, B.Ed" },
  { id: 17, name: "Mrs. Ashwini Deshmukh", designation: "PRT", qualification: "M.Sc, B.Ed" },
  { id: 18, name: "Mrs. Smita Band", designation: "PRT", qualification: "MA, B.Ed" },
  { id: 19, name: "Mrs. Bharti Halloli", designation: "PRT", qualification: "BA, B.Ed" },
  { id: 20, name: "Miss Neha Inamdar", designation: "PRT", qualification: "B.Com, B.Ed" },
  { id: 21, name: "Mrs. Reshma Dhamale", designation: "PRT", qualification: "M.Sc, B.Ed" },
  { id: 22, name: "Mrs. Aarati Bhalerao", designation: "PRT", qualification: "MA, BP.Ed" },
  { id: 23, name: "Mrs. Shital Patil", designation: "PRT", qualification: "M.Sc" },
  { id: 24, name: "Mrs. Reetu Lokhande", designation: "PRT", qualification: "Diploma in CSE" },
  { id: 25, name: "Mrs. Lata Maniyan", designation: "PRT", qualification: "M.Com" },
  { id: 26, name: "Mrs. Manjusha Paul", designation: "PRT", qualification: "B.Com, D.Ted" },
  { id: 27, name: "Mrs. Pradnya Vetal", designation: "PRT", qualification: "BA, ECCED Phonix" },
  { id: 28, name: "Mrs. Gauri Thombre", designation: "PRT", qualification: "M.Tech Electronics" },
  { id: 29, name: "Mrs. Sneha Jadhav", designation: "PRT", qualification: "M.Com, GDCA" },
  { id: 30, name: "Mrs. Pratiksha Pathade", designation: "PRT", qualification: "M.Sc" },
  { id: 31, name: "Miss Nikita Mor", designation: "PRT", qualification: "BA, D.Ed" },
  { id: 32, name: "Mrs. Sangita Bargaje", designation: "PRT", qualification: "MA, TTC" },
  { id: 33, name: "Mrs. Sadhana Bhalerao", designation: "PRT", qualification: "B.Com, MCM" },
  { id: 34, name: "Mrs. Arundhati Patil", designation: "PRT (IT)", qualification: "B.Sc, MBA, PGDBO (COM)" },
  { id: 35, name: "Mr. Santosh Naik", designation: "PRT (PI)", qualification: "B.Ped, M.Ed (PE)" },
  { id: 36, name: "Mr. Pratik Lonkar", designation: "MCF", qualification: "BA, NCC" },
  { id: 37, name: "Mrs. Rupali Devkar", designation: "Drawing Teacher", qualification: "GD Arts, Dip Aed, MA" },
  { id: 38, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "MA, Music Visharad" },
  { id: 39, name: "Mrs. Megha Suryawanshi", designation: "Dance Teacher", qualification: "MBA, HR" },
  { id: 40, name: "Mrs. Annapurna Madasanal", designation: "Librarian", qualification: "M.Sc, B.Ed" },
  { id: 41, name: "Mr. Maruti Dadarao Khokshe", designation: "Special Educator", qualification: "MA, DSA (Spl Edu)" },
  { id: 42, name: "Mrs. Swati Sandeep Kasbe", designation: "Counselor", qualification: "BA Psychology" },
  { id: 43, name: "Mrs. Puneeta Tamhankar", designation: "Accountant/ Admin", qualification: "BBA, CA Intermediate" },
  { id: 44, name: "Miss Ritu Sachin Awate", designation: "Nurse", qualification: "GNM (Nursing)" }
];

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
          <h1 className="text-4xl font-bold text-[#800000] mb-2">Our Faculty</h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#800000] to-[#800000] rounded-full mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            A team of qualified, passionate, and committed educators nurturing minds at Abhishek International School.
          </p>
        </motion.div>

        <div className="overflow-x-auto mt-10 shadow-xl rounded-xl border border-[#e1bee7] bg-white">
          <table className="w-full table-auto text-left border-collapse">
            <thead className="bg-gradient-to-r from-[#800000] to-[#800000] text-white text-sm sm:text-base">
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
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f9f6fb]"}
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
  );
}
