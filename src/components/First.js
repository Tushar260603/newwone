import React from "react";
import imgg from "./assets/girl.png"
import imgg2 from "./assets/bg.png"
import "./First.css";
const First = () => {
  return (
    <div>
      <div id="root">
        <nav className="bg-[#FFF7E2] flex justify-between px-20 items-center p-5">
          <div>
            <h1 className="text-3xl text-[#3A643B] tracking-widest font-semibold">
              AMRUTAM
            </h1>
          </div>
          <div className="flex text-md justify-start gap-4">
            <button className="text-[#474747]">Home</button>
            <button className="text-[#3A643B] font-bold">Find Doctors</button>
            <button className="text-[#474747]">About Us</button>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Login
            </button>
            <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
              Sign-Up
            </button>
          </div>
        </nav>
        <div className="bg-hero-pattern bg-contain w-screen">
          <div className="flex gap-5 h-56 flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold tracking-wider">
              Find expert Doctors for an In-clinic session here
            </h1>
            <div className="flex gap-3">
              <select className="px-5 py-2 undefined rounded-lg outline-none">
                <option>Search Location</option>
                <option value>Options...</option>
              </select>
              <select className="px-5 py-2 w-96 rounded-lg outline-none">
                <option>eg. Doctor, specification, clinical name</option>
                <option value>Options...</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-around items-center h-20 w-2/3">
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Expertise</option>
              <option value>Options...</option>
            </select>
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Gender</option>
              <option value>Options...</option>
            </select>
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Fees</option>
              <option value>Options...</option>
            </select>
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Language</option>
              <option value>Options...</option>
            </select>
            <select className="px-5 py-2   bg-green-100 rounded-lg outline-none">
              <option>All Filters</option>
              <option value>Options...</option>
            </select>
          </div>
          <p className="h-[1px] w-full bg-gray-200" />
        </div>
        <div className="p-4">
          <div className="flex mt-3 justify-end gap-6">
            <button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">
              Hair care <span className="text-gray-400">X</span>
            </button>
            <button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">
              Female <span className="text-gray-400">X</span>
            </button>
            <button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">
              Rs.0-Rs.500 <span className="text-gray-400">X</span>
            </button>
            <button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">
              Hindi <span className="text-gray-400">X</span>
            </button>
          </div>
          <div className="flex my-10 p-5 gap-10 justify-center">
            <div className=" bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4">
              <div className="flex flex-col justify-center items-center p-4 gap-4">
                <div className="flex flex-col items-center">
                  <div>
                    <img
                      className="relative z-0"
                      width={100}
                      src={imgg}
                      alt=''
                    />
                    <span className="bg-black relative bottom-5 left-8 z-10 text-sm text-white rounded-lg p-1">
                      4.2 ⭐️
                    </span>
                  </div>
                  <h1 className="text-xl font-bold">Dr. Dr. Bruce Willis</h1>
                  <p className="text-gray-400">Male-Female Infertility</p>
                  <p className="text-gray-400">7 years of Experience</p>
                  <p className="text-gray-400">
                    Speaks: English, Hindi, Marathi
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2">
                    <h1 className="text-xs">Video Consultation</h1>
                    <p className="text-green-700 font-bold">₹600</p>
                  </div>
                  <div className="flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2">
                    <h1 className="text-xs ">Chat Consultation</h1>
                    <p className="text-green-700 font-bold">Free</p>
                  </div>
                </div>
                <div className="flex gap-3 w-full flex-col">
                  <button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
                    View Profile
                  </button>
                  <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white rounded-md  ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4">
              <div className="flex flex-col justify-center items-center p-4 gap-4">
                <div className="flex flex-col items-center">
                  <div>
                    <img
                      className="relative z-0"
                      width={100}
                      src={imgg}
                      alt=''
                    />
                    <span className="bg-black relative bottom-5 left-8 z-10 text-sm text-white rounded-lg p-1">
                      4.2 ⭐️
                    </span>
                  </div>
                  <h1 className="text-xl font-bold">Dr. Prerna Narang</h1>
                  <p className="text-gray-400">Male-Female Infertility</p>
                  <p className="text-gray-400">7 years of Experience</p>
                  <p className="text-gray-400">
                    Speaks: English, Hindi, Marathi
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2">
                    <h1 className="text-xs">Video Consultation</h1>
                    <p className="text-green-700 font-bold">₹600</p>
                  </div>
                  <div className="flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2">
                    <h1 className="text-xs ">Chat Consultation</h1>
                    <p className="text-green-700 font-bold">Free</p>
                  </div>
                </div>
                <div className="flex gap-3 w-full flex-col">
                  <button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
                    View Profile
                  </button>
                  <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white rounded-md  ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4">
              <div className="flex flex-col justify-center items-center p-4 gap-4">
                <div className="flex flex-col items-center">
                  <div>
                    <img
                      className="relative z-0"
                      width={100}
                      src={imgg}
                      alt=""
                    />
                    <span className="bg-black relative bottom-5 left-8 z-10 text-sm text-white rounded-lg p-1">
                      4.2 ⭐️
                    </span>
                  </div>
                  <h1 className="text-xl font-bold">Dr. Prerna Narang</h1>
                  <p className="text-gray-400">Male-Female Infertility</p>
                  <p className="text-gray-400">7 years of Experience</p>
                  <p className="text-gray-400">
                    Speaks: English, Hindi, Marathi
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2">
                    <h1 className="text-xs">Video Consultation</h1>
                    <p className="text-green-700 font-bold">₹600</p>
                  </div>
                  <div className="flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2">
                    <h1 className="text-xs ">Chat Consultation</h1>
                    <p className="text-green-700 font-bold">Free</p>
                  </div>
                </div>
                <div className="flex gap-3 w-full flex-col">
                  <button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
                    View Profile
                  </button>
                  <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white rounded-md  ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg">
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
