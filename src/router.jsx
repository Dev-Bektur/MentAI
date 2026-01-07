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
import ChatBot from "./pages/ChatBot";
import PlanFromAI from "./pages/PlanFromAI";
import AboutPremium from "./pages/AboutPremium";
import ToTheLesson from "./pages/ToTheLesson";
import ToTheHw from "./pages/ToTheHw";
import LessonDetail from "./pages/LessonDetail";
import HwDetail from "./pages/HwDetail";
import Quest from "./pages/Quest";
import Subjects from "./pages/Subjects";
import SubjectsOfHw from "./pages/SubjectsOfHw";
import ProfileRedirect from "./pages/ProfileRedirect";
import TeacherDashboard from "./pages/TeacherDashboard";

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
                path: "chatBot",
                element: <ChatBot/>
            },
            {
                path: "aiPlan",
                element: <PlanFromAI/>
            },
            {
                path: "aboutPre",
                element: <AboutPremium/>
            },
            {
                path: "totheL",
                element: <ToTheLesson/>
            },
            {
                path: "totheH",
                element: <ToTheHw/>
            },
            {
                path: "lesson/:id",
                element: <LessonDetail/>
            },
            {
                path: "homew/:id",
                element: <HwDetail/>
            },
            {
                path: "quest/:id",
                element: <Quest/>
            },
            {
                path: "subjects",
                element: <Subjects/>
            },
            {
                path: "subOfHw",
                element: <SubjectsOfHw/>
            },
            {
                path: "profileTeacher",
                element: <ProfileRedirect/>
            },
            {
                path: "teacher-dashboard",
                element: <TeacherDashboard/>
            }
        ]
    }
])

export default myRouter