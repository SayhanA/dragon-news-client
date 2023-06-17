import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRouter from "../routes/PrivateRouter"
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms',
                element: <Terms />
            }
        ]
    },
    {
        path: 'category',
        element: <Main />,
        children: [
            // {
            //     path: '/',
            //     element: <Category />,
            //     loader: ({params}) => fetch('http://localhost:5000/news')
            // },
            {
                path: ':id',
                element: <Category />,
                loader : ({params}) => fetch(`https://the-news-dragon-server-sayhana.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element : <NewsLayout></NewsLayout>,
        children:  [
            {
                path: ':id',
                element: <PrivateRouter><News /></PrivateRouter>,
                loader : ({params}) => fetch(`https://the-news-dragon-server-sayhana.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;