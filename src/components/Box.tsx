import Row from "./Row";

type box = {
  data: { title: string; date: string };
};

function Box({ data }: box) {
  return (
    <Row className=" w-full bg-white my-4 px-4 py-2 rounded-md">
      <Row className=" gap-2 ">
        <input
          type="checkbox"
          className=" h-6 w-6 border-none accent-slate-200"
        />
        <Row type="vertical">
          <span>{data.title}</span>
          <span>{data.date}</span>
        </Row>
      </Row>
      <Row>
        <button>🚫</button>
        <button>✏️</button>
      </Row>
    </Row>
  );
}

export default Box;
