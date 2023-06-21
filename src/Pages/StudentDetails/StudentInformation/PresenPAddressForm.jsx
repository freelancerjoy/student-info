const PresenPAddressForm = ({ handleModalClose, isEdit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const presentAdd = form.presentAdd.value;
    console.log(presentAdd);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-body-design">
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="pressent_adress">
            Present Address <span className="">:</span>
          </label>
          <input
            readOnly={!isEdit}
            defaultValue={"Basila, Mohammodpur"}
            className="field-design"
            type="text"
            name="presentAdd"
          />
        </div>
        <div className="grid grid-cols-5">
          <label className="label-design" htmlFor="permanent_address">
            Parmanent Address <span className="text-right block">:</span>
          </label>
          <input
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
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
            readOnly={!isEdit}
            defaultValue={"1209"}
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

export default PresenPAddressForm;
