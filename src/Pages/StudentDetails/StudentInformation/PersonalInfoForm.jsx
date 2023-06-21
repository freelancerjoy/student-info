const PersonalInfoForm = ({ isEdit, handleModalClose }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const gender = form.gender.value;
    console.log(name);
    console.log(gender);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-body-design">
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="Name">
            Name <span className="">:</span>
          </label>
          <input
            defaultValue={"Md Shah Sultan"}
            className="field-design"
            type="text"
            name="name"
          />
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="gender">
            Gender <span className="text-right block">:</span>
          </label>
          <input
            readOnly={!isEdit}
            defaultValue={"Male"}
            className="field-design"
            type="text"
            name="gender"
          />
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="dateofbirth">
            Date of Birth <span className="text-right block">:</span>
          </label>
          <input
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
            defaultValue={"No"}
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

export default PersonalInfoForm;
