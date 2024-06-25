import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="p-4 bg-gray-700 z-20 relative">
        <nav>
          <ul className="flex gap-4 items-center">
            <Link to="/class">
              <li className="cursor-pointer select-none text-white">Class</li>
            </Link>
            <Link to="/function">
              <li className="cursor-pointer select-none text-white">Function</li>
            </Link>
            <Link to="/position">
              <li className="cursor-pointer select-none text-white">Position</li>
            </Link>
            <Link to="/shop">
              <li className="cursor-pointer select-none text-white">Shop</li>
            </Link>
            <Link to="/login" className="ml-auto">
              <li className="cursor-pointer select-none text-white">Sign In</li>
            </Link>

            <button
              className="border-2 border-white border-solid p-2 select-none"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <p className="text-white">-_-</p>
            </button>
          </ul>
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
