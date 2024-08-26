import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_67m4quc",
        "template_ftja63q",
        form.current,
        "LeJk40qTcF1yAzkFv"
      )
      .then(
        (result) => {
          console.log("line number 19 ", result);
          if (result.status === 200) {
            setStatus(true);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-scroll md:overflow-hidden"
    >
      <div className="py-24 px-5 md:py-24 md:px-32">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
        </p>
        <p className="py-6">Please fill the details to book an appointment.</p>
        <div className="flex justify-center items-center px-10 md:px-0">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="from_email"
              placeholder="Enter your email"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="from_mobile"
              placeholder="Enter your mobile"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300"
            >
              Book Apointment
            </button>
            {status && (
              <div className="text-center">
                <p className="text-xl text-white self-center">
                  We have received your request and will shortly contact with
                  you to confirm the appointment.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
