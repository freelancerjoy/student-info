import useForm from "../../../Hooks/useForm";
import { FiEdit } from "react-icons/fi";
import LocalGuardianInfoForm from "./LocalGuardianInfoForm";
const LocalGuardinInfo = () => {
  const { isModalOpen, handleModalClose } = useForm();
  return (
    <div>
      <div className="form-design">
        <button
          className="absolute top-2 right-2"
          onClick={() => window.localg_info.showModal()}>
          <FiEdit className="text-2xl text-primary  "></FiEdit>
          {isModalOpen && (
            <dialog id="localg_info" className="modal w-11/12">
              <div method="dialog" className="modal-box w-11/12 max-w-5xl">
                <LocalGuardianInfoForm
                  isEdit={true}
                  handleModalClose={handleModalClose}></LocalGuardianInfoForm>
              </div>
            </dialog>
          )}
        </button>
        <LocalGuardianInfoForm></LocalGuardianInfoForm>
      </div>
    </div>
  );
};

export default LocalGuardinInfo;
