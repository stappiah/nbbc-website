import children from "../../assets/children.jpg";

export default function Children() {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img
            src={children}
            alt="children's ministries"
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Children's Ministries
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum
            atque, dignissimos magnam, nisi accusamus deleniti veritatis vitae
            similique blanditiis obcaecati pariatur voluptatibus sequi hic
            voluptas tempora! Repudiandae, accusamus nisi.
          </p>
        </div>
      </div>
    </div>
  );
}