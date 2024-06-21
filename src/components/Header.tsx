import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 bg-gray-700">
      <nav>
        <ul className="flex gap-4">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
