import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

function Save({
  data,
  setIsEditing,
}: {
  data: { id: string; name: string };
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    await fetch(`api/tasks/${data.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    setIsLoading(false);
    setIsEditing(false);
    router.refresh();
  }
  return (
    <Button
      disable={isLoading}
      customized="bg-slate-200"
      size="sm"
      variant="customized"
      onClick={handleClick}
    >
      {isLoading ? "🔃" : "✅"}
    </Button>
  );
}

export default Save;
