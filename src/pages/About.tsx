import gathering from "../assets/gathering.jpg";
import normal_image from "../assets/normal_image.jpg";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import Banner from "../components/about/Banner";


const About = () => {
  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        {/* Gathering Section */}
        <div className="md:w-1/2">
          <img
            src={gathering} // Replace with actual image URL
            alt="The Gathering Event"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-900">THE GATHERING</h2>
          <p className="text-gray-700 mt-2">
            At NBBC, we believe your best days are still out in front of you.
            Whether you are joining us in person or online, we invite you to
            experience our services and be a part of the Lakewood family. The
            Bible says when you are planted in the house of the Lord, you will
            flourish. Get ready to step into a new level of your destiny!
          </p>
          <p className="mt-4 text-purple-700 font-semibold flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 4h10M5 11h14m-2 8H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
              ></path>
            </svg>
            This Sunday, 1:00PM - 5:00PM
          </p>
        </div>
      </div>

      <div className="bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg">
            As a church, we are called to carry out the{" "}
            <span className="font-bold">
              Great Commission and the Great Commandment
            </span>
            , and our mission statement was created to capture both of these
            critical mandates.
          </p>
          <p className="text-lg">
            Our mission drives everything we do,{" "}
            <span className="font-bold">
              from the ministries we provide to the resources we produce
            </span>
            . We hope this calling serves as an invitation to actively
            participate with us in the work of the Lord rather than remain a
            passive observer.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src={normal_image} // Replace with actual image
            alt="Baptism Celebration"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-[500px]">
        {/* Love God Section */}
        <div className="relative bg-blue-900 text-white flex items-center justify-center p-6">
          <img
            src={m1}
            alt="Worship"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <h2 className="text-2xl md:text-4xl font-bold z-10">Love God.</h2>
        </div>

        <div className="bg-blue-800 text-white flex items-center p-6">
          <p className="text-lg md:text-xl">
            We <span className="font-bold">love God</span> by growing in our
            knowledge of Him and living in worshipful obedience to His Word.
          </p>
        </div>

        {/* Love People Section */}
        <div className="bg-blue-800 text-white flex items-center p-6">
          <p className="text-lg md:text-xl">
            We <span className="font-bold">love people</span> by imitating Jesus
            and inviting the broken and suffering to receive hope and care.
          </p>
        </div>

        <div className="relative bg-blue-900 text-white flex items-center justify-center p-6">
          <img
            src={m2} // Replace with actual image
            alt="Community"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <h2 className="text-2xl md:text-4xl font-bold z-10">Love people.</h2>
        </div>

        <div className="relative bg-blue-900 text-white flex items-center justify-center p-6">
          <img
            src={m1}
            alt="Worship"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <h2 className="text-2xl md:text-4xl font-bold z-10">
            Make disciples.
          </h2>
        </div>

        <div className="bg-blue-800 text-white flex items-center p-6">
          <p className="text-lg md:text-xl">
            We <span className="font-bold">make disciples</span> by proclaiming
            the powerful gospel message--that Jesus Christ lived in perfect
            obedience to the Father, was crucified for our sin, was resurrected
            by the power of the Holy Spirit, ascended into heaven, and will day
            return to make all things new.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
