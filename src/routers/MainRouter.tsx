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
import MyWritesPage from "../routes/mypage/writes/MyWritesPage";
import MyLikesPage from "../routes/mypage/good/MyLikesPage";
import CommunityPage from "../routes/Community/CommunityPage";
import ComWrite from "../routes/Community/write/ComWrite";
import DragAndDropUpload from "../routes/Community/write/test";
import MyReview from "../routes/Hospital/Review/MyReview";
import MyWrite from "../routes/community/MyWrite";
import MyLike from "../routes/community/MyLike";

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
            <Layout2>
                <MyPage />
            </Layout2>
        )
    },
    {
        path: "/profile/mypage/modify",
        element: (
            <Layout2>
                <ModifyMyPage />
            </Layout2>
        )
    },
    {
        path:"/search",
        element:(
            <Layout2>
                <SearchRoute/>
            </Layout2>
        )
    },
    {
        path:"/search2",
        element:(
            <Layout2>
                <SearchPage2 />
            </Layout2>
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
            <Layout2>
                <HospiInfo />
            </Layout2>
        )
    },
    {
        path: "/search/hospital/:id/review",
        element: (
            <Layout2>
                <WriteReview />
            </Layout2>
        )
    },
    {
        path: "/search/hospital/:id/reviews",
        element: (
            <Layout2>
                <ReviewInReview />
            </Layout2>
        )
    },
    {
        path: "/heart",
        element: (
            <Layout>
                <MyLikesPage />
            </Layout>
        )
    },
    {
        path: "/community",
        element: (
            <Layout>
                <CommunityPage />
            </Layout>
        )
    },
    {
        path: "/community/write",
        element: (
            <Layout>
                <ComWrite />
            </Layout>
        )
    },
    {
        path: "/myreview",
        element: (
            <Layout>
                <MyReview />
            </Layout>
        )
    },
    {
        path: "/myWrite",
        element: (
            <Layout2>
                <MyWrite />
            </Layout2>
        )
    },
    {
        path: "/myLike",
        element: (
            <Layout2>
                <MyLike />
            </Layout2>
        )
    },
    {
        path: "/test",
        element: (
            <Layout>
                <DragAndDropUpload />
            </Layout>
        )

    }

];

const router = createBrowserRouter(mainRouter);



export default router;
