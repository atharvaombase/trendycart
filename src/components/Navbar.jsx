import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50 w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section - Sidebar toggle and logo */}
          <div className="flex items-center gap-x-6">
            {/* Sidebar toggle button */}
            <button
              className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open sidebar</span>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="TrendyCart Logo"
              />
              <span className="text-2xl font-semibold dark:text-white ml-3">
                TrendyCart
              </span>
            </Link>
          </div>

          {/* Right section - Navigation links (desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 transition-colors"
            >
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 transition-colors">
                Dropdown
                <svg
                  className="w-3 h-3 ml-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div className="absolute hidden group-hover:flex flex-col w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border dark:border-gray-700">
                {["Dashboard", "Settings", "Earnings", "Sign out"].map(
                  (item) => (
                    <Link
                      key={item}
                      to="/"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>

            <Link
              to="/"
              className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/"
              className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors dark:hover:bg-gray-700"
            >
              <FaShoppingCart className="w-6 h-6 text-gray-900 dark:text-white" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="md:hidden text-gray-500 hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar (Drawer Navigation) */}
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800 shadow-xl"
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-4"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            {[
              "Dashboard",
              "Kanban",
              "Inbox",
              "Users",
              "Products",
              "Sign In",
              "Sign Up",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="ml-3">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
