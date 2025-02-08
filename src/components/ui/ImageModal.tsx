"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import { X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

export function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 overflow-auto flex justify-center items-center bg-transparent shadow-none border-none"
      >
        {/* Hidden but accessible title for screen readers */}
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>

        <div className="relative">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-auto h-auto" />

          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
