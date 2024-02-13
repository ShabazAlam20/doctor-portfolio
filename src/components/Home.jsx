import React from "react";
import HeroPic from "../assets/DoctorPic2.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Home.css";

function Home({ nav, setNav }) {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center md:items-start"
    >
      <div className="w-full flex flex-col h-full px-4 md:flex-row md:mt-24 md:items-center">
        <img
          src={HeroPic}
          alt="profile"
          className="rounded-full shadow-2xl h-[250px] w-[180px] mb-5 md:hidden self-center"
        />

        <div className="flex flex-col justify-center h-full md:w-3/4 md:ml-40">
          {/* <h2 className="text-3xl font-bold text-white animate-charcter marqueeStyle w-full">
            Obstetrics and Gynaecology Laparoscopic surgeon  Cosmetic Gynaecology
          </h2> */}
          {/* <div className="w-36">
            <div className="relative overflow-hidden h-10">
              <p className="marquee-text text-3xl font-bold text-white absolute animate-charcter">
                Obstetrics and Gynaecology Laparoscopic Surgeon Cosmetic
                Gynaecology
              </p>
            </div>
          </div> */}
          {!nav && (
            <div className="marquee-container h-10">
              <div className="scrolling text-3xl font-bold animate-charcter text-white">
                Obstetrics and Gynaecology Laparoscopic Surgeon Cosmetic
                Gynaecology
              </div>
            </div>
          )}

          <p className="text-gray-500 py-4">
            Dr. Sabari Dey is a highly accomplished and experienced
            Obstetrician, Aesthetic Gynaecologist, and Laparoscopic Surgeon with
            more than 15 years of experience in her field. After completing her
            Bachelor&#39;s degree in medicine from Maulana Azad Medical College,
            one of the most prestigious medical colleges in India, she pursued
            her passion for gynaecology by working on various government
            projects.
          </p>
          <div className="flex gap-4">
            <Link
              to="services"
              smooth
              duration={500}
              className="text-xs md:text-base group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Services
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="text-xs md:text-base group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Book Appointment
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={HeroPic}
            alt="profile"
            className="rounded-2xl mx-auto w-1/2 md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
