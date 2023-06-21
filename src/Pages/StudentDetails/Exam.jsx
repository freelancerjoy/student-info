import React, { useEffect, useState } from "react";

const Exam = () => {
  const [examResult, setExamResult] = useState([]);
  useEffect(() => {
    fetch("/exam.json")
      .then((res) => res.json())
      .then((data) => setExamResult(data));
  }, []);
  return (
    <div className="border-[1.5px] border-black bg-white">
      <div className="bg-[#DDDDDD] border-b-[1.5px]  border-black py-1 flex items-center">
        <h2 className="font-bold text-2xl w-full blo lg:w-1/4  ml-3 text-primary">
          Exam Information
        </h2>
        <h2 className=" w-full text-center text-lg">
          Here, Only current year results are shown
        </h2>
      </div>
      <div className="border-[1.5px] before::bg-black border-green-500 m-5 p-5">
        <div className="overflow-x-auto mt-2">
          <table className="table border border-black">
            {/* head */}
            <thead>
              <tr className="bg-secondary text-lg font-bold text-black">
                <th>Exam</th>
                <th>Letter Grade</th>
                <th>GPA</th>
                <th>Full Marks</th>
                <th>Obtained Marks</th>
                <th>Section Position</th>
                <th>Fail of Subjec</th>
              </tr>
            </thead>
            <tbody>
              {examResult?.map((exam) => (
                <tr key={exam?.id} className="border-[2px] ">
                  <td>{exam?.exam}</td>
                  <td
                    className={`${
                      exam.letterGrade === "F" && "text-red-500"
                    } font-bold `}>
                    {exam?.letterGrade}
                  </td>
                  <td>{exam?.gpa}</td>
                  <td>{exam?.fullMarks}</td>
                  <td>{exam?.obtainedMarks}</td>
                  <td>{exam?.sectionPosition}</td>
                  <td>{exam?.failSubject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Exam;
