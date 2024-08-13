import { createBrowserRouter } from "react-router-dom";
import SigninPage from "../routes/signin/SigninPage";
import Layout from "../routes/Layout";
import HomePage from "../routes/home/HomePage";
import SearchPage from "../routes/home/SearchPage";

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
        path:"/search",
        element:(
            <Layout>
                <SearchPage/>
            </Layout>
        )
    }
   
];

const router = createBrowserRouter(mainRouter);
export default router;
