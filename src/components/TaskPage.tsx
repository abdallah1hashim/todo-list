"use client";
import Box from "@/components/Box";
import Row from "@/components/Row";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { Suspense, useState } from "react";
import { Task } from "@prisma/client";
import Filter from "./Filter";
import { useSearchParams } from "next/navigation";

const filterOptions: string[] = ["All", "Finished", "Ongoing"];

function TaskPage({ tasks }: { tasks: Task[] }) {
  const [isAdd, setIsAdd] = useState(false);
  const searchParams = useSearchParams();
  const show = searchParams.get("show");
  console.log(show);

  const filterTasks = (tasks: Task[], filter: string | null): Task[] => {
    switch (filter) {
      case "Ongoing":
        return tasks.filter((task) => !task.isFinished);
      case "Finished":
        return tasks.filter((task) => task.isFinished);
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks, show);

  console.log(filteredTasks);

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
          {filteredTasks.length > 0 &&
            filteredTasks.map((task) => <Box task={task} key={task.id} />)}
          {filteredTasks.length === 0 && (
            <h2>Add Some Tasks To Get Started 😁</h2>
          )}
        </Row>
      </Row>
    </>
  );
}

export default TaskPage;
