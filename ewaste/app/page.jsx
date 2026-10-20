import { redirect } from 'next/navigation'
import { verifyServerSession } from '../lib/supabase'

export default async function HomePage() {
  const { authenticated } = await verifyServerSession()

  if (authenticated) {
    redirect('/admin')
  } else {
    redirect('/login')
  }
}

