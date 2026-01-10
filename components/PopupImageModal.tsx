
import {  X, } from "lucide-react"
const PopupImageModal = ({
  show,
  onClose,
  imageUrl,
}: {
  show: boolean
  onClose: () => void
  imageUrl: string
}) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-4 relative max-w-sm w-full shadow-lg">
      <button
  onClick={onClose}
  className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-md transition-transform transform hover:scale-110"
  style={{ width: '40px', height: '40px' }}
>
  <X className="w-5 h-5 mx-auto" />
</button>
        <img
          src={imageUrl}
          alt="Popup"
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
    </div>
  )
}
export default PopupImageModal