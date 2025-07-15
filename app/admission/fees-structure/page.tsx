// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'

// const feeData = [
//   { class: 'Nursery', new: 33000, old: 0 },
//   { class: 'LKG', new: 36000, old: 30400 },
//   { class: 'UKG', new: 46000, old: 39600 },
//   { class: 'Std-I', new: 66400, old: 55500 },
//   { class: 'Std-II', new: 68000, old: 56800 },
//   { class: 'Std-III', new: 69500, old: 58100 },
//   { class: 'Std-IV', new: 69500, old: 58100 },
//   { class: 'Std-V', new: 69500, old: 58100 },
//   { class: 'Std-VI', new: 69500, old: 58100 },
//   { class: 'Std-VII', new: 69500, old: 58100 },
//   { class: 'Std-VIII', new: 69500, old: 58100 },
//   { class: 'Std-IX', new: 73000, old: 61600 },
//   { class: 'Std-X', new: 73000, old: 61600 },
// ]

// export default function FeeStructurePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#f8f7fc] to-white px-4 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl font-bold text-purple-700 mb-2">Fee Structure for 2025–2026</h1>
//         <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-400 mx-auto rounded-full mb-4"></div>
//         <p className="text-gray-600 text-lg">Applicable for New & Existing Students</p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="max-w-5xl mx-auto"
//       >
//         <table className="w-full border border-purple-300 rounded-lg overflow-hidden text-center table-fixed">
//           <thead className="bg-purple-100 text-purple-800">
//             <tr>
//               <th className="p-3 text-base font-semibold border border-purple-200">Class</th>
//               <th className="p-3 text-base font-semibold border border-purple-200">New Student (₹)</th>
//               <th className="p-3 text-base font-semibold border border-purple-200">Old Student (₹)</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {feeData.map((item, index) => (
//               <tr key={index} className="hover:bg-purple-50 transition">
//                 <td className="p-3 border border-purple-100 font-medium text-gray-800">{item.class}</td>
//                 <td className="p-3 border border-purple-100 text-gray-700">
//                   {item.new.toLocaleString()}
//                 </td>
//                 <td className="p-3 border border-purple-100 text-gray-700">
//                   {item.old > 0 ? item.old.toLocaleString() : '—'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>

//       {/* Important Notes Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="max-w-4xl mx-auto mt-10 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg"
//       >
//         <h3 className="text-xl font-semibold text-purple-700 mb-2">Important Notes</h3>
//         <ul className="list-disc list-inside text-gray-700 leading-relaxed">
//           <li>Fee includes academic and activity charges.</li>
//           <li>Books, transport, and uniforms are charged separately.</li>
//           <li>New admissions include a one-time registration fee.</li>
//           <li>Fee payment is term-wise or annually as per policy.</li>
//         </ul>
//       </motion.div>

//       {/* School Timings Section */}
//     {/* School Timings Section */}
// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, delay: 0.6 }}
//   className="max-w-4xl mx-auto mt-10 bg-gradient-to-r from-purple-50 to-sky-50 p-8 rounded-xl shadow-md"
// >
//   <h3 className="text-2xl font-bold text-center text-purple-700 mb-6">School Timings</h3>

//   <div className="grid md:grid-cols-2 gap-6">
//     {/* Student Timings */}
//     <div className="bg-white rounded-lg p-6 border border-purple-200 shadow">
//       <h4 className="text-xl font-semibold text-purple-600 mb-3">Student Timings</h4>
//       <ul className="text-gray-700 space-y-2">
//         <li>
//           <strong>Monday to Friday:</strong> 8:45 AM – 3:00 PM
//         </li>
//         <li>
//           <strong>Saturday:</strong> 8:45 AM – 12:00 Noon
//         </li>
//       </ul>
//     </div>

//     {/* Office Timings */}
//     <div className="bg-white rounded-lg p-6 border border-sky-200 shadow">
//       <h4 className="text-xl font-semibold text-sky-600 mb-3">School Office Timings</h4>
//       <ul className="text-gray-700 space-y-2">
//         <li>
//           <strong>Monday to Friday:</strong> 8:30 AM – 3:00 PM
//         </li>
//         <li>
//           <strong>Saturday:</strong> 8:30 AM – 1:00 PM
//         </li>
//       </ul>
//     </div>
//   </div>
// </motion.div>

