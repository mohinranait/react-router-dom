
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Product from '../Pages/Product/Product';
import DashboardLayout from '../Layout/DashboardLayout';
import Account from '../Pages/User/Account';
import UserEdit from '../Pages/User/UserEdit';
import OrderList from '../Pages/User/OrderList';

const myRoutes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : "/contact",
                element : <Contact></Contact>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader : async () => await fetch("https://dummyjson.com/products"),
            },
            {
                path: "/products/:id",
                element : <Product></Product>,
                loader : async ({params}) => await fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path : "/dashboard",
                element : <DashboardLayout></DashboardLayout>,
                children : [
                    {
                        path : "/dashboard",
                        element : <Account></Account>
                    },
                    {
                        path : "/dashboard/edit",
                        element : <UserEdit></UserEdit>
                    },
                    {
                        path : "/dashboard/order",
                        element : <OrderList></OrderList>
                    }
                ]
            }
        ]
    }
])

export default myRoutes;