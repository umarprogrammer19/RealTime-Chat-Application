import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="min-w-[30rem] bg-base-300 flex flex-col gap-5 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-center">
                    Register Your Account
                </h2>

                <form className="flex flex-col gap-5">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <BiUserCircle />
                        <input
                            type="text"
                            placeholder="Fullname"
                            className="w-full grow"
                            required
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaUser />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full grow"
                            required
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <IoKeySharp />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full grow"
                            required
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <IoKeySharp />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full grow"
                            required
                        />
                    </label>

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
