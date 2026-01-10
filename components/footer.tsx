// import Link from "next/link"
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react"

// export function Footer() {
//   return (
//     <footer className=" text-white font-serif" style={{ background: "#800000" }}>
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* School Info */}
//           <div>
//             <h3 className="mb-4 text-xl font-bold">Abhishek International School</h3>
//             <p className="mb-4">
//               Providing quality education and shaping future leaders since 2005.
//             </p>
//          <div className="flex space-x-4">
//   <Link
//     href="https://www.instagram.com/abhishek_international_school?igsh=Y2h5d2NlOGY0aWVz" // Replace with actual Instagram link
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-[#f3e5f5] transition-colors"
//   >
//     <Instagram className="h-5 w-5" />
//     <span className="sr-only">Instagram</span>
//   </Link>
//   <Link
//     href="https://youtube.com/@aismoshipradhikaran?feature=shared" // Replace with actual YouTube link
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-[#f3e5f5] transition-colors"
//   >
//     <Youtube className="h-5 w-5" />
//     <span className="sr-only">YouTube</span>
//   </Link>
// </div>
//           </div>

//           {/* Quick Links */}
         

//           {/* Important Info */}
          

//           {/* Contact Info */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin className="mr-2 h-5 w-5 shrink-0" />
//                 <span>Abhishek International School
// Plot No.2, Sector No.6,
// Moshi Pradhikaran, PCNTDA,
// Pune-412105</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="mr-2 h-5 w-5" />
//                 <span>+91 84467 13030</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="mr-2 h-5 w-5" />
//                 <span>abhishekinternational.cbse@gmail.com

// </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm">
//           <p>&copy; {new Date().getFullYear()} Abhishek International School. All rights reserved.</p>
//           <p className="mt-2 text-white/80"> &copy; Design by Sunrayz Technology</p>
//         </div>
//       </div>
//     </footer>
//   )
// }
import Link from "next/link"
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="text-white font-serif" style={{ background: "#800000" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Abhishek International School</h3>
            <p className="mb-4">
              Providing quality education and shaping future leaders since 2005.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/abhishek_international_school?igsh=Y2h5d2NlOGY0aWVz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f3e5f5] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@aismoshipradhikaran?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f3e5f5] transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.230810669235!2d73.8425583!3d18.6536358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f63a5c7dbb%3A0xa36cbb7ca721aba5!2sAbhishek%20International%20School!5e0!3m2!1sen!2sin!4v1753854395916!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>
                  Abhishek International School<br />
                  Plot No.2, Sector No.6,<br />
                  Moshi Pradhikaran, PCNTDA,<br />
                  Pune-412105
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91 84467 13030</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>abhishekinternational.cbse@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Abhishek International School. All rights reserved.</p>
          <p className="mt-2 text-white/80"> &copy; Design by Sunrayz Technology</p>
        </div>
      </div>
    </footer>
  )
}
