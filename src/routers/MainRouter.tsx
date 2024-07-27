import { createBrowserRouter } from "react-router-dom";
import SigninPage from "../routes/signin/SigninPage";
import Layout from "../routes/Layout";

export const mainRouter = [
    {
        path: "/signin",
        element: (
            <Layout>
                <SigninPage />
            </Layout>
        )
    },
    {
        path: "/",
       
    }
];

const router = createBrowserRouter(mainRouter);
export default router;
