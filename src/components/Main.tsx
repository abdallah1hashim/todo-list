type main = { children: React.ReactNode };

function Main({ children }: main) {
  return <main className=" container mx-auto px-4">{children}</main>;
}

export default Main;
