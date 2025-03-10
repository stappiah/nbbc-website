import { useNavigate } from "react-router-dom";
import sermon from "../../assets/sermon.jpeg";

  export default function Card() {
	const navigation = useNavigate();
    return (
      <div onClick={() => navigation("/sermons_details")} className="grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-lg rounded-lg my-4 p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center">
          <img
            src={sermon}
            alt="sermon"
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[300px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-2">DILIGENCE</h2>
            <p className="text-gray-500 mb-3">Blessed Dashie</p>
            <p className="text-gray-500 mb-3">
              Diligence maketh a man stand before Kings .... It's not too late to enrich your world with truth
            </p>
          </div>
          <p className="text-blue-800 font-medium">February 25, 2025</p>
        </div>
      </div>
    );
  }