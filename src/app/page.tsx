import TaskPage from "@/components/TaskPage";
import prisma from "@/lib/db/prisma";
import { Task } from "@prisma/client";

async function Home() {
  const res = await fetch(process.env.URL + "/api/tasks", {
    method: "GET",
    cache: "no-store",
    
  });
  console.log(res);
  const tasks: Task[] = await res.json();
  // const tasks = await prisma.task.findMany({
  //   orderBy: { id: "desc" },

  // });

  return <TaskPage tasks={tasks} />;
}

export default Home;
