import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <section className="px-5 py-10 min-h-[calc(100vh_-_100px)]">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <ul className="shadow dashbaordmenu rounded-md p-5">
                        <li><NavLink className="text-medium font-medium text-base text-gray-600 py-1 hover:bg-gray-100 px-3 rounded-md transition-all block" to="/dashboard">Account</NavLink></li>

                        <li><NavLink className="text-medium font-medium text-base text-gray-600 py-1 hover:bg-gray-100 px-3 rounded-md transition-all block" to="/dashboard/edit">Edit</NavLink></li>

                        <li><NavLink className="text-medium font-medium text-base text-gray-600 py-1 hover:bg-gray-100 px-3 rounded-md transition-all block" to="/dashboard/order">Order</NavLink></li>
                    </ul>
                </div>
                <div className="col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;