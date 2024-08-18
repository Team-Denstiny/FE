import { createBrowserRouter, useLocation } from "react-router-dom";
import SigninPage from "../routes/signin/SigninPage";
import Layout from "../routes/Layout";
import HomePage from "../routes/home/HomePage";
import SearchPage from "../routes/home/SearchPage";
import SearchDetail from "../routes/home/SearchDetailPage";

const SearchRoute = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
  
    if (params.has('q')) {
      return <SearchDetail/>;
    } else {
      return <SearchPage />;
    }
  };

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
                <SearchRoute/>
            </Layout>
        )
    }
   
];

const router = createBrowserRouter(mainRouter);
export default router;
