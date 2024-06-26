import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="p-4 bg-gray-700 z-20 relative">
        <nav className="flex gap-2">
          <ul className="hidden md:flex md:gap-4 md:items-center md:flex-1">
            <li className="cursor-pointer select-none text-white">
              <Link to="/class">Class</Link>
            </li>
            <li className="cursor-pointer select-none text-white">
              <Link to="/function">Function</Link>
            </li>
            <li className="cursor-pointer select-none text-white">
              <Link to="/position">Position</Link>
            </li>
            <li className="cursor-pointer select-none text-white">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="cursor-pointer select-none text-white ml-auto">
              <Link to="/login">Sign In</Link>
            </li>
          </ul>

          <button
            className="border-2 border-white border-solid p-2 select-none ml-auto md:hidden"
            type="button"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <p className="text-white">-_-</p>
          </button>
        </nav>
      </header>
      {isOpen && (
        <div
          className="h-screen w-screen bg-black/75 cursor-pointer fixed top-0 left-0 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
