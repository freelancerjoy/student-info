
import PersonalInfo from "./PersonalInfo";
import PresentPAddres from "./PresentPAddres";
import GuardianInfo from "./GuardianInfo";
import LocalGuardinInfo from "./LocalGuardinInfo";

const StudentInFormation = () => {
  return (
    <div className="border-[1.5px] border-black bg-white">
      <div className="bg-[#DDDDDD] border-b-[1.5px]  border-black py-1">
        <h2 className="font-bold text-2xl ml-3 text-primary">
          Student Information
        </h2>
      </div>
      <div className=" mx-3">
        <h6 className="font-bold mt-3 mb-1">Personal Information</h6>
        <PersonalInfo></PersonalInfo>
        <h6 className="font-bold mt-3 mb-1">Present & Permanent Address</h6>
        <PresentPAddres></PresentPAddres>
        <h6 className="font-bold mt-3 mb-1">Guardian Information</h6>
        <GuardianInfo></GuardianInfo>
        <h6 className="font-bold mt-3 mb-1">Local Guardian (If Any)</h6>
        <LocalGuardinInfo></LocalGuardinInfo>
      </div>
    </div>
  );
};

export default StudentInFormation;

{
  /* <form className="border-t-[1.5px] border-[2px] my-2 py-2 px-5  border-green-500">
          <div className="grid grid-cols-2 gap-12">
            <div className="grid grid-cols-5">
              <label className="col-span-1" htmlFor="Name">
                Name
              </label>
              <span className="text-right">:</span>
              <input readOnly
                defaultValue={"Md Shah Sultan"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="col-span-1" htmlFor="Name">
                Name
              </label>
              <span className="text-right">:</span>
              <input readOnly
                defaultValue={"Md Shah Sultan"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="col-span-1" htmlFor="Name">
                Date of Birth
              </label>
              <span className="text-right">:</span>
              <input readOnly
                defaultValue={"Md Shah Sultan"}
                className="field-design"
                type="text"
              />
            </div>
          </div>
        </form> */
}
