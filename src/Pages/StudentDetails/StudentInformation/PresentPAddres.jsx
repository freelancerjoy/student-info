import { FiEdit } from "react-icons/fi";
import PresenPAddressForm from "./PresenPAddressForm";
import useForm from "../../../Hooks/useForm";

const PresentPAddres = () => {
  const { isModalOpen, handleModalClose } = useForm();

  return (
    <div>
      <div className="form-design">
        <button
          className="absolute top-2 right-2"
          onClick={() => window.presnt_info.showModal()}>
          <FiEdit className="text-2xl text-primary  "></FiEdit>
          {isModalOpen && (
            <dialog id="presnt_info" className="modal w-11/12">
              <div method="dialog" className="modal-box  w-11/12 max-w-5xl  ">
                <PresenPAddressForm
                  isEdit={true}
                  handleModalClose={handleModalClose}></PresenPAddressForm>
              </div>
            </dialog>
          )}
        </button>
        <PresenPAddressForm></PresenPAddressForm>
      </div>
    </div>
  );
};

export default PresentPAddres;
