import { Jersey_25 } from "next/font/google";

const font = Jersey_25({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <header className={`${font.className}`}>
      <h1 className=" py-4 text-gray-700 container mx-auto px-4 flex justify-center items-center text-6xl tracking-wider">
        TODO LIST
      </h1>
    </header>
  );
}

export default Header;
