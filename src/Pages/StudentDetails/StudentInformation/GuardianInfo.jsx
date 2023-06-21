import { FiEdit } from "react-icons/fi";
import GuardianInfoForm from "./GuardianInfoForm";
import useForm from "../../../Hooks/useForm";

const GuardianInfo = () => {
  const { isModalOpen, handleModalClose } = useForm();
  return (
    <div>
      <div className="form-design">
        <button
          className="absolute top-2 right-2"
          onClick={() => window.guardian_info.showModal()}>
          <FiEdit className="text-2xl text-primary  "></FiEdit>
          {isModalOpen && (
            <dialog id="guardian_info" className="modal w-11/12">
              <div method="dialog" className="modal-box w-11/12 max-w-5xl">
                <GuardianInfoForm
                  isEdit={true}
                  handleModalClose={handleModalClose}></GuardianInfoForm>
              </div>
            </dialog>
          )}
        </button>
        <GuardianInfoForm></GuardianInfoForm>
      </div>
    </div>
  );
};

export default GuardianInfo;
