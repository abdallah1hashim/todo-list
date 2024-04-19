import Row from "./Row";

type box = {
  data: { title: string; date: string };
};

function Box({ data }: box) {
  return (
    <Row className=" w-full bg-white my-4 px-4 py-2 rounded-md">
      <Row className=" gap-4 ">
        <input type="checkbox" className=" h-7 w-7 border-none accent-black" />
        <div className="flex flex-col">
          <span>{data.title}</span>
          <span>{data.date}</span>
        </div>
      </Row>
      <Row justify="normal" className=" text-2xl gap-2">
        <button>🚫</button>
        <button>✏️</button>
      </Row>
    </Row>
  );
}

export default Box;
