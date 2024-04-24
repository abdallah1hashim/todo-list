import TaskPage from "@/components/TaskPage";
import prisma from "@/lib/db/prisma";
import { Task } from "@prisma/client";
import { Suspense } from "react";

async function Home() {
  // const res = await fetch(process.env.URL + "/api/tasks", {
  //   method: "GET",
  //   next: { revalidate: 1000, tags: ["tasks"] },
  // });
  // console.log(res);
  // const tasks: Task[] = await res.json();

  const tasks = await prisma.task.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <Suspense fallback={<h2 className="text-center">Loading..</h2>}>
      {" "}
      <TaskPage tasks={tasks} />
    </Suspense>
  );
}

export default Home;
