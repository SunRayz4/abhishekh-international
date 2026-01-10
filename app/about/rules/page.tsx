"use client"

import { motion } from "framer-motion"
import { SubNavHeader } from "@/components/sub-nav-header"
import { ShieldCheck, Shirt, Utensils } from "lucide-react"

const rulesData = [
  {
    title: "General Rules for the Students",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    id: "general",
    color: "from-purple-500 to-pink-400",
    points: [
      "Discipline is an integral part of the learning process.",
      "Prayer must be said with respect and devotion.",
      "Every pupil must bring the school diary daily.",
      "Speak only English within the premises.",
      "Move silently in line. Respect all staff.",
      "No bullying/ragging. May lead to expulsion.",
      "Misbehavior is dealt with by the Disciplinary Committee.",
      "Do not damage property. Any loss must be compensated.",
      "No valuables or electronics allowed.",
      "No student will be sent home without parent request.",
      "All communication must be acknowledged by parents.",
      "Participate actively in school activities.",
      "Do not send money unless instructed by school.",
      "Meet teachers only by prior appointment (after 1:00 PM).",
      "No cakes for birthdays. Biscuits or toffees only.",
    ],
  },
  {
    title: "Dress Code",
    icon: <Shirt className="h-6 w-6 text-white" />,
    id: "dress",
    color: "from-blue-500 to-indigo-400",
    points: [
      "Neat and perfect uniform is compulsory.",
      "Follow the correct uniform for each day.",
      "Shoes must be clean. Socks changed daily.",
      "Strap shoes compulsory till Class 2.",
      "Avoid fancy accessories, gold/silver ornaments.",
      "Boys: Regular crew cut. Girls: neat plaits/bands.",
      "No nail paint, mehendi, bindi, makeup, etc.",
      "KG students must have spare clothes at school.",
      "PTM visits allowed only in school uniform.",
    ],
  },
  {
    title: "Food Habits",
    icon: <Utensils className="h-6 w-6 text-white" />,
    id: "food",
    color: "from-green-500 to-teal-400",
    points: [
      "Only fruits, salads, sprouts, and nuts for snacks.",
      "Avoid junk food, bakery items, and juices.",
      "Lunch kit must include towel, spoon, fork, water.",
      "Vegetables/greens are compulsory in lunch.",
      "Send appropriate food quantity for your child.",
      "Avoid expensive containers. Label everything.",
      "Students should not go home for lunch.",
    ],
  },
]

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
     
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center text-[#800000] mb-3">Student Guidelines</h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#800000] to-[#800000] rounded-full mb-6"></div>
          <p className="max-w-2xl text-center mx-auto text-gray-700 text-lg">
            These rules ensure a safe, respectful, and productive learning environment at Abhishek International School.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {rulesData.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="rounded-2xl shadow-lg bg-white border border-[#e1bee7] overflow-hidden"
            >
              <div className={`flex items-center gap-4 px-6 py-4 bg-gradient-to-r ${section.color}`}>
                <div className="p-2 rounded-full bg-white/20">{section.icon}</div>
                <h2 className="text-xl sm:text-2xl text-white font-bold">{section.title}</h2>
              </div>
              <ul className="px-6 py-6 list-disc pl-8 text-gray-800 space-y-2">
                {section.points.map((rule, index) => (
                  <li key={index} className="leading-relaxed">{rule}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
