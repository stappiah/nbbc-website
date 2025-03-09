import give from '../assets/give.jpg'

const GivePage = () => {
  return (
    <div className="relative bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${give})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text contrast */}
      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold">Support Our Ministry</h2>
        <p className="mt-4 text-lg">Your generosity helps us spread love and faith to those in need. Thank you for partnering with us.</p>

        <div className="mt-8">
          <h3 className="text-3xl font-semibold">Ways to Give</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Give Online Card */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800">Give Online</h4>
              <p className="mt-4 text-gray-600">Donate securely online using your debit or credit card. It's quick and easy.</p>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Give Now</button>
            </div>

            {/* Give Via Text Card */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800">Give Via Text</h4>
              <p className="mt-4 text-gray-600">Text your donation amount to our church number. It's fast and convenient.</p>
              <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">Text to Give</button>
            </div>

            {/* Give Via Check Card */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800">Give by Check</h4>
              <p className="mt-4 text-gray-600">You can also send a check made payable to our church's name.</p>
              <button className="mt-6 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">Mail a Check</button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Other Ways to Get Involved</h3>
          <p className="mt-4 text-lg">Your contributions don’t just make a difference through monetary gifts. We also welcome your time and resources. Here's how you can help:</p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></span> Volunteer Opportunities
            </li>
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></span> Partner with Us for Events
            </li>
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></span> Donate Goods & Services
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <p className="text-sm">If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@church.org" className="text-blue-300 underline">support@church.org</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default GivePage;