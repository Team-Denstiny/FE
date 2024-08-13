import React from "react";
import Navbar from "../../components/common/Navbar";

const HomePage: React.FC = () => {
    const authToken = localStorage.getItem("authToken");
    const autoId = localStorage.getItem("autoId");
    console.log(authToken);
    return (
        <div>
            <h2>Authentication Example</h2>
            {authToken ? (
                <p>Token: {authToken}</p>
            ) : (
                <p>Loading token...</p>
            )}
            <br />

            <h2>Check My Id</h2>
            {autoId ? (
                <p>id: {autoId}</p>
            ) : (
                <p>Loading ID...</p>
            )}
            <Navbar text="home"></Navbar>

        </div>
    )
}

export default HomePage;