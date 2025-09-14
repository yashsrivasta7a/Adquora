"use client";

import dynamic from 'next/dynamic'

// Import the page dynamically with no SSR
const DynamicLandingPage = dynamic(() => import('./PageClient'), {
  ssr: false,
  loading: () => <div className="bg-black h-screen flex items-center justify-center">
    <div className="text-white">Loading...</div>
  </div>
})

export default function Page() {
  return <DynamicLandingPage />;
}
