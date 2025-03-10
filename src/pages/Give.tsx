import { Button, Input, Modal, Radio, RadioChangeEvent } from "antd";
import give from "../assets/give.jpg";
import Header from "../components/common/Header";
import { useState } from "react";

const GivePage = () => {
  const [openModal, setopenModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email_address: "",
    occupation: "",
    gender: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e: RadioChangeEvent) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
    setopenModal(false);
  };
  return (
    <div>
      <Header />
      <div
        className="relative bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${give})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text contrast */}
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold pt-3">Support Our Ministry</h2>
          <p className="mt-4 text-lg">
            Your generosity helps us spread love and faith to those in need.
            Thank you for partnering with us.
          </p>

          <div className="mt-8">
            <h3 className="text-3xl font-semibold">Ways to Give</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Give Online Card */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-800">
                  Give Online
                </h4>
                <p className="mt-4 text-gray-600">
                  Donate securely online using your debit or credit card. It's
                  quick and easy.
                </p>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://give.tithe.ly/?formId=9dacc12c-6865-11ee-90fc-1260ab546d11")
                  }
                  className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Give Now
                </button>
              </div>

              {/* Give Via Text Card */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-800">
                  Become a partner
                </h4>
                <p className="mt-4 text-gray-600">
                  You can also become a partner with the ministry to help
                  promote the gospel.
                </p>
                <button
                  onClick={() => setopenModal(true)}
                  className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  Join Us
                </button>
              </div>

              {/* Give Via Check Card */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-gray-800">
                  Give by Check
                </h4>
                <p className="mt-4 text-gray-600">
                  You can also send a check made payable to our church's name.
                </p>
                <button className="mt-6 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
                  Mail a Check
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold">
              Other Ways to Get Involved
            </h3>
            <p className="mt-4 text-lg">
              Your contributions don’t just make a difference through monetary
              gifts. We also welcome your time and resources. Here's how you can
              help:
            </p>
            <ul className="mt-4 text-left space-y-2">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></span>{" "}
                Volunteer Opportunities
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></span>{" "}
                Partner with Us for Events
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></span>{" "}
                Donate Goods & Services
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="text-sm">
              If you have any questions or need assistance, feel free to contact
              us at{" "}
              <a
                href="mailto:support@church.org"
                className="text-blue-300 underline"
              >
                support@church.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <Modal
        open={openModal}
        onCancel={() => setopenModal(false)}
        footer={null}
        centered
      >
        <div className="p-4">
          <p className="text-2xl text-center font-medium text-[#0D92F4] mb-4">
            Become Partner
          </p>
          <div className="pb-1.5">
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-1.5">
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-2">
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-4">
            <Input
              name="email_address"
              placeholder="Email Address"
              value={formData.email_address}
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-4">
            <Input
              name="occupation"
              placeholder="Occupation"
              value={formData.email_address}
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-4">
            <Radio.Group onChange={handleGenderChange} value={formData.gender}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </div>
          <Button type="primary" onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default GivePage;
