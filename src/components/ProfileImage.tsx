'use client'

import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Thiago Santos"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
} 