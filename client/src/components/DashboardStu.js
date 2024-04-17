import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import g8 from "../images/g8.png";
import Footer from "./Footer";

const DashboardStu = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-100 pt-[50px]">
        <div className="flex justify-between ml-[189px] mr-[189px] bg-white rounded-xl  ">
          <div className="flex flex-col  my-[43px] ml-[42.71px]   space-y-4 ">
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
              className="text-base hover:cursor-pointer"
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
        <div className=" ml-[189px] mr-[189px] mt-[36.46px] h-[569px] bg-white rounded-xl">
          <p className="font-bold text-2xl leading-6 pt-[36px] ml-[43px]">
            My Attendance
          </p>
          <div className=" flex justify-between  border-b-4 border-slate-200  mx-[43px] mt-[105px] p-3">
            <p className="font-semibold text-xl leading-6">01-24-2024</p>
            <p className="font-semibold text-xl leading-6">10 AM</p>
            <p className=" w-[81px] py-[1.3px] px-[10.4px] rounded bg-green-100 text-green-700">
              Present
            </p>
          </div>
          <div className=" flex justify-between border-b-4 border-slate-200 mx-[43px] mt-[15px] p-3">
            <p className="font-semibold text-xl leading-6">01-24-2024</p>
            <p className="font-semibold text-xl leading-6">10 AM</p>
            <p className=" w-[81px] py-[1.3px] px-[10.4px] rounded bg-green-100 text-green-700">
              Present
            </p>
          </div>
          <div className=" flex justify-between border-b-4 border-slate-200k mx-[43px] mt-[15px] p-3">
            <p className="font-semibold text-xl leading-6">01-24-2024</p>
            <p className="font-semibold text-xl leading-6">10 AM</p>
            <p className=" w-[81px] py-[1.3px] px-[10.4px] rounded bg-green-100 text-green-700">
              Present
            </p>
          </div>
          <div className=" flex justify-between border-b-4 border-slate-200 mx-[43px] mt-[15px] p-3">
            <p className="font-semibold text-xl leading-6">01-24-2024</p>
            <p className="font-semibold text-xl leading-6">10 AM</p>
            <p className=" w-[81px] py-[1.3px] px-[10.4px] rounded bg-red-200 text-red-700">
              Absent
            </p>
          </div>
          <div className=" flex justify-between border-b-4 border-slate-200 mx-[43px] mt-[15px] p-3">
            <p className="font-semibold text-xl leading-6">01-24-2024</p>
            <p className="font-semibold text-xl leading-6">10 AM</p>
            <p className=" w-[81px] py-[1.3px] px-[10.4px] rounded bg-green-100 text-green-700">
              Present
            </p>
          </div>

          <span
            className="text-base text-right mt-[33px] mr-[50px] float-right hover:cursor-pointer "
            style={{ color: "#001270" }}
          >
            See More {">"}
          </span>
        </div>
        <div className="text-center text-sm leading-5 font-normal  ml-[189px] mr-[189px] mt-[87px] p-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardStu;
