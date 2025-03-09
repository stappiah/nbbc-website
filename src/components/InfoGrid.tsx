
export default function InfoGrid() {
  return (
    <div className="lg:w-[80%] lg:mx-auto">
      <div className="container mx-auto px-4 h-full py-4 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 h-full">
          {/* Sunday Morning Service */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0D92F4]">SUNDAY MORNING</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Join us at 9:00 AM and 11:00 AM at University of Ghana Campus
            </p>
          </div>

          {/* Sunday Evening Service */}
          <div className="bg-[#0D92F4] p-4 sm:p-8 rounded-lg shadow-md text-white flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">SUNDAY AFTERNOON</h2>
            <p className="text-sm sm:text-base">
              Afternoon Service at 1:00 PM
            </p>
          </div>

          {/* Wednesday Service */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0D92F4]">WEDNESDAY</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Mid-week Service at 8:00 PM
            </p>
          </div>

          {/* Youth Service */}
          {/* <div className="bg-[#0D92F4] p-4 sm:p-8 rounded-lg shadow-md text-white flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">YOUTH SERVICE</h2>
            <p className="text-sm sm:text-base">
              Every Friday at 6:30 PM
            </p>
          </div> */}

          {/* Children's Church */}
          <div className="bg-[#0D92F4] p-4 sm:p-8 rounded-lg shadow-md text-white flex flex-col justify-center min-h-[200px] sm:min-h-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">MODAL CHURCH</h2>
            <p className="text-sm sm:text-base">
            Available during Sunday afternoon services
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}