

import Image from "next/image";
import logo from "@/public/assets/logo.svg";

const Signin = () => {
  return (
    <div className="py-10">
         <div className="flex justify-center gap-3 items-center">
            <Image src={logo} height={28} width={24} alt="logo" />
            <h6
              className="text-xl text-primary"
              style={{ fontFamily: "DMSans" }}
            >
              Bestaf
            </h6>
          </div>
        <h3 className="mt-5 flex justify-center text-2xl font-medium">Welcome, Fill in your details to register as Users</h3>

        <form className="bg-white rounded-3xl px-10 py-10 w-1/2 mx-auto my-10" style={{boxShadow:"0px 2px 14px 0px rgba(51, 51, 51, 0.15);"}}>
            <div className="mb-5 flex flex-col">
                <label htmlFor="name" className="font-semibold text-[#333333] mb-1">Full Name</label>
                <input className="rounded-lg px-3 py-3 border border-border placeholder:text-border" type="text" placeholder="Enter your name" id="name"/>
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="email" className="font-semibold text-[#333333] mb-1">Email</label>
                <input className="rounded-lg px-3 py-3 border border-border placeholder:text-border" type="email" placeholder="Enter your email" id="email"/>
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="number" className="font-semibold text-[#333333] mb-1">Phone Number</label>
                <input className="rounded-lg px-3 py-3 border border-border placeholder:text-border" type="tel" placeholder="Enter your phone number" id="number"/>
            </div>
            <div className="mb-5 flex flex-col">
                <label htmlFor="password" className="font-semibold text-[#333333] mb-1">Password</label>
                <input className="rounded-lg px-3 py-3 border border-border placeholder:text-border" type="email" placeholder="Password" id="password"/>
            </div>
            <div>
              <button className="bg-primary text-white flex justify-center items-center w-full rounded-lg px-3 py-3">
                Sign Up
              </button>
            </div>
        </form>
    </div>
  )
}

export default Signin