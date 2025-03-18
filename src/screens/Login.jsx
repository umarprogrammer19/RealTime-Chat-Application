import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserThunk } from "../store/slice/users/user.thunk";

const Login = () => {

    // For Setting The Login Data
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    // For Calling The Redux Function
    const dispatch = useDispatch();

    // For Getting Values On The Change Of The Input
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    // For Loggin In
    const handleLogin = async (event) => {
        event.preventDefault();
        dispatch(loginUserThunk(loginData));
    }

    // User Interface
    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="min-w-[30rem] bg-base-300 flex flex-col gap-5 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-center">
                    Login To Your Account
                </h2>

                <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaUser />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full grow"
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <IoKeySharp />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full grow"
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>

                    <p className="text-sm text-center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-400 underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
