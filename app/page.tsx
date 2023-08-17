import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  verification: {
    google: "oL4MxYP2fowyLzvCkMY7M8c4MrjlN0uNjd3dbLpegJg",
  },
}

export default function HomePage() {
  return redirect("/inicio");
}
