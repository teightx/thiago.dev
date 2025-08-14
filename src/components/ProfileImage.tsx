'use client'

import Image from 'next/image'

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-dark p-1 shadow-glow-strong opacity-90">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src="/thiago.dev/profile.jpg"
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