"use client";
import React from "react";
import { useEffect } from "react";
import Card from "./Components/Card";
import { useState } from "react";
import Loading from "./Components/Loading";

const page = () => {
  const [array, setarray] = useState([]);
  const [loading, setloading] = useState(true);
  const getUsers = async () => {
    try {
      setloading(false);
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setarray(data.results);
    } catch (error) {
      console.log(error + "this is an error");
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (loading === true) {
    return <Loading />;
  }
  return (
    <>
      <div className="bg-pink-50 h-screen">
        <div className="text-center font-semibold text-4xl py-8 text-gray-800 bg-gray-300 ">
          GitHub User Data
        </div>
        <div className="flex flex-wrap mx-20">
          {array.map((e, i) => {
            <p>Random User Data</p>;
            return (
              <Card
                key={i}
                name={e.name.first}
                picture={e.picture.large}
                age={e.dob.age}
                email={e.email}
                phone={e.phone}
                city={e.location.city}
                number={e.location.street.number}
                rating={e.registered.age}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
