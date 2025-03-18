import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserThunk } from "../store/slice/users/user.thunk";

const SignUp = () => {

    // For Setting Signup Data
    const [signupData, setSignupData] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "male"
    });

    // Redux State
    const dispatch = useDispatch();

    // Navigation
    const navigate = useNavigate();

    // For Setting The Values In The State After Input Change
    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };

    // Handle Signup
    const handleRegister = async (event) => {
        event.preventDefault();
        if (signupData.password !== signupData.confirmPassword) return toast.error("Password and confirm password are not same");
        const response = await dispatch(registerUserThunk(signupData));
        if (response.payload.success) navigate("/");
    }


    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="min-w-[30rem] bg-base-300 flex flex-col gap-5 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-center">
                    Register Your Account
                </h2>

                <form onSubmit={handleRegister} className="flex flex-col gap-5">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <BiUserCircle />
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Fullname"
                            className="w-full grow"
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaUser />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full grow"
                            onChange={handleChange}
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
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <IoKeySharp />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full grow"
                            onChange={handleChange}
                        />
                    </label>

                    <div className="input input-bordered flex items-center gap-2 w-full">
                        {/* Male */}
                        <label className="cursor-pointer" htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value={"male"}
                            className="radio radio-primary"
                            onChange={handleChange}
                            defaultChecked
                        />

                        {/* Female */}
                        <label className="cursor-pointer" htmlFor="female">Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value={"female"}
                            className="radio radio-primary"
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        SignUp
                    </button>

                    <p className="text-sm text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-400 underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
