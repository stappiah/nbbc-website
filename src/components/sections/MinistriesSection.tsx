
export default function MinistriesSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D92F4] text-center mb-8">Our Ministries</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Children', 'Youth', 'Young Adults', 'Men', 'Women', 'Seniors'].map((ministry) => (
            <div key={ministry} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0D92F4] mb-3">{ministry}</h3>
              <p className="text-gray-600 mb-4">
                Join our {ministry.toLowerCase()} ministry and grow in faith together through fellowship, study, and service.
              </p>
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