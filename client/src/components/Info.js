import React, { useState } from "react";
import Profile from "./Profile";

const Info = ({ fName, lName, email, phone, batch }) => {
  return (
    <>
      <form action="/POST" className="">
        <div className="flex flex-col space-y-2 shadow-2xl p-[10px] w-[400px] h-auto rounded-xl  bg-white ">
          <div>
            <label htmlFor="" className="text-xl">
              First Name
            </label>
          </div>
          <div>
            <input
              className="w-[100%]  p-1 rounded-lg border-slate-400"
              type="text"
              value={fName}
              disabled
            />
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              Last Name
            </label>
          </div>
          <div>
            <input
              className=" w-[100%]  p-1 rounded-lg border-slate-400"
              type="text"
              value={lName}
              disabled
            />
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              Email
            </label>
          </div>
          <div>
            <input
              className="w-[100%] p-1 rounded-lg border-slate-400"
              type="text"
              value={email}
              disabled
            />
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              Phone Number
            </label>
          </div>
          <div>
            <input
              className="w-[100%]  p-1 rounded-lg border-slate-400"
              type="number"
              value={phone}
              disabled
            />
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              Batch
            </label>
          </div>
          <div>
            <select
              className="w-[100%]  p-1 rounded-lg border-slate-400"
              value={batch}
              disabled
            >
              <option disabled selected>
                Choose your batch
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          <button className="bg-blue-400  border-2 rounded-lg p-2 text-white">
            Edit
          </button>
        </div>
      </form>
    </>
  );
};

export default Info;
