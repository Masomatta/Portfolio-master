import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa"; 
import emailjs from "emailjs-com";
import Footer from "../component/Footer";

const Contact = () => {
  // Define the state to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); 
  const [statusMessage, setStatusMessage] = useState(""); 

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading state to true
    setLoading(true);
    setStatusMessage(""); // Reset status message on submit

    // Get the form values
    const { firstName, lastName, email, subject, message } = formData;

    // Send the form data using Email.js
    emailjs
      .sendForm(
        "service_1fkndoy",  // Your EmailJS service ID
        "template_35396so",  // Your EmailJS template ID
        e.target,            // The form DOM element (we send the form itself)
        "hp_7f1LFd1zcrcVt5" // Your EmailJS public key (User ID)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setLoading(false); // Stop loading spinner
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setLoading(false); // Stop loading spinner
          setStatusMessage("Error sending message. Please try again later.");
        }
      );

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-[#0C0413] flex flex-col justify-center items-center">
        <span className="text-white flex text-2xl font-poppins"> Contact</span>
        <span className="font-semibold text-xl text-fuchsia-600">Me</span>
        <div className="text-white flex flex-col items-center w-full max-w-xl">
          <div className="shadow-lg rounded-lg p-6  bg-transparent shadow-purple-700">
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Last Name */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-x-2 space-y-4 sm:space-y-0">
                <input
                  className="sm:w-1/2 border border-purple-700 rounded-md focus:outline-none p-2"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
                <input
                  className="w-full sm:w-1/2 border border-purple-700 rounded-md focus:outline-none p-2"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Email and Subject */}
              <div className="flex flex-col sm:flex-row space-x-4 space-y-4 sm:space-y-0">
                <input
                  className="w-full sm:w-1/2 border border-purple-700 rounded-md focus:outline-none p-2"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <input
                  className="w-full sm:w-1/2 border border-purple-700 rounded-md focus:outline-none p-2"
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Message Box */}
              <div className="relative flex justify-center items-center mt-6">
                <textarea
                  className="w-full h-32 border border-purple-700 rounded-md focus:outline-none p-2 text-left"
                  name="message"
                  value={formData.message}
                  placeholder="Your Message"
                  required
                  onChange={handleChange}
                ></textarea>

                {/* Icons surrounding the message box */}
                <div className="absolute top-[-60px] sm:left-[-50px] left-[0px] text-3xl md:text-4xl">
                  <FaPhoneAlt className="text-purple-950 opacity-15" />
                </div>
                <div className="absolute top-[-120px] sm:right-[-100px] right-[0px] text-3xl md:text-4xl">
                  <FaCommentDots className="text-purple-950 opacity-30" />
                </div>
              </div>

              {/* Show Success or Error Message */}
              {statusMessage && <p className="text-green-500">{statusMessage}</p>}

              {/* Send Button */}
              <button
                type="submit"
                className="bg-purple-950 text-white items-center rounded-md py-1.5 px-1 hover:bg-purple-800 transition duration-300 w-full sm:w-auto"
                disabled={loading} // Disable button while sending
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
