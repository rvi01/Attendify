import React, { useState } from "react";
import LockImage from "../images/lock.png";

import Info from "./Info";

const Profile = () => {
  const [fName, setFname] = useState("N/A");
  const [lName, setLname] = useState("N/A");
  const [email, setEmail] = useState("N/A");
  const [phone, setNumber] = useState("N/A");
  const [batch, setBatch] = useState("N/A");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const getData = (e) => {
    e.preventDefault();
    setData([
      "Full Name:",
      fName,
      " ",
      lName,
      " ",
      "Email:",
      email,
      " ",
      "Phone Number:",
      phone,
      " ",
      "Batch:",
      " ",
      batch,
    ]);
  };

  return (
    <>
      <div className="bg-gray-50 h-screen ">
        <div className=" flex flex-wrap border-2 justify-evenly  items-center h-[100vh]">
          <div className="flex flex-col items-center space-y-10">
            <p className="text-6xl">My Profile</p>
            <img classname="" src={LockImage} alt="na" />
          </div>

          {show ? (
            <form action="/POST" className="" onSubmit={getData}>
              <div className="flex flex-col space-y-2 shadow-2xl p-[10px] w-[400px] h-auto rounded-xl  bg-white ">
                <div>
                  <label htmlFor="" className="text-xl">
                    First Name
                  </label>
                </div>
                <div>
                  <input
                    className="w-[100%] border-2 p-1 rounded-lg border-slate-400"
                    placeholder="Enter your first name"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xl">
                    Last Name
                  </label>
                </div>
                <div>
                  <input
                    className=" w-[100%] border-2 p-1 rounded-lg border-slate-400"
                    placeholder="Enter your last name"
                    type="text"
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xl">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    className="w-[100%] border-2 p-1 rounded-lg border-slate-400"
                    placeholder="Enter your email"
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                </div>
                <div>
                  <input
                    className="w-[100%] border-2 p-1 rounded-lg border-slate-400"
                    placeholder="(xxx)-xxx-xxxx"
                    type="number"
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xl">
                    Batch
                  </label>
                </div>
                <div>
                  <select
                    className="w-[100%] border-2 p-1 rounded-lg border-slate-400"
                    onChange={(e) => {
                      setBatch(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      Choose your batch
                    </option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>

                <button
                  onClick={() => (show ? setShow(false) : setShow(true))}
                  className="bg-blue-400  border-2 rounded-lg p-2 text-white"
                >
                  Submit
                </button>
                {data}
              </div>
            </form>
          ) : (
            <Info
              fName={fName}
              lName={lName}
              email={email}
              phone={phone}
              batch={batch}
              show={show}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
