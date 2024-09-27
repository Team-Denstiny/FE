import { createBrowserRouter, useLocation } from "react-router-dom";
import CreateAddress from "../routes/createusers/CreateAddress";
import CreateUsers from "../routes/createusers/CreateUsers";
import HomePage from "../routes/home/HomePage";
import SearchDetail from "../routes/Search/SearchDetailPage";
import SearchPage from "../routes/Search/SearchPage";
import Layout from "../routes/Layout";
import Layout2 from "../routes/Layout2";
import ModifyMyPage from "../routes/mypage/Modifiy/ModfiyMyProfile";
import MyPage from "../routes/mypage/MyPage/MyPage";
import Profile from "../routes/mypage/Profile/Profile";
import GetMyId from "../routes/signin/oAuth/GetMyId";
import ResendPage from "../routes/signin/oAuth/oAuthMiddleHandler";
import SigninPage from "../routes/signin/SigninPage";
import SearchPage2 from "../routes/Search/SearchPage2";
import ExpertSearch from "../routes/Search/Expert/ExpertSearch";
import LayoutGray from "../routes/LayoutOnlyGray";
import OpenHospital from "../routes/Search/OpenHospital/OpenHospital";
import HospiInfo from "../routes/Hospital/Hospital";
import ReviewCommentPage from "../routes/Hospital/Review/ReviewComment";
import StarRating from "../routes/Hospital/Review/starRatingPage";
import WriteReview from "../routes/Hospital/Review/WriteReview";
import ReviewInReview from "../routes/Hospital/Review/ReviewAndReview";

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
        path:"/search2",
        element:(
            <Layout>
                <SearchPage2 />
            </Layout>
        )
    },
    {
        path: "/search/expert",
        element: (
            <LayoutGray>
                <ExpertSearch />
            </LayoutGray>
        )
    },
    {
        path: "/search/open",
        element: (
            <LayoutGray>
                <OpenHospital />
            </LayoutGray>
        )
    },
    {
        path: "/search/hospital/:id",
        element: (
            <Layout>
                <HospiInfo />
            </Layout>
        )
    },
    {
        path: "/search/hospital/:id/review",
        element: (
            <Layout>
                <WriteReview />
            </Layout>
        )
    },
    {
        path: "/search/hospital/:id/reviews",
        element: (
            <Layout>
                <ReviewInReview />
            </Layout>
        )
    },
];

const router = createBrowserRouter(mainRouter);
export default router;
