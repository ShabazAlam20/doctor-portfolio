import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex flex-nowrap gap-3 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button className="p-1 rounded-full bg-white shadow" onClick={prev}>
          <FaChevronLeft size={20} className="cursor-pointer text-black" />
        </button>
        <button className="p-1 rounded-full bg-white shadow" onClick={next}>
          <FaChevronRight size={20} className="cursor-pointer text-black" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
