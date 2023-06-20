import { FiEdit } from "react-icons/fi";
import studentLogo from "../../assets/student.png";

const Profile = () => {
  return (
    <div className="mb-5">
      <div className="text-right">
        <button class="btn btn-sm rounded-none px-4 capitalize bg-blue-600 font-bold  my-4 text-white border border-black inline-block">
          Download Profile
        </button>
      </div>
      <div className="border-[1.5px] border-black rounded-md bg-white  p-5">
        <div className="flex gap-10">
          <div className="relative ml-5">
            <img
              className="w-32 h-32 border-[1.5px] border-black outline outline-offset-4 outline-[1.5px]"
              src={studentLogo}
              alt=""
            />
            <FiEdit className="absolute top-1 right-1"></FiEdit>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Md Shah Sultan</h3>
            <h4 className="font-bold text-xl mt-1">
              Demo High School & College
            </h4>
            <p className="text-xl">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="overflow-x-auto mt-12">
          <table className="table">
            <thead className="text-xl font-bold text-black leading-[0px]">
              <tr>
                <th>Class</th>
                <th>Section</th>
                <th>Group</th>
                <th>Student ID</th>
                <th>Roll No.</th>
                <th>Admission Date</th>
              </tr>
            </thead>
            <tbody className="text-xl text-black border-hidden leading-3">
              <tr>
                <td>Five</td>
                <td>Padma</td>
                <td>Common</td>
                <td>213452</td>
                <td>01</td>
                <td>10-june-2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
