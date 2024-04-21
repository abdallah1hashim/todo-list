import Button from "./Button";

type edit = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

function Edit({ setIsEditing }: edit) {
  function handleOnClick() {
    setIsEditing((state) => !state);
  }

  return (
    <Button
      customized="bg-slate-200"
      size="sm"
      variant="customized"
      onClick={handleOnClick}
    >
      ✏️
    </Button>
  );
}

export default Edit;
