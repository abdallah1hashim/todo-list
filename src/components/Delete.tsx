import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

function Delete({id}:{id:string}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    await fetch(`api/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    setIsLoading(false);
    router.refresh();
  }
  return (
    <Button disable={isLoading} onClick={handleClick} customized="bg-slate-200" size="sm" variant="customized">
      {isLoading?"🔃" : "🚫"}
    </Button>
  );
}

export default Delete;
