
export default function WatchSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0D92F4] mb-4">Join Our Worship Experience</h2>
          <p className="text-xl text-gray-600">(Where faith meets fellowship and joy)</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl h-[400px] lg:h-[600px]">
            <iframe
              src="https://www.youtube.com/embed/n4aG5YF9fbE"
              title="Worship Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-[#0D92F4] hover:bg-[#FFB200] text-white px-8 py-3 rounded-full transition-colors">
              Watch More Videos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}