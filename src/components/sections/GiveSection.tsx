import React from 'react'

export default function GiveSection() {
  return (
    <div className="bg-[#0D92F4] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Give</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-8">
            Your generosity helps us continue our mission of spreading God's love and making a difference in our community.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <button className="bg-[#FFB200] hover:bg-[#9B7200] text-white px-6 py-3 rounded-full transition-colors">
              Give Online
            </button>
            <button className="border-2 border-[#FFB200] text-white px-6 py-3 rounded-full hover:bg-[#FFB200] transition-colors">
              Learn More About Giving
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}