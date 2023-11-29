import { Outlet, NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function RootLayout() {
    const { auth, setAuth } = useAuth();
    // console.log(auth);

    // const handleLogout = () => {
    //     const conf = window.confirm("Are you sure?");
    //     if (conf) {
    //         setAuth({ ...auth, accessToken: undefined });
    //     }
    // };

    return (
        <>
            <div className="root-Layout bg-gray-100">
                <header>
                    <nav className="flex justify-end bg-gray-200 border-b-2 border-gray-400 items-center">
                        <h1 className="mr-auto p-4 text-2xl ml-24 text-gray-800
                    cursor-pointer max-sm:ml-4">Your LOGO</h1>

                        <NavLink to="/Unicode-Task-3/home" className={({ isActive }) => `btn max-sm:m-0
                    ${isActive ? "bg-orange-400" : "bg-grey-100 text-white"}
                    `}>Home</NavLink>

                        {auth.accessToken ? (
                            <NavLink to="/Unicode-Task-3/login" className={({ isActive }) => `btn max-sm:m-0
                        ${isActive ? "bg-orange-400" : "bg-grey-100 text-white"}
                        `}
                                onClick={ () =>  setAuth({ ...auth, accessToken: undefined }) }
                            >Logout</NavLink>)
                            : (
                                <NavLink to="/Unicode-Task-3/login" className={({ isActive }) => `btn max-sm:m-0
                            ${isActive ? "bg-orange-400" : "bg-grey-100 text-white"}
                            `}>Login</NavLink>
                            )}
                        <NavLink to="/Unicode-Task-3/register" className={({ isActive }) => `btn max-sm:m-0
                    ${isActive ? "bg-orange-400" : "bg-grey-100 text-white"}
                    `}>Register</NavLink>
                    </nav>
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
};
