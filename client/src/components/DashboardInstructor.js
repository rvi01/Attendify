import React, { useEffect, useState } from "react";
import { useNavigate,useLocation  } from 'react-router-dom';
import Header from "./Header";
import g8 from "../images/g8.png";
import Footer from "./Footer";
import Select from "react-select";
import { CSVLink } from "react-csv";

const DashboardInstructor = () => {
  const location = useLocation ();
  const { userData } = location.state;
  const appearances = [
    {
      Name: "Swastik Sharma",
      Batch: "MERN",
      Date: "01-07-2024",
      Time: "10 AM",
      Status: "Absent",
    },
    {
      Name: "Swastik Sharma",
      Batch: "ANGULAR",
      Date: "01-07-2024",
      Time: "10 AM",
      Status: "Present",
    },
    {
      Name: "Swastik Sharma",
      Batch: "ANGULAR",
      Date: "01-07-2024",
      Time: "10 AM",
      Status: "Absent",
    },
    {
      Name: "Swastik Sharma",
      Batch: "MERN",
      Date: "01-07-2024",
      Time: "10 AM",
      Status: "Present",
    },
  ];
  const options = [
    { value: "MERN", label: "Mern" },
    { value: "ANGULAR", label: "Angular" },
    { value: "JAVA", label: "Java" },
    { value: "RESET", label: "Reset" },
  ];
  const [list, setList] = useState(appearances);
  const handleFilter = (e) => {
    if (e.value === "RESET") {
      setList(appearances);

      return;
    }
    const filteredArray = appearances.filter(
      (appearance) => appearance.Batch === e.value
    );
    console.log("FilteredArray: ", filteredArray);
    setList(filteredArray);
    console.log("List: ", list);
  };

  return (
    <>
      <Header userData={userData}/>
      <div className="bg-slate-100 pt-[50px]">
        <div className="flex justify-between ml-[189px] mr-[189px] bg-white rounded-xl  ">
          <div className="flex flex-col  my-[43px] ml-[42.71px]   space-y-4  ">
            <p className="font-bold text-4xl leading-[45.18px] ">
              Welcome Back, Deep!
            </p>
            <p
              className="font-normal text-xl leading-6"
              style={{ color: "rgba(102,102,102,1)" }}
            >
              You have an upcoming class on 24th January, 2024
            </p>

            <span
              className="text-base hover:cursor-pointer w-[100px]"
              style={{ color: "#001270" }}
            >
              View Class {">"}
            </span>
          </div>
          <img
            className="ml-[61px] my-[18px] mr-[51px] "
            clas
            src={g8}
            alt=""
          />
        </div>
        <div className=" ml-[189px] mr-[189px] mt-[36.46px]   bg-white rounded-xl h-auto">
          <div className="flex justify-between">
            <p className="font-bold text-2xl leading-6 pt-[36px] ml-[43px]">
              Students Attendance
            </p>

            <CSVLink
              className="border border-blue-600  h-[40px] w-[152px] mt-[36px]  rounded-lg text-xl ml-[43px] mr-[45px]"
              data={appearances}
            >
              <p className="text-center mt-[3px] text-blue-600">
                Export in Excel
              </p>
            </CSVLink>
          </div>

          <div className="flex">
            <label className="font-normal text-xl leading-6  ml-[43px] mt-[25px]">
              Filter by:
            </label>

            <Select
              className="m-[20px] w-[200px]"
              options={options}
              placeholder="Choose batch"
              noOptionsMessage={() => "No batch found.."}
              onChange={handleFilter}
            />
          </div>

          <div className="p-4">
            <div className=" flex justify-between    mx-[43px] mt-[15px] p-3 ">
              <p className="font-semibold text-xl leading-6">Name</p>
              <p className="font-semibold text-xl leading-6">Batch</p>
              <p className="font-semibold text-xl leading-6">Date</p>
              <p className="font-semibold text-xl leading-6">Time</p>
              <p className="font-semibold text-xl leading-6">Status</p>
            </div>
            {list.map((appearance) => {
              return (
                <div className=" flex justify-between  border-b-4 border-slate-200  mx-[43px] mt-[15px] p-3 ">
                  <p className="font-normal text-lg leading-5">
                    {appearance.Name}
                  </p>
                  <p className="font-normal text-lg leading-5">
                    {appearance.Batch}
                  </p>
                  <p className="font-normal text-lg leading-5">
                    {appearance.Date}
                  </p>
                  <p className="font-normal text-lg leading-5">
                    {appearance.Time}
                  </p>
                  <p
                    className={`w-[81px] py-[1.3px] px-[10.4px] rounded ${
                      appearance.Status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {appearance.Status}
                  </p>
                </div>
              );
            })}
            <span
              className="text-base text-right mt-[33px] mr-[50px] float-right hover:cursor-pointer "
              style={{ color: "#001270" }}
            >
              See More {">"}
            </span>
          </div>
        </div>
        <div className="text-center text-sm leading-5 font-normal  ml-[189px] mr-[189px] mt-[87px] p-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardInstructor;
