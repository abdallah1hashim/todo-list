type checkBox = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

function CheckBox({ onChange, checked }: checkBox) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`  h-7 w-7 border-none accent-indigo-500 ${
        checked ? "" : "appearance-none"
      } border-indigo-500 border-2 bg-slate-200 rounded-sm`}
    />
  );
}

export default CheckBox;
