import Link from "next/link"
import {  Instagram,  Youtube } from "lucide-react"

export function SocialSidebar() {
  return (
    <div className="social-sidebar">
      
    <Link
    href="https://www.instagram.com/abhishek_international_school?igsh=Y2h5d2NlOGY0aWVz" // Replace with actual Instagram link
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#f3e5f5] transition-colors"
  >
    <Instagram className="h-5 w-5" />
    <span className="sr-only">Instagram</span>
  </Link>
  <Link
    href="https://youtube.com/@aismoshipradhikaran?feature=shared" // Replace with actual YouTube link
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#f3e5f5] transition-colors"
  >
    <Youtube className="h-5 w-5" />
    <span className="sr-only">YouTube</span>
  </Link>
      
    </div>
  )
}

