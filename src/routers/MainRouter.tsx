import { createBrowserRouter, Route } from "react-router-dom";
import SigninPage from "../routes/signin/SigninPage";
import Layout from "../routes/Layout";
import HomePage from "../routes/home/HomePage";
import ResendPage from "../routes/signin/Resend";
import CreateUsers from "../routes/createusers/CreateUsers"
import Layout2 from "../routes/Layout2";

export const mainRouter = [

    {
        path: "/",
        element:(
            <Layout>
                <HomePage/>
            </Layout>
        )
       
    },
    
    {
        path: "/signin",
        element: (
            <Layout>
                <SigninPage />
            </Layout>
        )
    },
    {
        path: "/signin/endpoint",
        element: (
            <ResendPage />
        )
    },
    {
        path: "/signin/create",
        element: (
            <Layout2>
                <CreateUsers />
            </Layout2>
        )
    }
];

const router = createBrowserRouter(mainRouter);
export default router;
