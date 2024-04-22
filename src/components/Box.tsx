"use client";
import Row from "./Row";
import { useState } from "react";
import CheckBox from "./CheckBox";
import Delete from "./Delete";
import Save from "./Save";
import Edit from "./Edit";
import Cancel from "./Cancel";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

type box = {
  task: Task;
};

function Box({ task }: box) {
  console.log(task.isFinished);
  console.log(typeof task.isFinished);

  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(task.isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsChecked(e.target.checked);
    const updatedTask = { ...task, isFinished: !isChecked };
    await fetch(`api/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    router.refresh();
  };
  const createdAtDate = new Date(task.createdAt);
  return (
    <Row
      type="horizontal"
      justify="normal"
      className=" my-4 w-full flex-wrap rounded-md bg-white px-4 py-2 "
    >
      <Row type="horizontal" justify="normal" className=" gap-4 ">
        <CheckBox onChange={handleCheckboxChange} checked={isChecked} />
        <div className="flex flex-col">
          {isEditing ? (
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="rounded-md border-2 border-slate-400 px-2 focus:outline-indigo-500"
              placeholder={task.name}
            />
          ) : (
            <span
              className={` font-bold ${
                isChecked ? "text-gray-400" : "text-gray-900"
              } text-md ${isChecked ? "line-through" : ""}`}
            >
              {task.name}
            </span>
          )}
          <span className=" text-sm font-semibold text-gray-500">
            {createdAtDate.toLocaleDateString()}
          </span>
        </div>
      </Row>
      <Row type="horizontal" justify="normal" className=" gap-2 text-2xl ">
        {isEditing ? (
          <Cancel setIsEditing={setIsEditing} />
        ) : (
          <Delete id={task.id} />
        )}
        {isEditing ? (
          <Save name={name} data={task} setIsEditing={setIsEditing} />
        ) : (
          <Edit setIsEditing={setIsEditing} />
        )}
      </Row>
    </Row>
  );
}

export default Box;
