import { createBrowserRouter, useLocation } from "react-router-dom";
import CreateAddress from "../routes/createusers/CreateAddress";
import CreateUsers from "../routes/createusers/CreateUsers";
import HomePage from "../routes/home/HomePage";
import SearchDetail from "../routes/home/SearchDetailPage";
import SearchPage from "../routes/home/SearchPage";
import Layout from "../routes/Layout";
import Layout2 from "../routes/Layout2";
import ModifyMyPage from "../routes/mypage/Modifiy/ModfiyMyProfile";
import MyPage from "../routes/mypage/MyPage/MyPage";
import Profile from "../routes/mypage/Profile/Profile";
import GetMyId from "../routes/signin/oAuth/GetMyId";
import ResendPage from "../routes/signin/oAuth/oAuthMiddleHandler";
import SigninPage from "../routes/signin/SigninPage";
import ReviewPage from "../routes/review/hospital";
import StarRating from "../routes/review/starRating";
import MyWritesPage from "../routes/mypage/writes/MyWritesPage";
import MyLikesPage from "../routes/mypage/good/MyLikesPage";
import CommunityPage from "../routes/community/CommunityPage";

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
    },
    {
        path:"/search",
        element:(
            <Layout>
                <SearchRoute/>
            </Layout>
        )
    },
    {
        path: "/review/hospital",
        element: (
            <Layout>
                <ReviewPage />
            </Layout>
        )
    },
    {
        path: "/review/starRating",
        element: (
            <Layout>
                <StarRating />
            </Layout>
        )
    },
    {
        path: "/mypage/writes",
        element: (
            <Layout>
                <MyWritesPage />
            </Layout>
        )
    },
    {
        path: "/mypage/good",
        element: (
            <Layout>
                <MyLikesPage />
            </Layout>
        )
    },
    {
        path: "/community/all",
        element: (
            <Layout>
                <CommunityPage />
            </Layout>
        )
    }

];

const router = createBrowserRouter(mainRouter);
export default router;
