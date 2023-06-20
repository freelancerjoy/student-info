import React, { useEffect, useState } from "react";

const Subjects = () => {
  const [subjectInfo, setsubjectInfo] = useState([]);
  useEffect(() => {
    fetch("/subject.json")
      .then((res) => res.json())
      .then((data) => setsubjectInfo(data));
  }, []);
  return (
    <div>
      <div className="border-[1.5px] border-black bg-white">
        <div className="bg-[#DDDDDD] border-b-[1.5px]  border-black py-1">
          <h2 className="font-bold text-2xl ml-3 text-primary">
            Subject Information
          </h2>
        </div>
        <div className="overflow-x-auto mt-5 lg:w-8/12 md:w-full px-4 pb-5 mx-auto">
          <table className="table border border-black">
            {/* head */}
            <thead className="bg-secondary ">
              <tr className="text-lg font-bold text-black">
                <th>Serial</th>
                <th>Subject Name</th>
                <th>Subject type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {subjectInfo?.map((sub, index) => (
                <tr key={sub?.id} className="border-[2px] ">
                  <td>{index + 1}</td>
                  <td>{sub?.subjectName}</td>
                  <td>{sub?.subject}</td>
                  <td
                    className={`${
                      sub.status === "present"
                        ? "text-green-500"
                        : "text-red-500"
                    } font-bold `}>
                    {sub?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
