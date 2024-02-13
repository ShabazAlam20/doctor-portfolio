import React from "react";
import IMG1 from "../assets/img1.jpeg";
import IMG2 from "../assets/img2.jpeg";
import IMG3 from "../assets/img3.jpeg";
import IMG4 from "../assets/img4.jpg";

function Gallery() {
  const portfolios = [
    {
      id: 1,
      src: IMG1,
    },
    {
      id: 2,
      src: IMG2,
    },
    {
      id: 3,
      src: IMG3,
    },
    {
      id: 4,
      src: IMG4,
    },
  ];
  return (
    <div
      name="gallery"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="py-24 px-5 md:py-24 md:px-32">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Gallery
        </p>
        <p className="py-6">Check out some of my work right here</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg w-full md:h-full">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110 cursor-pointer  w-full md:h-full"
              />
              {/* <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
