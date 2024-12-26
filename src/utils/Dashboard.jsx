import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { TbFileExport } from "react-icons/tb";
import { IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Dashboard() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-left bg-gray-100 px-48">
      <h1 className="text-3xl">
        Dashboard / <span className="text-gray-500 text-3xl">Purchase</span>
      </h1>
      <div className="h-[470px] w-[80vw] flex flex-col justify-start mt-5 items-center bg-white border border-gray-100 shadow-lg space-y-3">
        <div className="h-20 w-full flex justify-between items-center border-b border-gray-200 px-5">
          <div>
            <p className="text-2xl  text-gray-500">Purchases</p>
          </div>

          <div className="flex space-x-5">
            <button
              type="button"
              onClick={()=>{
                setShow(!show)
              }}
              className="h-10 w-[100px] flex justify-center items-center border border-orange-400 gap-3 text-md text-orange-300"
            >
              <HiOutlineFilter className="text-orange-400 text-lg font-semibold" />
              Filter
            </button>
            <select
              className="h-10 w-[100px] flex justify-center items-center border border-orange-400 gap-3 text-md text-orange-300"
            >
              <option  className="text-gray-500 text-lg flex justify-center items-center pl-4"><TbFileExport className="text-orange-400 text-lg font-semibold" />{" "}
              Export</option>
              <option  className="text-gray-500 text-lg flex justify-center items-center pl-4"><TbFileExport className="text-orange-400 text-lg font-semibold" />{" "}
              Print</option>
              <option  className="text-gray-500 text-lg flex justify-center items-center pl-4"><TbFileExport className="text-orange-400 text-lg font-semibold" />{" "}
              XLS</option>
            </select>
            <a href="/purchase"
             
              className="h-10 w-[150px] flex justify-center items-center border bg-orange-400 gap-3 text-md text-white"
            >
              <IoMdAddCircleOutline className="text-white text-xl font-semibold" />
              Add Purchase
            </a>
          </div>
        </div>
        {show ? (
          <>
            <div className="flex justify-evenly items-center w-full h-auto   ">
              <div className="flex-col space-y-2">
                <p className="text-sm text-gray-500">SUPPLIER</p>
                <input
                  type="text"
                  className="h-12 w-[300px] border border-gray-200 bg-white text-gray-500 outline-none pl-5"
                  placeholder="--"
                />
              </div>
              <div className="flex-col space-y-2">
                <p className="text-sm text-gray-500">DATE</p>
                <input
                  type="date"
                  className="h-12 w-[300px] border border-gray-200 bg-white text-gray-500 outline-none pl-5"
                />
              </div>
              <div className="flex-col space-y-2">
                <p className="text-sm text-gray-500">REFERENCE NO</p>
                <input
                  type="text"
                  className="h-12 w-[300px] border border-gray-200 bg-white text-gray-500 outline-none pl-5"
                  placeholder="--"
                />
              </div>
              <div className="flex-col space-y-2">
                <p className="text-sm text-gray-500">STATUS</p>
                <select className="h-12 w-[300px] border border-gray-200 bg-white text-gray-500 outline-none pl-5">
                  <option>--</option>
                  <option>Pending</option>
                  <option>Ordered</option>
                  <option>Received</option>
                </select>
              </div>
            </div>
            <div className="flex justify-start items-center w-full h-auto  px-7 gap-8 ">
              <div className="flex-col space-y-2">
                <p className="text-sm text-gray-500">TOTAL</p>
                <input
                  type="text"
                  className="h-12 w-[300px] border border-gray-200 bg-white text-gray-500 outline-none pl-5"
                  placeholder="--"
                />
              </div>
              <div className="flex-col space-y-2">
                <p className="text-sm text-gray-500">NOTE</p>
                <input
                  type="text"
                  className="h-12 w-[300px] border border-gray-200 bg-white text-gray-500 outline-none pl-5"
                />
              </div>
            </div>
            <div className="h-auto w-full flex justify-start items-center px-7 gap-5">
              <button
                type="button"
                className="h-12 w-[100px] bg-yellow-600 text-white flex justify-center items-center gap-2 rounded-md"
              >
                <IoSearch />
                Search
              </button>
              <button
                type="button"
                className="h-12 w-[100px] bg-gray-600 text-white flex justify-center items-center gap-2 rounded-md"
              >
                <IoMdClose />
                Close
              </button>
            </div>
          </>
        ) : null}
        <div className="flex justify-evenly items-center h-16 w-full border-b-4 border-t  border-gray-200 ">
          <p className="text-lg text-gray-500">SUPPLIER</p>
          <p className="text-lg text-gray-500">DATE</p>
          <p className="text-lg text-gray-500">REFERENCE NO</p>
          <p className="text-lg text-gray-500">STATUS</p>
          <p className="text-lg text-gray-500">TOTAL</p>
          <p className="text-lg text-gray-500">PAYMENT STATUS</p>
          <p className="text-lg text-gray-500">ACTION</p>
        </div>
        <div className="flex justify-start items-center h-16 w-full border-b border-gray-200 px-5 ">
          <p className="text-md text-gray-500">Showing to of entries</p>
        </div>
      </div>
    </div>
  );
}
