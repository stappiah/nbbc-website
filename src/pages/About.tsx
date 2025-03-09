import gathering from "../assets/gathering.jpg";
import normal_image from "../assets/normal_image.jpg";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import Banner from "../components/about/Banner";
import { useState } from "react";
import AboutUs from "../components/about/AboutUs";
import Teach from "../components/about/Teach";
import Pastor from "../components/about/Pastor";
import Gallery from "../components/about/Gallery";

const About = () => {
  const aboutLinks = [
    { name: "About Us", index: 0 },
    { name: "What we teach", index: 1 },
    { name: "Our Pastor", index: 2 },
    { name: "Gallery", index: 3 },
  ];

  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedName, setselectedName] = useState("About Us");

  return (
    <div>
      <Banner name={selectedName} />

      <div className="bg-[#0D92F4] pl-2 py-2 flex justify-center overflow-x-auto whitespace-nowrap">
        {aboutLinks.map((item) => (
          <button
            key={item.index}
            onClick={() => {
              setselectedIndex(item?.index);
              setselectedName(item?.name);
            }}
            className={
              selectedIndex === item?.index
                ? "bg-white text-[#0D92F4] font-semibold mr-3 cursor-pointer p-2 rounded-lg"
                : "text-white p-2 font-semibold mr-3 cursor-pointer"
            }
          >
            {item.name}
          </button>
        ))}
      </div>

      {selectedIndex === 0 ? (
        <AboutUs />
      ) : selectedIndex === 1 ? (
        <Teach />
      ) : selectedIndex === 2 ? (
        <Pastor />
      ) : (
        selectedIndex === 3 && <Gallery />
      )}

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
