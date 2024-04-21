import prisma from "@/lib/db/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const task = await prisma.task.findUnique({
    where: { id: params.id },
  });
  return new Response(JSON.stringify(task), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  const task = await req.json();
  console.log(task);
  const isFinished = task.isFinished;

  await prisma.task.update({
    where: { id: params.id },
    data: {
      isFinished: isFinished,
    },
  });

  return new Response(JSON.stringify({ msg: "task has been updated" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const task = await req.json();
  console.log(task);
  const name = task.name;

  if (!name) {
    throw Error("missing required fields");
  }

  await prisma.task.update({
    where: { id: params.id },
    data: {
      name: name,
    },
  });

  return new Response(JSON.stringify({ msg: "task has been updated" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
