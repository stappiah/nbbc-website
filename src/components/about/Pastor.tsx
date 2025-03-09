import pastor from "../../assets/mcp2.jpg";

export default function Pastor() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="w-full h-auto rounded-lg border-4 border-gray-200 shadow-md transform transition duration-500 hover:scale-105">
        <img src={pastor} alt="MCP" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-2xl sm:text-3xl md:text-4xl text-gray-800">
          Blessed Dashie
        </p>
        <p className="mt-2 text-gray-600">
          Blessed Dashie is a Ghanaian theologian, philanthropist, motivational
          speaker, entrepreneur. He is the founder of International Central
          Gospel Church headquartered in Accra, Ghana.
        </p>
        <p className="pt-5 text-gray-600">
          Pastor Mensa Otabil is a Ghanaian theologian, philanthropist,
          motivational speaker, entrepreneur. He is the founder of International
          Central Gospel Church headquartered in Accra, Ghana.
        </p>
        <p className="pt-5 text-gray-600">
          Pastor Mensa Otabil is a Ghanaian theologian, philanthropist,
          motivational speaker, entrepreneur. He is the founder of International
          Central Gospel Church headquartered in Accra, Ghana. Central Gospel
          Church headquartered in Accra, Ghana. Central Gospel Church
          headquartered in Accra, Ghana.
        </p>
        <p className="pt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          quae, iste repellat illum ea sed sapiente illo minus ducimus,
          provident accusamus excepturi maiores vel architecto reprehenderit
          nostrum quaerat sint laudantium? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Accusantium quae, iste repellat illum
          ea sed sapiente illo minus ducimus, provident accusamus excepturi
          maiores vel architecto reprehenderit nostrum quaerat sint laudantium?
        </p>
      </div>
    </div>
  );
}
