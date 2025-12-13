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
import MathTest from "./pages/MathTest";
import KyrgyzTest from "./pages/KyrgyzTest";
import Admin from "./pages/Admin";
import LessonWatch from "./pages/LessonWatch";
import Homeworks from "./pages/Homeworks";
import ChatBot from "./pages/ChatBot";
import PlanFromAI from "./pages/PlanFromAI";
import Subject from "./pages/Subject";
import SubjectHw from "./pages/SubjectHw";
import FirstLesson from "./pages/LessonList/FirstLesson";
import AboutPremium from "./pages/AboutPremium";

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
            },
            {
                path: "math",
                element: <MathTest/>
            },
            {
                path: "kyrgyz",
                element: <KyrgyzTest/>
            },
            {
                path: "admin",
                element:<Admin/>
            },
            {
                path: "watchLesson",
                element: <LessonWatch/>
            },
            {
                path: "homework",
                element: <Homeworks/>
            },
            {
                path: "chatBot",
                element: <ChatBot/>
            },
            {
                path: "aiPlan",
                element: <PlanFromAI/>
            },
            {
                path: "subject",
                element: <Subject/>
            },
            {
                path: "newSubject",
                element: <SubjectHw/>
            },
            {
                path: "aboutPre",
                element: <AboutPremium/>
            },
            {
                path: "firstLesson",
                element: <FirstLesson/>
            }
        ]
    }
])

export default myRouter