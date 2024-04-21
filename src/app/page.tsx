import TaskPage from "@/components/TaskPage";
import prisma from "@/lib/db/prisma";

async function Home() {
  // const res = await fetch(process.env.URL + "/api/tasks", {
  //   method: "GET",
  //   cache: "force-cache",
  //   next: { revalidate: 10000 },
  // });
  // console.log(res);
  // const tasks: Task[] = await res.json();
  const tasks = await prisma.task.findMany({
    orderBy: { id: "desc" },
  });
  1;
  return (
    <div className="grid grid-rows-[1fr_6rem]">
      <TaskPage tasks={tasks} />
    </div>
  );
}

export default Home;
