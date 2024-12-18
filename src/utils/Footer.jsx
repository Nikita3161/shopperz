import React from "react";
import { FaLocationDot, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaApple, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[550px] w-screen bg-gray-800 text-white flex flex-col justify-between items-center">
      <div className="flex justify-evenly items-center h-[500px] w-screen ">
        <div className="h-[500px] w-[500px] flex flex-col justify-center items-left text-white gap-10">
          <div>
            <img
              src={require("../assets/theme-footer-logo.png")}
              alt="name"
              className="h-20 w-[200px] object-contain"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-xl">Subscribe to our newsletter</p>
            <div className="flex h-12 w-[500px] px-3 bg-white outline-none rounded-full justify-center items-center ">
              <input
                type="email"
                className="h-12 w-full rounded-full outline-none text-black "
                placeholder="Your Email Address"
              />
              <button
                type="button"
                className="h-10 w-[150px] flex justify-center items-center bg-yellow-500 text-white font-semibold rounded-full"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-start items-center h-auto w-full gap-5">
            <div className="h-10 w-10 flex justify-center items-center bg-white text-gray-800 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200">
              <FaFacebook className=" text-xl " />
            </div>
            <div className="h-10 w-10 flex justify-center items-center bg-white text-gray-800 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200">
              <FaXTwitter className=" text-xl " />
            </div>
            <div className="h-10 w-10 flex justify-center items-center bg-white text-gray-800 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200">
              <FaInstagram className=" text-xl " />
            </div>
            <div className="h-10 w-10 flex justify-center items-center bg-white text-gray-800 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200">
              <FaYoutube className=" text-xl " />
            </div>
          </div>
        </div>
        <div className="h-[500px] w-auto flex flex-col justify-center items-left space-y-8">
          <div>
            <p className="text-2xl font-semibold">Support</p>
          </div>
          <div className="space-y-2">
            <a href="/fa">
              {" "}
              <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
                FAQ
              </p>
            </a>
            <a href="/return">
              {" "}
              <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
                Return & Exchange
              </p>
            </a>
            <a href="/shipping">
              {" "}
              <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
                Shipping
              </p>
            </a>
            <a href="/size">
              {" "}
              <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
                Size Charts
              </p>
            </a>
          </div>
        </div>
        <div className="h-[500px] w-auto flex flex-col justify-center items-left space-y-10 mt-6">
          <div>
            <p className="text-2xl font-semibold">Legal</p>
          </div>
          <div className="space-y-2">
          <a href="/cook"> <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
              Cookies Policy
            </p></a> 
            <a href="/term"> <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
              Terms & Conditions
            </p></a>
            <a href="/policy"><p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
              Privacy Policy
            </p></a>
            <a href="/about">  <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
              About Us
            </p></a>
            <a href="/contact">   <p className="hover:text-orange-400 transition-all duration-1000 font-semibold">
              Contact Us
            </p></a>
          </div>
        </div>
        <div className="h-[500px] w-[250px] flex flex-col justify-center items-left space-y-8 mt-11">
          <div>
            <p className="text-2xl font-semibold">Contact</p>
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <FaLocationDot className="text-3xl text-white font-bold" />
              <p>House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216</p>
            </div>
            <div className="flex space-x-2">
              <IoMailSharp className="text-3xl text-white font-bold" />
              <p>info@inilabs.net</p>
            </div>
            <div className="flex space-x-2">
              <BiSolidPhoneCall className="text-3xl text-white font-bold" />
              <p>13333846282</p>
            </div>
            <div className="flex w-full justify-center items-center gap-4">
              <div className="w-[130px] h-10 bg-gray-200 flex justify-around items-center rounded-lg">
                <img
                  src={require("../assets/google-play (1).png")}
                  alt="name"
                  className="h-[20px] w-[20px]"
                />
                <div className="flex-col">
                  <p className="text-xs text-gray-500">Android app On</p>
                  <p className="text-sm text-gray-500 font-bold">Google Play</p>
                </div>
              </div>
              <div className="w-[130px] h-10 bg-gray-200 flex justify-around items-center rounded-lg">
                <FaApple className="font-bold text-lg text-black" />
                <div className="flex-col">
                  <p className="text-xs text-gray-500 ">Download On the</p>
                  <p className="text-sm text-gray-500 font-bold">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 w-screen flex justify-center items-center bg-gray-800  shadow-lg border-t-2 border-t-gray-700">
        <p className="text-sm font-semibold text-white">
          &copy; Shopperzz by iNiLabs 2024, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
