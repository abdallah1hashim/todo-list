import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/");
  return new Response(JSON.stringify({ msg: "task has been updated" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  await prisma.task.delete({
    where: { id: params.id },
  });

  revalidatePath("/");

  return new Response(JSON.stringify({ msg: "task has been deleted" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
