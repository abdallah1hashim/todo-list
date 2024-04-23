import prisma from "@/lib/db/prisma";
import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { id: "desc" },
  });
  return new Response(JSON.stringify(tasks), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}

export async function POST(req: Request) {
  const task = await req.json();

  const name = task.name;

  if (!name) {
    throw Error("missing required fields");
  }

  await prisma.task.create({
    data: { name },
  });

  revalidateTag("tasks");

  return new Response(JSON.stringify({ msg: "task has been added" }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
