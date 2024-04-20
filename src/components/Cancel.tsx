import Button from "./Button";

type cancel = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cancel({ setIsEditing }: cancel) {
  function handleOnClick() {
    setIsEditing((state) => !state);
  }

  return (
    <Button
      customized="bg-slate-200"
      size="sm"
      varriant="customized"
      onClick={handleOnClick}
    >
      ❌
    </Button>
  );
}

export default Cancel;
