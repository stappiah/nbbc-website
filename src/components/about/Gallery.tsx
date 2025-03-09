import first from "../../assets/gallery1.jpg";
import second from "../../assets/gallery2.jpg";
import third from "../../assets/gallery3.jpg";
import fourth from "../../assets/gallery4.jpg";
import fifth from "../../assets/gallery5.jpg";
import sixth from "../../assets/gallery6.jpg";

export default function Gallery() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 p-4 bg-white shadow-lg rounded-lg">
        <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
          <img src={first} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
          <img src={second} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
          <img src={third} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
          <img src={fourth} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
          <img src={fifth} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
          <img src={sixth} alt="Gallery" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}
