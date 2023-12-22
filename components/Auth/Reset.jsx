import React from "react";

const Reset = () => {
  return (
    <div className="pt-10">
      <h3 className="mt-14 flex justify-center text-2xl font-medium">
        Enter your email to reset password
      </h3>
      <form
        className="bg-white rounded-3xl px-10 py-10 w-5/12 mx-auto my-10"
        style={{ boxShadow: "0px 2px 14px 0px rgba(51, 51, 51, 0.15);" }}
      >
        <div className="mb-5 flex flex-col">
          <label htmlFor="email" className="font-semibold text-[#333333] mb-1">
            Email
          </label>
          <input
            className="rounded-lg px-3 py-3 border border-border placeholder:text-border"
            type="email"
            placeholder="Email"
            id="email"
          />
        </div>

        <div className="mb-10 mt-5">
          <button className="bg-primary text-white flex justify-center items-center w-full rounded-lg px-3 py-3">
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
