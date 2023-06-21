import { FiEdit } from "react-icons/fi";
import PersonalInfoForm from "./PersonalInfoForm";
import useForm from "../../../Hooks/useForm";

const PersonalInfo = () => {
  const { isModalOpen, handleModalClose } = useForm();
  return (
    <div>
      <div className="form-design">
        <button
          className="absolute top-2 right-2"
          onClick={() => window.personal_info.showModal()}>
          <FiEdit className="text-2xl text-primary  "></FiEdit>
          {isModalOpen && (
            <dialog id="personal_info" className="modal w-11/12">
              <div method="dialog" className="modal-box w-11/12 max-w-5xl">
                <PersonalInfoForm
                  isEdit={true}
                  handleModalClose={handleModalClose}></PersonalInfoForm>
              </div>
            </dialog>
          )}
        </button>
        <PersonalInfoForm></PersonalInfoForm>
      </div>
    </div>
  );
};

export default PersonalInfo;
