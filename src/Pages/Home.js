import { useState } from "react";
import useAuth from "../hooks/useAuth";
import RootLayout from "../Layouts/RootLayout";

export default function Home() {
    const { auth } = useAuth();

    return (
        <div className="container">
            <RootLayout />
            <div className="text-holder w-full mx-auto mt-24">
                {auth.accessToken ? (
                    <>
                        <h1 className="text-9xl text-center"><strong>Welcome</strong></h1>
                        <p className="text-7xl text-center mt-2">{auth.username}</p>) :
                    </> ) :
                    (<>
                        <h1 className="text-6xl text-center">Please <strong>Login</strong> to continue</h1>
                        <h2 className="mt-2 text-5xl text-center">If not a User then Please <strong>Register</strong></h2>
                    </>)}
            </div>
        </div >
    )
};