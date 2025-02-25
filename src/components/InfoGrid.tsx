
export default function InfoGrid() {
  return (
    <div className="">
      <div className="container mx-auto px-4 h-full py-4 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-full">
          {/* Sunday Morning Service */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0D92F4]">SUNDAY MORNING</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Join us for worship at 9:00 AM and 11:00 AM
            </p>
          </div>

          {/* Sunday Evening Service */}
          <div className="bg-[#0D92F4] p-4 sm:p-8 rounded-lg shadow-md text-white flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">SUNDAY EVENING</h2>
            <p className="text-sm sm:text-base">
              Evening Service at 6:00 PM
            </p>
          </div>

          {/* Wednesday Service */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0D92F4]">WEDNESDAY</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Mid-week Service at 7:00 PM
            </p>
          </div>

          {/* Youth Service */}
          <div className="bg-[#0D92F4] p-4 sm:p-8 rounded-lg shadow-md text-white flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">YOUTH SERVICE</h2>
            <p className="text-sm sm:text-base">
              Every Friday at 6:30 PM
            </p>
          </div>

          {/* Children's Church */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0D92F4]">CHILDREN'S CHURCH</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Available during Sunday morning services
            </p>
          </div>

          {/* Special Events */}
          <div className="bg-[#0D92F4] p-4 sm:p-8 rounded-lg shadow-md text-white flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">SPECIAL EVENTS</h2>
            <p className="text-sm sm:text-base">
              Check our calendar for special service times
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}