import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="py-24 px-5 md:py-24 md:px-32">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
        <div className="flex flex-col gap-5 mt-10 text-sm md:text-xl overflow-auto">
          <p>
            Dr. Dey is committed to providing the latest and most effective
            treatment to her patients, and she has continued to improve her
            skill set throughout her career. She has completed a Master&#39;s
            certification in hysteroscopy and a fellowship in Minimal Access
            Surgery from Sunrise Hospital, Delhi. She has also received a
            fellowship in Cosmetic Gynaecology and Regenerative Medicine,
            allowing her to provide cutting-edge treatments to her patients.
          </p>
          <p>
            Dr. Dey has contributed significantly to the field of Gynaecology
            through her numerous research papers and publications. Her
            dedication and passion for her field are evident in her approach to
            patient care, where she strives to provide the best possible
            treatment to her patients with the utmost compassion.
          </p>
          <p>
            Dr. Dey&#39;s expertise covers a broad range of areas. Her services
            include antenatal and postnatal care, high-risk pregnancy
            management, menstrual disorders, infertility management,
            laparoscopic surgeries, hysteroscopy, cosmetic gynaecology, and
            regenerative medicine.
          </p>
          <p>
            Dr. Dey&#39;s passion for her field, combined with her extensive
            experience and training, make her one of the best Obstetricians and
            Gynaecologists in the region. She is committed to providing
            personalised and compassionate care to her patients, ensuring their
            overall well-being and health.
          </p>
        </div>
        <div className="pt-10 flex flex-col gap-3 lg:hidder md:hidden">
          <p className="font-bold">Links</p>
          <div className="flex justify-center gap-5 w-full items-center">
            <a
              href="https://ae.linkedin.com/in/dr-sabari-dey"              
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30}/>
            </a>
            <a
              href="https://www.instagram.com/drsabaridey_obgyn/'"             
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30}/>
            </a>
            <a
              href="mailto:sabarinandi83@gmail.com"            
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={30}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
