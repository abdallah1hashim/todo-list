import Button from "./Button";
import Row from "./Row";

function Form() {
  return (
    <form className=" w-full">
      <Row className="">
        <input
          type="text"
          className=" rounded-lg px-2 py-1 focus:outline-2 focus:outline-indigo-500 focus:outline-offset-2"
          placeholder="Enter Any Task ☺️"
        />
        <Button type="submit" varriant="safe">
          Save
        </Button>
      </Row>
    </form>
  );
}

export default Form;
