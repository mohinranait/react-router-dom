import { NavLink } from "react-router-dom";
import "./header.css"
const Header = () => {

    return (
        <header>
            
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="navbar font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="block py-2 pl-3 pr-4 text-white ">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="block py-2 pl-3 pr-4 text-white " >Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className="block py-2 pl-3 pr-4 text-white " >Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;