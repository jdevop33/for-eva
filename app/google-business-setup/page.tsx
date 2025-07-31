import { GoogleBusinessProfileManager } from "@/components/google-business-profile-manager"
import { ReviewManagementSystem } from "@/components/review-management-system"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GoogleBusinessSetupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Site
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Google Business Profile Setup</h1>
              <p className="text-sm text-slate-600">Complete guide for PRIME STRENGTH local SEO domination</p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <GoogleBusinessProfileManager />
        <div className="mt-16">
          <ReviewManagementSystem />
        </div>
      </main>
    </div>
  )
}
