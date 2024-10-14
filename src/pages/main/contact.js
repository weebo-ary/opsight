import React, { useState } from "react";
import VideoContact from "../../assets/Video/Contact.mp4";
import TrustUs from "./Home/trustus";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "general-query",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbwBOs2yVtOluvC5g6YS_D9T4q-vzyDtfTaNj5lY3b4uL9O93D_82zFIkdTSDtIppqKdMA/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        alert("There was an error submitting the form");
        console.error(error);
      });
  };

  return (
    <>
      <div className="mx-0 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 lg:mb-0 lg:mt-20 xs:mt-0 lg:min-h-screen md:h-min-h-screen sm:min-h-screen xs:min-h-screen flex flex-row md:flex-row items-start justify-start sm:flex-col xs:flex-col overflow-hidden p-5 md:gap-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full min-h-screen object-cover opacity-90 dark:opacity-40 z-0"
        >
          <source src={VideoContact} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="z-10 mx-auto flex md:flex-row sm:flex-col xs:flex-col-reverse justify-between items-start gap-20 space-y-10 md:space-y-0">
          {/* Contact Information */}
          <div className="text-white max-w-md space-y-8 p-6">
            <h1 className="text-4xl font-bold">Connect with us</h1>
            <p className="text-lg">
              Feel free to contact us with your inquiries, feedback, or any
              assistance you may need. We value your feedback and are here to
              assist with any inquiries or support you may require.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-2xl"></i>
                <div>
                  <p>Email</p>
                  <p className="font-semibold">connect@opsight.ai</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fab fa-linkedin text-2xl"></i>
                <div>
                  <p>Contact</p>
                  <p className="font-semibold">+91-8770885079</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-2xl"></i>
                <div>
                  <p>Headquarter</p>
                  <p className="font-semibold">
                    A3/603, Priyadarshini Adhishthan Bawadia Kalan, Bhopal
                    (M.P.), 462026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full space-y-6">
            <h2 className="text-2xl font-bold text-gray-700">Send Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">First name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Last name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700">Type of query</label>
                <select
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.queryType}
                  onChange={(e) =>
                    setFormData({ ...formData, queryType: e.target.value })
                  }
                >
                  <option value="book-demo">Book a demo</option>
                  <option value="consultancy">Consultancy</option>
                  <option value="iiot-solution">IIOT solution</option>
                  <option value="general-query">General query</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows="5"
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <TrustUs />
    </>
  );
}

export default Contact;
