// 'use client';
// replaced to make this a server component

import Navbar from '@/components/Navbar'
import React from 'react'
import { PricingTable, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
const Subscription = () => {
  return (
    <main className='pt-32'>
      <Navbar />
      <div className="p-4 flex flex-col items-center gap-4">
        <SignedIn>
          <PricingTable />
        </SignedIn>
        <SignedOut>
          <p className="text-lg">Please sign in to view subscription plans.</p>
          <SignInButton mode="modal">
            <button className="btn-primary">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  )
}

export default Subscription;