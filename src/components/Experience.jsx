import React from "react";
import IMG5 from "../assets/img5.jpeg";
import IMG6 from "../assets/img6.jpeg";
import IMG7 from "../assets/img7.jpeg";

function Experience() {
  const skills = [
    {
      id: 1,
      src: IMG5,
      title: "Fetal Medicine",
      description:
        "As one of the leading Fetal Medicine specialists in the UAE, Dr Sabari provides a comprehensive range of fetal ultrasound scans/screenings, diagnostics tests and treatments.",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: IMG6,
      title: "Obstetrics",
      description:
        "From your initial consultation until you hold your baby for the very first time, Dr Sabari and her team will provide you with a bespoke model of care, to make sure the miracle of bringing your baby’s life into the world is an incredible journey, that grows into a magical hope and lifetime experience you will never forget.",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: IMG7,
      title: "Gynecology",
      description:
        "The journey of womanhood is wonderful yet complex: from puberty to menopause, the female body undergoes many changes. A variety of health conditions can affect the female body, hence it is important to have regular check-ups at every stage of life, to pass through this journey with grace.",
      style: "shadow-yellow-500",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="py-24 px-5 md:py-24 md:px-32">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-0 mt-20">
          {skills.map(({ id, src, title, style, description }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style} cursor-pointer text-xs`}
            >
              <img src={src} alt="obgyn" className="mt-2 h-20 w-40 mx-auto rounded-lg" />
              <p className="p-4">{title}</p>
              <p className="p-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
