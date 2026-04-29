import { AdminDashboard } from '@/components/admin-dashboard'

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AdminDashboard />
      </div>
    </main>
  )
}
