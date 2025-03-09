import { Modal, Input, Button } from "antd";
import { useState } from "react";

export default function AboutSection() {
  const [openModal, setopenModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
    setopenModal(false);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80"
              alt="Church Cross"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0D92F4] mb-4">
              SALVATION
            </h2>
            <h3 className="text-xl text-[#FFB200] mb-6">
              HOW DO I BECOME A CHRISTIAN?
            </h3>

            <p className="text-gray-600 mb-6">
              The scripture says, "Whoever calls upon the name of the Lord will
              be saved." If you would like to know Christ, all you have to do is
              receive the free gift of salvation through Jesus Christ by saying
              a prayer of salvation.
            </p>

            <p className="text-gray-600 mb-8">
              Pray this aloud: "Lord Jesus, I repent of my sins and surrender my
              life. Wash me clean. I believe that Jesus Christ is the Son of
              God. That he died on the cross for my sins and rose again on the
              third day for my Victory, I believe that in my heart and make
              confession with my mouth, that Jesus is my Savior and Lord. I
              receive eternal life, in Jesus name, Amen."
            </p>

            <p className="text-gray-600 mb-6">
              If you prayed that prayer we ask you to fill out the form below
              and let us know. We would love to hear your testimony!
            </p>

            <p className="text-sm text-[#0D92F4] mb-8">
              John 3:16 | Romans 3:23 | Romans 5:8 | Romans 6:23 | Romans
              10:9-10, 13
            </p>

            <button
              className="bg-[#0D92F4] text-white px-6 py-3 rounded hover:bg-[#FFB200] transition-colors"
              onClick={() => setopenModal(true)}
            >
              CONTACT US
            </button>
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
            Contact Us
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
          <div className="pb-4">
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <Button type="primary" onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}
