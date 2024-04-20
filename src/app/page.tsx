"use client";
import Box from "@/components/Box";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";

const data = [
  { title: "SMTH", date: "5 may, 21 AM 2024" },
  { title: "SMTH", date: "5 may, 21 AM 2024" },
];

function Home() {
  const [isAdd, setIsAdd] = useState(false);

  function handleClick(): void {
    setIsAdd(!isAdd);
  }

  return (
    <div className="grid grid-rows-[1fr_6rem]">
      <Row type="vertical">
        <Row className="w-full overflow-auto">
          <Button varriant={isAdd ? "danger" : "primary"} onClick={handleClick}>
            {isAdd ? "cancel" : "Add"}
          </Button>
          <select></select>
        </Row>
        <Row
          type="vertical"
          className="w-full bg-slate-200 my-6 p-6 rounded-md"
        >
          {data.map((d) => (
            <Box data={d} key={d.date} />
          ))}
        </Row>
      </Row>
      {isAdd && (
        <Row className=" mt-6">
          <Form />
        </Row>
      )}
    </div>
  );
}

export default Home;
