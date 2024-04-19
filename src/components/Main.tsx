type main = { children: React.ReactNode };

function Main({ children }: main) {
  return <main className=" lg:w-[50%] w-full mx-auto px-6  ">{children}</main>;
}

export default Main;
