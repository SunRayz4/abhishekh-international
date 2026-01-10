// 'use client'

// import React, { useState } from 'react'

// export default function AdmissionFormPage() {
//   const [formData, setFormData] = useState({
//     parentName: '',
//     childName: '',
//     currentSchool: '',
//     mobileNumber: '',
//     email: '',
//     grade: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault()

//   try {
//     const res = await fetch('/api/admission', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })

//     const result = await res.json()

//     if (res.ok) {
//       setSubmitted(true)
//     } else {
//       alert(result.error || 'Failed to submit form')
//     }
//   } catch (error) {
//     console.error(error)
//     alert('Error submitting form')
//   }
// }


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-50 to-pink-50 font-sans p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-red-100 p-8 rounded-xl shadow-xl w-full max-w-3xl space-y-6"
//       >
//         {!submitted ? (
//           <>
//             {/* Header */}
//             <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
//               Admission Open for 2026-27
//             </h2>

//             {/* Row: Parent Name & Child Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-medium mb-1 text-red-700">Parent Full Name *</label>
//                 <input
//                   type="text"
//                   name="parentName"
//                   value={formData.parentName}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200"
//                   placeholder="Enter full name"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium mb-1 text-red-700">Child Full Name *</label>
//                 <input
//                   type="text"
//                   name="childName"
//                   value={formData.childName}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200"
//                   placeholder="Enter full name"
//                 />
//               </div>
//             </div>

//             {/* Current School */}
//             <div>
//               <label className="block font-medium mb-1 text-red-700">Current School Name *</label>
//               <input
//                 type="text"
//                 name="currentSchool"
//                 value={formData.currentSchool}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200"
//                 placeholder="Enter full school name"
//               />
//             </div>

//             {/* Row: Mobile & Email */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-medium mb-1 text-red-700">Mobile Number *</label>
//                 <input
//                   type="tel"
//                   name="mobileNumber"
//                   value={formData.mobileNumber}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200"
//                   placeholder="Enter mobile number"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium mb-1 text-red-700">Email *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200"
//                   placeholder="Enter email"
//                 />
//               </div>
//             </div>

//             {/* Grade Selection */}
//             <div>
//               <label className="block font-medium mb-1 text-red-700">Grade Applying For *</label>
//               <select
//                 name="grade"
//                 value={formData.grade}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200"
//               >
//                 <option value="">Select Grade</option>
//                 <option>Kindergarten</option>
//                 <option>Grade 1</option>
//                 <option>Grade 2</option>
//                 <option>Grade 3</option>
//                 <option>Grade 4</option>
//                 <option>Grade 5</option>
//                 <option>Grade 6</option>
//                 <option>Grade 7</option>
//                 <option>Grade 8</option>
//                 <option>Grade 9</option>
//                 <option>Grade 10</option>
//                 <option>Grade 11</option>
//                 <option>Grade 12</option>
//               </select>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
//             >
//               Submit Enquiry
//             </button>
//           </>
//         ) : (
//           <div className="text-center space-y-4">
//             <h3 className="text-xl font-bold text-red-700">
//               Thank You for Your Enquiry!
//             </h3>
//             <p className="text-red-800">
//               Our school team will get back to you shortly. For immediate information, please call us or visit:
//             </p>
//             <div className="text-left text-red-900">
//               <p className="font-semibold">Abhishek International School</p>
//               <p>Plot No.2, Sector No.6,</p>
//               <p>Moshi Pradhikaran, PCNTDA,</p>
//               <p>Pune-412105</p>
//               <p>📞 +91 84467 13030</p>
//               <p>✉️ abhishekinternational.cbse@gmail.com</p>
//             </div>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="mt-4 bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition"
//             >
//               Submit Another Enquiry
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   )
// }




'use client'

import React, { useState } from 'react'

export default function AdmissionFormPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    currentSchool: '',
    mobileNumber: '',
    email: '',
    grade: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert(result.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error(error)
      alert('Error submitting form')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-50 to-pink-50 font-sans p-4">
      <form onSubmit={handleSubmit} className="bg-red-100 p-8 rounded-xl shadow-xl w-full max-w-3xl space-y-6">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center text-red-600 mb-4">Admission Open for 2026-27</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1 text-red-700">Parent Full Name *</label>
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200" placeholder="Enter full name"/>
              </div>
              <div>
                <label className="block font-medium mb-1 text-red-700">Child Full Name *</label>
                <input type="text" name="childName" value={formData.childName} onChange={handleChange} required className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200" placeholder="Enter full name"/>
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1 text-red-700">Current School Name *</label>
              <input type="text" name="currentSchool" value={formData.currentSchool} onChange={handleChange} required className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200" placeholder="Enter full school name"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1 text-red-700">Mobile Number *</label>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200" placeholder="Enter mobile number"/>
              </div>
              <div>
                <label className="block font-medium mb-1 text-red-700">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200" placeholder="Enter email"/>
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1 text-red-700">Grade Applying For *</label>
              <select name="grade" value={formData.grade} onChange={handleChange} required className="w-full border border-red-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-200">
                <option value="">Select Grade</option>
                <option>Kindergarten</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
                <option>Grade 6</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">Submit Enquiry</button>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-red-700">Thank You for Your Enquiry!</h3>
            <p className="text-red-800">Our school team will get back to you shortly. For immediate information, please call us or visit:</p>
            <div className="text-left text-red-900">
              <p className="font-semibold">Abhishek International School</p>
              <p>Plot No.2, Sector No.6,</p>
              <p>Moshi Pradhikaran, PCNTDA,</p>
              <p>Pune-412105</p>
              <p>📞 +91 84467 13030</p>
              <p>✉️ abhishekinternational.cbse@gmail.com</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="mt-4 bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition">Submit Another Enquiry</button>
          </div>
        )}
      </form>
    </div>
  )
}
