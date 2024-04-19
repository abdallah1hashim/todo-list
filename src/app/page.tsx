import Box from "@/components/Box";
import Row from "@/components/Row";

const data = [{ title: "SMTH", date: "5 may, 21 AM 2024" },{ title: "SMTH", date: "5 may, 21 AM 2024" }];

function Home() {
  return (
    <Row type="vertical">
      <Row className="w-full">
        <button>Add</button>
        <select></select>
      </Row>
      <Row type="vertical" className="w-full bg-slate-200 my-6 p-6 rounded-md">
        {data.map((d) => (
          <Box data={d} key={d.date} />
        ))}
      </Row>
    </Row>
  );
}

export default Home;
