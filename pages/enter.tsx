import Link from "next/link";
import React, { useState } from "react";
import { useAuthStore } from "../store";

function EnterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, signIn, signOut } = useAuthStore();

  function handleSubmit(e) {
    e.preventDefault();

    signIn();
  }

  if (user.signedIn) {
    return (
      <main className="w-full h-screen bg-yellow-50 grid place-items-center">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-sm lg:max-w-md p-8">
          <div className="text-center text-gray-900 flex flex-col items-center gap-2 font-bold">
            <h2 className="text-2xl">Welcome Back</h2>
            <p className="w-full max-w-xs px-4">
              Click the button below to sign out!
            </p>
            <button onClick={() => signOut()} className="p-2 text-base max-w-xs font-semibold bg-slate-800 w-full text-white rounded-md">Sign Out</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full h-screen bg-yellow-50 grid place-items-center">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-sm lg:max-w-md p-8 pb-2">
        <div className="text-center text-gray-900 flex flex-col items-center gap-2 font-bold">
          <h2 className="text-2xl">Agent Login</h2>
          <p className="w-full max-w-xs px-4">
            Hey, Enter your details to get signed in to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="email" className="input-wrapper">
              <input
                className="input-container"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </label>

            <label htmlFor="password" className="input-wrapper">
              <input
                className="input-container"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <button
                aria-label="toggle password visibility"
                className="text-xs pr-3 font-semibold text-slate-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>
            <button
              aria-label="having troubles?"
              className="font-semibold text-gray-700 hover:underline"
            >
              Having trouble signing in?
            </button>
          </div>
          <button type="submit" className="submit-btn">
            Sign In
          </button>

          <Divider />
          <div className="grid grid-cols-3 gap-2 w-full">
            <button aria-label="google" className="social-btn">
              Google
            </button>
            <button aria-label="apple id" className="social-btn">
              Apple ID
            </button>
            <button aria-label="facebook" className="social-btn">
              Facebook
            </button>
          </div>

          <div className="w-full pt-2 flex items-center justify-center">
            <p className="text-sm text-gray-700 ">
              Don't have an account?{" "}
              <Link className="font-bold text-gray-900" href={"/"}>
                Request Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

function Divider() {
    return (
        <div className="relative mx-auto my-4 w-full max-w-[150px] border-b-2 border-gray-700">
            <p className="text-gray-700 font-semibold text-xs absolute left-[50%] bottom-[-50%] translate-x-[-50%] translate-y-[50%] bg-white px-2 w-full  max-w-[100px] text-center">Or Sign in with</p>
        </div>
    )
}

export default EnterPage;
