import Header from "../common/Header";
import banner from "../../assets/about.jpg";

export default function Banner({name}:{name:string}) {
  return (
    <div>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-[#0000008c] bg-opacity-70"></div>

        <Header />

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-[80vh] px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-snug max-w-3xl">
            We exist to love God, love people, and make disciples of Jesus
            Christ.
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center py-4 bg-[#0000008c]">
          <p className="text-2xl md:text-4xl text-white font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
}