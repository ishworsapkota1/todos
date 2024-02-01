import React, { useEffect } from "react";
import Todo from "./Todo";
import { useState } from "react";
import { Axios } from "../../../api/server";

const TodosList = ({ setReload, reload }) => {
  const [data, setData] = useState([]);
  // const [reload, setReload] = useState(false);
  useEffect(() => {
    getAllTodos();
  }, [reload]);

  const getAllTodos = async () => {
    try {
      const res = await Axios.get("todos");
      setData(res.data.reverse());
    } catch (error) {
      console.log(error);
      // alert
    }
  };
  return (
    <div className="flex flex-col gap-3">
      {/* <Todo />
      <Todo />
      <Todo /> */}
      {data.map((item) => {
        return <Todo setReload={setReload} key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodosList;
