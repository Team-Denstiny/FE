import { createBrowserRouter } from "react-router-dom";
import CreateAddress from "../routes/createusers/CreateAddress";
import CreateUsers from "../routes/createusers/CreateUsers";
import HomePage from "../routes/home/HomePage";
import Layout from "../routes/Layout";
import Layout2 from "../routes/Layout2";
import ModifyMyPage from "../routes/mypage/Modifiy/ModfiyMyProfile";
import MyPage from "../routes/mypage/MyPage/MyPage";
import Profile from "../routes/mypage/Profile/Profile";
import GetMyId from "../routes/signin/GetMyId";
import ResendPage from "../routes/signin/Resend";
import SigninPage from "../routes/signin/SigninPage";

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
        path: "/getMyId",
        element: (
            <GetMyId />
        )
    },
    {
        path: "/signin/endpoint/createAddress",
        element: (
            <Layout>
                <CreateAddress />
            </Layout>
        )
    },
    {
        path: "/signin/create",
        element: (
            <Layout2>
                <CreateUsers />
            </Layout2>
        )
    },
    {
        path: "/profile",
        element: (
            <Layout>
                <Profile />
            </Layout>
        )
    },
    {
        path: "/profile/mypage",
        element: (
            <Layout>
                <MyPage />
            </Layout>
        )
    },
    {
        path: "/profile/mypage/modify",
        element: (
            <Layout>
                <ModifyMyPage />
            </Layout>
        )
    }
];

const router = createBrowserRouter(mainRouter);
export default router;
