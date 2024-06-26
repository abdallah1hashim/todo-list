import TaskPage from "@/components/TaskPage";
import prisma from "@/lib/db/prisma";
import { Task } from "@prisma/client";
import { Suspense } from "react";

async function getTasks() {
  const data = await prisma.task.findMany({
    orderBy: { id: "desc" },
  });
  return data;
}

async function Home() {
  // const res = await fetch(process.env.URL + "/api/tasks", {
  //   method: "GET",
  //   next: { revalidate: 1000, tags: ["tasks"] },
  // });
  // console.log(res);
  // const tasks: Task[] = await res.json();

  const tasks = await getTasks();
  return (
    <Suspense>
      <TaskPage tasks={tasks} />
    </Suspense>
  );
}

export default Home;
