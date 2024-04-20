"use client";
import Row from "./Row";
import { useState } from "react";
import CheckBox from "./CheckBox";
import Delete from "./Delete";
import Save from "./Save";
import Edit from "./Edit";
import Cancel from "./Cancel";

type box = {
  data: { title: string; date: string };
};

function Box({ data }: box) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Row className=" w-full bg-white my-4 px-4 py-2 rounded-md">
      <Row className=" gap-4 ">
        <CheckBox onChange={handleCheckboxChange} checked={isChecked} />
        <div className="flex flex-col">
          <span
            className={` font-bold ${
              isChecked ? "text-gray-400" : "text-gray-900"
            } text-md ${isChecked ? "line-through" : ""}`}
          >
            {data.title}
          </span>
          <span className=" font-semibold text-gray-700 text-sm">
            {data.date}
          </span>
        </div>
      </Row>
      <Row justify="normal" className=" text-2xl gap-2">
        {isEditing ? <Cancel setIsEditing={setIsEditing} /> : <Delete />}
        {isEditing ? <Save /> : <Edit setIsEditing={setIsEditing} />}
      </Row>
    </Row>
  );
}

export default Box;
