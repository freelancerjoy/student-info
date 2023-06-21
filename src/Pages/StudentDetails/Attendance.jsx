import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Attendance = () => {
  const [attendanceInfo, setAttendanceInfo] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setAttendanceInfo(data));
  }, []);
  return (
    <div>
      <div className="border-[1.5px] border-black bg-white">
        <div className="bg-[#DDDDDD] border-b-[1.5px]  border-black py-1">
          <h2 className="font-bold text-2xl ml-3 text-primary">
            Attendance Information
          </h2>
        </div>
        <div className="border-[1.5px] before::bg-black border-green-500 m-5 p-5">
          <div className="lg:space-x-20 space-x-8">
            <select
              className="border-[1.5px]  border-black  pr-20 py-1"
              name=""
              id="">
              <option value="0">Select Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
            </select>
            <select
              className="border-[1.5px]  border-black pr-20 py-1"
              name=""
              id="">
              <option value="0">Select Period</option>
              <option value="1">1st Hour</option>
              <option value="2">2nd Hour</option>
            </select>
            <button className="btn btn-sm px-6 rounded-none text-white capitalize bg-primary ">
              <FiSearch className="font-bold text-lg"></FiSearch> Search
            </button>
          </div>
          <h4 className="text-primary font-bold text-center mt-8 mb-3">
            Attendance Details of Month - August-1st Period
          </h4>
          <div className="border-[1.5px] border-black py-3 lg:px-3 gap-6 px-6 lg:gap-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-stretch">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="bg-green-500 w-8 h-8 block rounded-full text-center text-white font-bold text-xl leading-8">
                  T
                </span>
                <h2 className="font-bold ml-3">Total Attendance</h2>
              </div>
              <div className="font-bold">
                <span className="">:</span>
                <span className="text-xl text-green-700 ml-8 text-right">
                  O9
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="bg-green-500 w-8 h-8 block rounded-full text-center text-white font-bold text-xl leading-8">
                  P
                </span>
                <h2 className="font-bold ml-3">Present</h2>
              </div>
              <div className="font-bold">
                <span className="">:</span>
                <span className="text-xl text-green-500 ml-8 text-right ">
                  O9
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="bg-red-500 w-8 h-8 block rounded-full text-center text-white font-bold text-xl leading-8">
                  A
                </span>
                <h2 className="font-bold ml-3">Absent</h2>
              </div>
              <div className="font-bold">
                <span className="">:</span>
                <span className="text-xl text-red-700 ml-6 text-right">O9</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto mt-5 lg:w-8/12 md:w-full mx-auto">
            <table className="table border border-black">
              {/* head */}
              <thead>
                <tr className="bg-secondary text-lg font-bold text-black">
                  <th>Date</th>
                  <th>Day</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceInfo?.map((status) => (
                  <tr key={status?.id} className="border-[2px] ">
                    <td>{status?.date}</td>
                    <td>{status?.day}</td>
                    <td
                      className={`${
                        status.status === "present"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-bold `}>
                      {status?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right">
              <button class="btn btn-sm font-lg rounded-none px-4 capitalize bg-blue-600 font-bold  my-4 text-white border border-black inline-block">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
