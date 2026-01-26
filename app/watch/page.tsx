"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function WatchPage() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("paygo-user")
    if (!storedUser) {
      router.push("/login")
      return
    }
    setUserData(JSON.parse(storedUser))
  }, [router])

  if (!userData) {
    return <div className="p-6 text-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Watch</span>
        </Link>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-medium mb-3">How to Earn with PayGo</h2>

        {/* YouTube Video Player */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/Sg53BIrNVd0"
            title="How to Earn with PayGo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
