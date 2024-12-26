import React, { useState } from "react";
import { RiMenuSearchLine } from "react-icons/ri";
import { Editor } from "primereact/editor";

export default function Purchase() {
  const [text, setText] = useState("");

  return (
    <div className="h-auto w-screen flex flex-col justify-center items-start pl-16">
      {/* Breadcrumb Section */}
      <div className="flex gap-4 mb-4">
        <p className="text-3xl hover:text-orange-400">Dashboard</p>
        <p className="text-3xl">/</p>
        <p className="text-3xl hover:text-orange-400">Purchase</p>
        <p className="text-3xl">/</p>
        <span className="text-gray-500 text-3xl">Create</span>
      </div>

      {/* Main Container */}
      <div className="h-[190vh] w-[90vw] flex flex-col gap-6 items-center bg-white border border-b-0 border-gray-200 px-5 py-5 mt-10">
        {/* Header */}
        <div className="h-12 w-[90vw] border-b border-gray-200 flex items-center pl-5">
          <p className="text-xl text-gray-500">Purchase</p>
        </div>

        {/* Input Fields */}
        <div className="w-full flex flex-wrap gap-10">
          <div className="flex flex-col w-[48%] space-y-2">
            <label className="text-gray-500">DATE*</label>
            <input
              type="date"
              className="h-12 w-full border border-gray-200 px-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-[48%] space-y-2">
            <label className="text-gray-500">REFERENCE NO*</label>
            <input
              type="text"
              className="h-12 w-full border border-gray-200 px-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-[48%] space-y-2">
            <label className="text-gray-500">STATUS*</label>
            <select
              className="h-12 w-full border border-gray-200 px-2 outline-none"
            >
              <option value="">Select Status</option>
              <option>Pending</option>
              <option>Ordered</option>
              <option>Received</option>
            </select>
          </div>

          <div className="flex flex-col w-[48%] space-y-2">
            <label className="text-gray-500">ATTACHMENTS*</label>
            <input
              type="file"
              className="h-12 w-full border border-gray-200 bg-gray-50 px-2 outline-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col w-[48%] space-y-2">
            <label className="text-gray-500">SUPPLIER*</label>
            <input
              type="text"
              className="h-12 w-full border border-gray-200 px-2 outline-none"
            />
          </div>
        </div>

        {/* Warning Section */}
        <div className="h-14 w-full flex items-center rounded-lg bg-amber-100 pl-5">
          <p className="text-xl text-red-500">
            Please select these before adding any product
          </p>
        </div>

        {/* Add Products Section */}
        <div className="w-full">
          <label className="text-gray-500">ADD PRODUCTS*</label>
          <div className="h-12 w-full border flex items-center gap-5 px-4 border-gray-200 text-lg text-gray-500">
            <RiMenuSearchLine className="text-xl text-gray-500" />
            <p>Select One</p>
          </div>
        </div>

        {/* Products Table */}
        <div className="w-full">
          <label className="text-gray-500">PRODUCTS</label>
          <div className="mt-5 border border-gray-200">
            <div className="h-[50px] w-full flex items-center justify-evenly bg-gray-50 border-b border-gray-200">
              <p className="text-sm text-gray-500 w-20">PRODUCT</p>
              <p className="text-sm text-gray-500 w-20">UNIT COST</p>
              <p className="text-sm text-gray-500 w-20">QUANTITY</p>
              <p className="text-sm text-gray-500 w-20">DISCOUNT</p>
              <p className="text-sm text-gray-500 w-20">TAXES</p>
              <p className="text-sm text-gray-500 w-20">SUBTOTAL</p>
              <p className="text-sm text-gray-500 w-20">ACTIONS</p>
            </div>
            <div className="h-[50px] w-full flex items-center justify-evenly border-t-0 border-gray-200">
              <p className="text-sm text-gray-500 font-semibold w-20">TOTAL</p>
              <p className="text-sm text-gray-500 w-20"> </p>
              <p className="text-sm text-gray-500 w-20">0</p>
              <p className="text-sm text-gray-500 w-20">0.00</p>
              <p className="text-sm text-gray-500 w-20">0.00</p>
              <p className="text-sm text-gray-500 w-20">0.00</p>
              <p className="text-sm text-gray-500 w-20"> </p>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="w-[90vw] h-auto  flex flex-col justify-center items-left bg-white border-l border-gray-300 border-r ">
          <label className="text-gray-500 pl-5">NOTE</label>
          <div className="h-auto w-[90vw] flex justify-center items-center p-5 ">
            <Editor className="w-[90vw] h-[300px]"
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              style={{ height: "350px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
