"use client";

import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [active, setActive] = useState("super");

  return (
    <div className="pt-10">
      <h3 className="mt-5 flex justify-center text-2xl font-medium">
        Welcome Admin, Log in now
      </h3>

      <section className="bg-white flex w-4/12 mx-auto my-5">
        <h5
          className={`${
            active === "super"
              ? "text-white bg-primary"
              : "text-[#828282] bg-white"
          } flex justify-center px-7 py-3 w-1/2 cursor-pointer text-2xl`}
          onClick={() => setActive("super")}
        >
          Super Admin
        </h5>
        <h5
          className={`${
            active === "user"
              ? "text-white bg-primary"
              : "text-[#828282] bg-white"
          } flex justify-center px-7 py-3 w-1/2 cursor-pointer text-2xl`}
          onClick={() => setActive("user")}
        >
          Users
        </h5>
      </section>

      {active === "user" ? (
        <form
          className="bg-white rounded-3xl px-10 py-10 w-5/12 mx-auto my-10"
          style={{ boxShadow: "0px 2px 14px 0px rgba(51, 51, 51, 0.15);" }}
        >
          <div className="mb-5 flex flex-col">
            <label
              htmlFor="email"
              className="font-semibold text-[#333333] mb-1"
            >
              Email
            </label>
            <input
              className="rounded-lg px-3 py-3 border border-border placeholder:text-border"
              type="email"
              placeholder="Email"
              id="email"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="font-semibold text-[#333333] mb-1"
              >
                Password
              </label>
              <label className="font-semibold text-primary mb-1">
              <Link href={`/resetpassword`}>
                Forgot Password
              </Link>
              </label>
            </div>
            <input
              className="rounded-lg px-3 py-3 border border-border placeholder:text-border"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <div>
            <button className="bg-primary text-white flex justify-center items-center w-full rounded-lg px-3 py-3">
              Sign In
            </button>
          </div>
        </form>
      ) : (
        <form
          className="bg-white rounded-3xl px-10 py-10 w-5/12 mx-auto my-10"
          style={{ boxShadow: "0px 2px 14px 0px rgba(51, 51, 51, 0.15);" }}
        >
          <div className="mb-5 flex flex-col">
            <label
              htmlFor="email"
              className="font-semibold text-[#333333] mb-1"
            >
              Email
            </label>
            <input
              className="rounded-lg px-3 py-3 border border-border placeholder:text-border"
              type="email"
              placeholder="Email"
              id="email"
            />
          </div>

          <div className="mb-5 flex flex-col">
              <label
                htmlFor="password"
                className="font-semibold text-[#333333] mb-1"
              >
                Password
              </label>
            <input
              className="rounded-lg px-3 py-3 border border-border placeholder:text-border"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <div>
            <button className="bg-primary text-white flex justify-center items-center w-full rounded-lg px-3 py-3">
              Sign In
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
