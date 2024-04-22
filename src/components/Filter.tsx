// "use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter({ filterOptions }: { filterOptions: string[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filter = searchParams.get("show") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`?show=${e.target.value}`);
  };

  return (
    <select
      value={filter}
      onChange={handleChange}
      className=" rounded-md px-2 py-2 uppercase"
    >
      {filterOptions.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default Filter;
