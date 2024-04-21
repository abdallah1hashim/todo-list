"use client";
import Box from "@/components/Box";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";
import { Task } from "@prisma/client";

const sortOptions: string[] = ["All", "Finished", "Ongoing"];

function TaskPage({ tasks }: { tasks: Task[] }) {
  const [isAdd, setIsAdd] = useState(false);
  function handleClick(): void {
    setIsAdd(!isAdd);
  }
  return (
    <>
      <Row type="vertical">
        <Row className="w-full overflow-auto">
          <Button variant={isAdd ? "danger" : "primary"} onClick={handleClick}>
            {isAdd ? "cancel" : "Add"}
          </Button>
          <select className=" rounded-md px-2 py-2 uppercase">
            {sortOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </Row>
        <Row
          justify="normal"
          type="vertical"
          className="my-6 w-full rounded-md bg-slate-200 p-6"
        >
          {tasks.map((task) => (
            <Box task={task} key={task.id} />
          ))}
        </Row>
      </Row>
      {isAdd && (
        <Row className=" mt-6">
          <Form />
        </Row>
      )}
    </>
  );
}

export default TaskPage;
