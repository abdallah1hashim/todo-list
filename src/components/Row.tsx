type row = {
  children: React.ReactNode;
  type?: "vertical" | "horizontal";
  justify?:
    | "normal"
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  className?: string;
};

function Row({
  children,
  type = "horizontal",
  justify = "between",
  className,
  ...rest
}: row) {
  const classNames = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };
  const rowClass = classNames[type] || "";
  const justifyFlex = `justify-${justify}`;

  return (
    <div
      className={`
  flex ${justifyFlex} items-center justify-between ${rowClass} ${
    className ? className : ""
  }
  `}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Row;
