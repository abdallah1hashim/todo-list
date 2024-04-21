"use client";
import { useState } from "react";
import Button from "./Button";
import Row from "./Row";
import { useRouter } from "next/navigation";

function Form() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-type": "application/json",
      },
    });
    setIsLoading(false);
    console.log(response);
    if (response.status !== 201) return;
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/api/tasks"
      method="POST"
      className=" w-full"
    >
      <Row className="">
        <input
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          type="text"
          name="name"
          className=" rounded-lg px-2 py-1 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
          placeholder="Enter Any Task ☺️"
        />
        <Button type="submit" variant="safe" disable={isLoading}>
          {isLoading ? "loading..." : "Save"}
        </Button>
      </Row>
    </form>
  );
}

export default Form;
