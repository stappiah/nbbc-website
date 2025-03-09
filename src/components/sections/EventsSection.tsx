import gathering from "../../assets/gathering.jpg";

export default function EventsSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D92F4] text-center mb-8">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-2 max-w-6xl mx-auto">
          <div className="lg:h-[350px] lg:w-[350px]">
            <img
              src={gathering}
              className="rounded-lg shadow-lg w-full h-full object-cover"
              alt="The Gathering"
            />
          </div>
          <div>
            <div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#0D92F4] mb-2">
                  The Gathering
                </h3>
                <p className="text-gray-600 mb-4">
                  At NBBC, we believe your best days are still out in front of
                  you. Whether you are joining us in person or online, we invite
                  you to experience our services and be a part of the Lakewood
                  family.
                </p>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto my-2">
                {[
                  { title: "Sunday Service", date: "Every Sunday, 10:00 AM" },
                  { title: "Bible Study", date: "Every Wednesday, 7:00 PM" },
                ].map((event) => (
                  <div
                    key={event.title}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-[#0D92F4] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.date}</p>
                    <button className="text-[#FFB200] hover:text-[#9B7200] font-medium">
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
