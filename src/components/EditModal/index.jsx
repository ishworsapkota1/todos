import React, { useContext } from "react";
import Modal from "react-modal";
import { Axios } from "../../../api/server";
import { ReloadContext } from "../../pages/TodoPage";
// import { Axios } from "axios";
// import {Axios} from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function EditModal({ modalIsOpen, setIsOpen, item }) {
  function closeModal() {
    setIsOpen(false);
  }
  const { setReload } = useContext(ReloadContext);

  async function deleteTodo() {
    try {
      await Axios.delete(`todos/${item.id}`);
      setIsOpen(false);
      setReload((prev) => !prev);
      // delete reload
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      // contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className="flex gap-y-5 flex-col">
        <p className=" font-medium text-[1.5rem]">
          Are you sure you want to delete this todo?
        </p>

        <div className="flex gap-x-5">
          <button onClick={deleteTodo} className=" bg-red1 btnCls font-normal">
            Delete
          </button>

          <button
            onClick={closeModal}
            className=" bg-green-700  btnCls font-normal"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default EditModal;
