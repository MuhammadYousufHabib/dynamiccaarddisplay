import React from "react";

const Card = ({ name, picture, age, email, phone, city, number, rating }) => {
  return (
    <>
      <div className="flex m-auto p-5 ">
        <div className="left bg-blue-300  w-40 h-40 rounded-l-lg ">
          <img className="p-4  " src={picture} alt="X"></img>
        </div>
        <div className="right bg-blue-100 w-60 h-40 inline rounded-r-lg p-3">
          <p className="font-semibold text-gray-600">{name}</p>
          <div className="text-sm font-light text-gray-500 overflow-x-clip">
            {email}

            <p className="">Phone: {phone}</p>
            <p className="">City: {city}</p>
          </div>

          <div className="flex gap-1 my-2">
            <div className=" text-gray-600 font-semibold text-lg  border bg-blue-200 h-12 w-20  rounded-md">
              <p className="text-xs font-light text-center">Followers</p>
              <p className="text-center">{number}</p>
            </div>
            <div className=" text-gray-600 font-semibold text-lg  border bg-blue-200 h-12 w-20  rounded-md">
              <p className="text-xs font-light text-center">Rating</p>
              <p className="text-center">{rating % 10}</p>
            </div>
            <div className=" text-gray-600 font-semibold text-lg  border bg-blue-200 h-12 w-20  rounded-md">
              <p className="text-xs font-light text-center">Age</p>
              <p className="text-center">{age}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
