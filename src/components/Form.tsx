"use server";

import Button from "./Button";
import Row from "./Row";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db/prisma";

const addTask = async function (formData: FormData) {
  "use server";

  const name = formData.get("name") as string;

  if (!name) {
    throw Error("missing required fields");
  }

  await prisma.task.create({
    data: { name },
  });

  revalidatePath("/");
};

function Form() {
  return (
    <form
      // onSubmit={handleSubmit}
      action={addTask}
      method="POST"
      className=" w-full"
    >
      <Row className="">
        <input
          type="text"
          name="name"
          className=" rounded-lg px-2 py-1 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          placeholder="Enter Any Task ☺️"
        />
        <Button type="submit" variant="safe">
          Save
        </Button>
      </Row>
    </form>
  );
}

export default Form;
