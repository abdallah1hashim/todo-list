type row = {
  children: React.ReactNode;
  type: "vertical" | "horizontal";
  className?: string;
};

function Row({ children, type, className, ...rest }: row) {
  const classNames = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };
  const rowClass = classNames[type] || "";
  return (
    <div
      className={`
  flex items-center justify-between ${rowClass} ${className ? className : ""}
  `}
      {...rest}
    >
      {children}
    </div>
  );
}

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
