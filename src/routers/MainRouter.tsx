import { createBrowserRouter, Route } from "react-router-dom";
import SigninPage from "../routes/signin/SigninPage";
import Layout from "../routes/Layout";
import HomePage from "../routes/home/HomePage";
import ResendPage from "../routes/signin/Resend";

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
    }
];

const router = createBrowserRouter(mainRouter);
export default router;