//     </div>
//   )
// }
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, Clock, CalendarDays, Info, School, BookOpenCheck } from 'lucide-react'

const feeData = [
  { class: 'Nursery', new: 33000, old: 0 },
  { class: 'LKG', new: 36000, old: 30400 },
  { class: 'UKG', new: 46000, old: 39600 },
  { class: 'Std-I', new: 66400, old: 55500 },
  { class: 'Std-II', new: 68000, old: 56800 },
  { class: 'Std-III', new: 69500, old: 58100 },
  { class: 'Std-IV', new: 69500, old: 58100 },
  { class: 'Std-V', new: 69500, old: 58100 },
  { class: 'Std-VI', new: 69500, old: 58100 },
  { class: 'Std-VII', new: 69500, old: 58100 },
  { class: 'Std-VIII', new: 69500, old: 58100 },
  { class: 'Std-IX', new: 73000, old: 61600 },
  { class: 'Std-X', new: 73000, old: 61600 },
]

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7fc] to-white px-4 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
          <CalendarDays className="mr-2" size={18} />
          <span className="text-sm font-medium">2025–2026 Academic Year</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-3">
          School <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Fee Structure</span>
        </h1>
        <div className="h-1.5 w-28 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-purple-600 max-w-2xl mx-auto">
          Transparent pricing for new and existing students
        </p>
      </motion.div>

      {/* Fee Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <div className="overflow-hidden rounded-2xl shadow-lg border border-purple-100">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-700 to-purple-500 text-white">
              <tr>
                <th className="p-4 text-left font-semibold">
                  <div className="flex items-center">
                    <School className="mr-2" size={18} />
                    Class
                  </div>
                </th>
                <th className="p-4 text-right font-semibold">
                  <div className="flex items-center justify-end">
                    <span className="mr-2">New Student</span>
                    <IndianRupee size={16} />
                  </div>
                </th>
                <th className="p-4 text-right font-semibold">
                  <div className="flex items-center justify-end">
                    <span className="mr-2">Existing Student</span>
                    <IndianRupee size={16} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 bg-white">
              {feeData.map((item, index) => (
                <motion.tr 
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="hover:bg-purple-50 transition"
                >
                  <td className="p-4 font-medium text-purple-900">
                    {item.class}
                  </td>
                  <td className="p-4 text-right font-medium text-gray-800">
                    ₹{item.new.toLocaleString()}
                  </td>
                  <td className="p-4 text-right text-gray-700">
                    {item.old > 0 ? `₹${item.old.toLocaleString()}` : '—'}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Information Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-4 flex items-center">
            <Info className="text-white mr-2" size={20} />
            <h3 className="text-lg font-semibold text-white">Important Notes</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Fee includes academic and activity charges</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Books, transport, and uniforms are charged separately</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>New admissions include a one-time registration fee</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Fee payment is term-wise or annually as per policy</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100"
        >
          <div className="bg-gradient-to-r from-pink-600 to-pink-400 p-4 flex items-center">
            <BookOpenCheck className="text-white mr-2" size={20} />
            <h3 className="text-lg font-semibold text-white">Payment Information</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-pink-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Payments accepted via bank transfer or school office</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-pink-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Installment plans available upon request</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-pink-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>5% discount for annual fee payment</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-pink-500 mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Receipts issued for all payments</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* School Timings Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-4 flex items-center">
          <Clock className="text-white mr-2" size={20} />
          <h3 className="text-lg font-semibold text-white">School Timings</h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                <span className="bg-purple-100 p-2 rounded-full mr-3">
                  <School className="text-purple-600" size={18} />
                </span>
                Student Timings
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                  <strong>Monday to Friday:</strong> 8:45 AM – 3:00 PM
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                  <strong>Saturday:</strong> 8:45 AM – 12:00 Noon
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                <span className="bg-indigo-100 p-2 rounded-full mr-3">
                  <CalendarDays className="text-indigo-600" size={18} />
                </span>
                Office Timings
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  <strong>Monday to Friday:</strong> 8:30 AM – 3:00 PM
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  <strong>Saturday:</strong> 8:30 AM – 1:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}