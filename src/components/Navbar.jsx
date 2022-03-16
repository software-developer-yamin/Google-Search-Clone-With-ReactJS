import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <header className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 dark:border-gray-700">
      <nav className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white px-2 py-1 rounded dark:bg-gray-500 dark:text-gray-200">
            Google 🔎
          </p>
        </Link>
        <button
          type="button"
          className=" text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg font-bold dark:shadow-gray-500"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </nav>
      <Search />
    </header>
  );
}

export default Navbar;
