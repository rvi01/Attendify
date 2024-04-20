import React, { useState } from "react";
import { useLocation  } from 'react-router-dom';
import LockImage from "../images/lock.png";

const Profile = () => {
  const location = useLocation ();
  const { userData } = location.state;
  console.log("userData =>",userData);
  const { email, selectBatch} = userData
  const [fName, setFname] = useState("N/A");
  const [lName, setLname] = useState("N/A");
  const [phone, setNumber] = useState("N/A");

  const getData = (e) => {
    alert("getData")
    e.preventDefault();
    
    try {
      const formData = {
        fName,
        lName,
        email,
        phone,
      };
      console.log("FormData =>",formData);
    } catch (error) {
      
    }
  };

  return (
    <>
      <div className="bg-gray-50 h-screen ">
        <div className=" flex flex-wrap border-2 justify-evenly  items-center h-[100vh]">
          <div className="flex flex-col items-center space-y-10">
            <p className="text-6xl">My Profile</p>
            <img classname="" src={LockImage} alt="na" />
          </div>
            <form className="" onSubmit={getData}>
              <div className="flex flex-col space-y-2 shadow-2xl p-[10px] w-[400px] h-auto rounded-xl  bg-white ">
                <div>
                  <label htmlFor="" className="text-xl">
                    First Name
                  </label>
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
                  <input
                    className="w-[100%] border-2 p-1 rounded-lg border-slate-400"
                    placeholder="Enter your email"
                    type="text"
                    value={email}
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                  <input
                    className="w-[100%] border-2 p-1 rounded-lg text-placeHolderColor border-slate-400"
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
                    className="w-[100%] border-2 p-1 rounded-lg text-placeHolderColor border-slate-400"
                    id="selectBatch"
                    value={selectBatch}
                    required
                  >
                  <option value="">Select Your Batch</option>
                  <option value="A">Batch A</option>
                  <option value="B">Batch B</option>
                  <option value="C">Batch C</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-blue-400  border-2 rounded-lg p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
