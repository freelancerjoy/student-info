import { FiEdit } from "react-icons/fi";

const PersonalInfo = () => {
  return (
    <div className="border-[1.5px] border-black bg-white">
      <div className="bg-[#DDDDDD] border-b-[1.5px]  border-black py-1">
        <h2 className="font-bold text-2xl ml-3 text-primary">
          Student Information
        </h2>
      </div>
      <div className=" mx-3">
        <h6 className="font-bold mt-3 mb-1">Personal Information</h6>
        <form className="form-design">
          <button className=" absolute top-2 right-2">
            <FiEdit className="text-2xl text-primary  "></FiEdit>
          </button>
          <div className="form-body-design">
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="Name">
                Name <span className="">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Md Shah Sultan"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="gender">
                Gender <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Male"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="dateofbirth">
                Date of Birth <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"12/12/2000"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="blood">
                Blood Group <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"A+"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="religion">
                Religion <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Islam"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="birth_certificate">
                Birth Certificat No <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"123356789098176633"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="nationality">
                Nationality <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Bangladeshi"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="religion">
                Contact No <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"01725431947"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="height">
                Height <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={'5.6"'}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="weight">
                Weight <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"32Kg"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="spacial_discase">
                Speacial Discase <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"No"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="quata">
                Quata ( If Any ) <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"No"}
                className="field-design"
                type="text"
              />
            </div>
          </div>
        </form>
        <h6 className="font-bold mt-3 mb-1">Present & Permanent Address</h6>
        <form className="form-design">
          <div className=" absolute top-2 right-2">
            <FiEdit className="text-2xl text-primary  "></FiEdit>
          </div>
          <div className="form-body-design">
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="pressent_adress">
                Present Address <span className="">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Basila, Mohammodpur"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="permanent_address">
                Parmanent Address <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Basila, Mohammodpur"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="divission">
                Divission <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Dhaka"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="divission">
                Divission <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Dhaka"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="district">
                District <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Dhaka"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="district">
                District <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Dhaka"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="thana">
                Thana <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Mohammadpur"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="thana">
                Thana <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Mohammadpur"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="post_code">
                Post Code <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"1209"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="post_code">
                Post Code <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"1209"}
                className="field-design"
                type="text"
              />
            </div>
          </div>
        </form>
        <h6 className="font-bold mt-3 mb-1">Guardian Information</h6>
        <form className="form-design">
          <div className=" absolute top-2 right-2">
            <FiEdit className="text-2xl text-primary  "></FiEdit>
          </div>
          <div className="form-body-design">
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="father_name">
                Father's Name <span className="">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Mother's Name "}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="mother_name">
                Mother's Name <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Mother's Name "}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="father_nid">
                Father's Nid <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"234345545435345"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="mother_nid">
                Mother's Nid <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"3435454564564536"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="father_occupation">
                Father's Occupation <span className="text-right block">:</span>
              </label>
              <select disabled className="field-design" name="" id="">
                <option value="0">Business</option>
                <option value="1">Teacher</option>
              </select>
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="mother_occupation">
                Mother's Occupation <span className="text-right block">:</span>
              </label>
              <select disabled className="field-design" name="" id="">
                <option value="0">House Wife</option>
                <option value="1">Teacher</option>
              </select>
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="birth_certificate">
                Contact No <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"017543543543"}
                className="field-design"
                type="text"
              />
            </div>
          </div>
        </form>
        <h6 className="font-bold mt-3 mb-1">Local Guardian (If Any)</h6>
        <form className="form-design">
          <div className=" absolute top-2 right-2">
            <FiEdit className="text-2xl text-primary  "></FiEdit>
          </div>
          <div className="form-body-design">
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="local_guradian_name">
                Name <span className="">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Local Guardian Name"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="l_guardian_contact_no">
                Contact No <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"01700998877 "}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="relation">
                Relation <span className="text-right block">:</span>
              </label>
              <input
                readOnly
                defaultValue={"Uncle"}
                className="field-design"
                type="text"
              />
            </div>
            <div className="grid grid-cols-5">
              <label className="label-design" htmlFor="father_occupation">
                Occupation <span className="text-right block">:</span>
              </label>
              <select disabled className="field-design" name="" id="">
                <option value="0">House Wife</option>
                <option value="1">Teacher</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;

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
