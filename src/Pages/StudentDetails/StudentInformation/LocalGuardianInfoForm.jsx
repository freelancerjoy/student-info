const LocalGuardianInfoForm = ({ isEdit, handleModalClose }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-body-design">
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="local_guradian_name">
            Name <span className="">:</span>
          </label>
          <input
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
            defaultValue={"Uncle"}
            className="field-design"
            type="text"
          />
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="father_occupation">
            Occupation <span className="text-right block">:</span>
          </label>
          <select disable={!isEdit} className="field-design" name="" id="">
            <option value="0">House Wife</option>
            <option value="1">Teacher</option>
          </select>
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

export default LocalGuardianInfoForm;
