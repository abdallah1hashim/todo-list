"use client";
import Box from "@/components/Box";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";
import { Task } from "@prisma/client";
import Filter from "./Filter";

const filterOptions: string[] = ["All", "Finished", "Ongoing"];

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
          <Filter filterOptions={filterOptions} />
        </Row>
        {isAdd && (
          <Row className=" mt-6 w-full">
            <Form />
          </Row>
        )}
        <Row
          justify="normal"
          type="vertical"
          className="my-6 max-h-[calc(100vh-18rem)] w-full overflow-auto rounded-md bg-slate-200 p-6 "
        >
          {tasks.length > 0 &&
            tasks.map((task) => <Box task={task} key={task.id} />)}
          {!(tasks.length > 0) && <h2>Add Some Tasks To Get Started 😁</h2>}
        </Row>
      </Row>
    </>
  );
}

export default TaskPage;
