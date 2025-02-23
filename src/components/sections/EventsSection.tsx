import React from 'react'

export default function EventsSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D92F4] text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Sunday Service', date: 'Every Sunday, 10:00 AM' },
            { title: 'Bible Study', date: 'Every Wednesday, 7:00 PM' },
            { title: 'Youth Night', date: 'Every Friday, 6:30 PM' }
          ].map((event) => (
            <div key={event.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0D92F4] mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.date}</p>
              <button className="text-[#FFB200] hover:text-[#9B7200] font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}