const GuardianInfoForm = ({ isEdit, handleModalClose }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fathersName = form.fathersName.value;
    console.log(fathersName);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-body-design">
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="father_name">
            Father's Name <span className="">:</span>
          </label>
          <input
            readOnly={!isEdit}
            defaultValue={"Mother's Name "}
            className="field-design"
            type="text"
            name="fathersName"
          />
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="mother_name">
            Mother's Name <span className="text-right block">:</span>
          </label>
          <input
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
            defaultValue={"3435454564564536"}
            className="field-design"
            type="text"
          />
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="father_occupation">
            Father's Occupation <span className="text-right block">:</span>
          </label>
          <select disabled={!isEdit} className="field-design" name="" id="">
            <option value="0">Business</option>
            <option value="1">Teacher</option>
          </select>
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="mother_occupation">
            Mother's Occupation <span className="text-right block">:</span>
          </label>
          <select disabled={!isEdit} className="field-design" name="" id="">
            <option value="0">House Wife</option>
            <option value="1">Teacher</option>
          </select>
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="birth_certificate">
            Contact No <span className="text-right block">:</span>
          </label>
          <input
            readOnly={!isEdit}
            defaultValue={"017543543543"}
            className="field-design"
            type="text"
          />
        </div>
      </div>
      {isEdit && (
        <div className="modal-action">
          <button className="btn btn-md text-white bg-green-500" type="submit">
            Submit
          </button>
          <button
            onClick={handleModalClose}
            className="btn btn-md text-white bg-red-500">
            Close
          </button>
        </div>
      )}
    </form>
  );
};

export default GuardianInfoForm;
