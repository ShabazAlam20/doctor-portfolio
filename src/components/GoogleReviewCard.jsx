import React from "react";
import { Link } from "react-scroll";
import { AiFillStar } from "react-icons/ai";

function GoogleReviewcard({ name, date, rating, review }) {
  return (
    <div className="bg-zinc-100 rounded-md shadow-md p-5 flex flex-col gap-2">
      <div className="flex gap-2">
        <p className="px-2 h-6 rounded-full bg-red-500 shadow-lg">
          {name && name.charAt(0)}
        </p>
        <div className="flex flex-col">
          <p className="text-black text-[10px]">{name}</p>
          <p className="text-black text-[8px]">{date}</p>
        </div>
      </div>

      <div className="w-full flex">
        <AiFillStar className="text-orange-400" />
        <AiFillStar className="text-orange-400" />
        <AiFillStar className="text-orange-400" />
        <AiFillStar className="text-orange-400" />
        <AiFillStar className="text-orange-400" />
      </div>
      <div className="h-40 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <p className="text-black text-[10px] font-light">{review}</p>
      </div>
    </div>
  );
}

export default GoogleReviewcard;
