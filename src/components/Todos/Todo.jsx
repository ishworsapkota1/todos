import React, { useContext, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import EditModal from "../EditModal";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../api/server";
import { ReloadContext } from "../../pages/TodoPage";
// import React, { useState } from "react";
// import { MdDelete } from "react-icons/md";
// import { FaPencil } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import EditModal from "../EditModal";
// import { useNavigate } from "react-router-dom";

const Todo = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const { setReload } = useContext(ReloadContext);

  const openModal = () => {
    // setReload((prev) => !prev);
    setIsOpen(true);
  };

  const RedirecttoEditpage = () => {
    console.log(`/todo/${item.id}`);
    navigate(`/todo/${item.id}`);
  };
  const toogleCompleted = async () => {
    const data = { completed: !item.completed };
    try {
      await Axios.patch(`todos/${item.id}`, data);
      setReload((prev) => !prev);
    } catch (err) {}
  };
  return (
    <>
      <EditModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        item={item}
        // setReload={setReload}
      />
      <div
        className={`${
          item.completed && "text-red1 line-through"
        } flex justify-between items-center py-[0.5px] px-2 leading-10 
          border-solid border-[2px] border-[#d1d5db]`}
      >
        <p>{item.title}</p>

        <div className="flex gap-x-3 items-center">
          <input
            onClick={() => toogleCompleted()}
            className="accent-green-700 w-6 h-5 hover:cursor-pointer p-1"
            type="checkbox"
            name=""
            id=""
            checked={item.completed}
          />
          <FaPencilAlt
            onClick={RedirecttoEditpage}
            className="w-5 h-5 hover:cursor-pointer hover:scale-110 "
            color="#eab308"
          />
          <MdDelete
            onClick={openModal}
            color="#db3345"
            className="w-6 h-6 hover:cursor-pointer hover:scale-110"
          />
          {/* <img onClick={()=>openModal()} src={DeleteBtn} alt="" className='w-5 h-5 hover:cursor-pointer hover:scale-110' /> */}
        </div>
      </div>
    </>
  );
};

export default Todo;
