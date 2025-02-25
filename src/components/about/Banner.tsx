import React from "react";
import Header from "../common/Header";
import banner from "../../assets/about.jpg";

export default function Banner() {
  return (
    <div>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-[#0000ff42] bg-opacity-70"></div>

        <Header />

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-[80vh] px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-snug max-w-3xl">
            We exist to love God, love people, and make disciples of Jesus
            Christ.
          </h1>
        </div>
      </div>
    </div>
  );
}
