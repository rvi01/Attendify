import React from "react";
import Header from "./Header";

import g8 from "../images/g8.png";
import Footer from "./Footer";

const DashboardStu = () => {
  const appearances = [
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Present",
    },
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Present",
    },
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Present",
    },
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Absent",
    },
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Present",
    },
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Absent",
    },
    {
      date: "01-24-2024",
      time: "10 AM",
      status: "Absent",
    },
  ];
  return (
    <>
      <Header />
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
          <span
            className="text-base text-right mt-[33px] mr-[50px] float-right hover:cursor-pointer "
            style={{ color: "#001270" }}
          >
            See More {">"}
          </span>
          <p className="font-bold text-2xl leading-6 pt-[36px] ml-[43px]">
            My Attendance
          </p>
          <div className="p-4">
            {appearances.map((appearance) => {
              return (
                <div className=" flex justify-between  border-b-4 border-slate-200  mx-[43px] mt-[15px] p-3 ">
                  <p className="font-semibold text-xl leading-6">
                    {appearance.date}
                  </p>
                  <p className="font-semibold text-xl leading-6">
                    {appearance.time}
                  </p>
                  <p
                    className={`w-[81px] py-[1.3px] px-[10.4px] rounded ${
                      appearance.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {appearance.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center text-sm leading-5 font-normal  ml-[189px] mr-[189px] mt-[87px] p-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardStu;
