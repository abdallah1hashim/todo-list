type main = { children: React.ReactNode; className: string; };

function Main({ children, className }: main) {
  return <main className={` lg:w-[50%] w-full mx-auto px-6 ${className}  `}>{children}</main>;
}

export default Main;
