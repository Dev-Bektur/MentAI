import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import Lessons from "./pages/Lessons";
import University from "./pages/University";
import QAPage from "./pages/QAPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Main/>
            },
            {
                path: "test",
                element: <Test/>
            },
            {
                path: "lesson",
                element: <Lessons/>
            },
            {
                path: "university",
                element: <University/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "qa",
                element: <QAPage/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            }
        ]
    }
])

export default myRouter