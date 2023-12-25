'use client'
import React from "react";
import avatar from "@/public/assets/dashboard/avatar.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useAdminProfile } from "@/hooks/useAdminProfile"; 
// import { adminProfile } from "@/queries/getAdminProfile";
import { useQuery } from '@tanstack/react-query'

import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();

const Navbar = () => {

  const pathname = usePathname();

  // const { status, data, error } = useAdminProfile()
 


const adminProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response, "adminprofile");
  } catch (error) {
    console.log(error, "adminprofileerror");
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while sending an admin invite");
  }
};

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['profile'],
  queryFn: adminProfile,
})


  const { data: adminfetch, status } = useAdminProfile();

  console.log(adminfetch, "adminfetch")
  console.log(data, "adminfetch2222")



  // even this below that suppose work no work

  const postQuery = useQuery({
    queryKey: ['admin/profile'],
    queryFn: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response, "adminprofile");
      } catch (error) {
        console.log(error, "adminprofileerror");
        if (error instanceof AxiosError) {
          throw new Error(error?.response?.data?.message);
        } else if (error instanceof Error) {
          throw error;
        } else throw new Error("Error occurred while sending an admin invite");
      }
    }
  })

  console.log(postQuery, "postquery")
  console.log(postQuery.data, "postquery")


  // const name = pathname.split("/")[1];
  return (
    <div className="bg-white py-2 px-14" >
      <section className="flex justify-end">
        <div className="flex items-center gap-4 cursor-pointer ">
          <div className="cursor-pointer relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M20.542 17H22.542V19H2.54199V17H4.54199V10C4.54199 7.87827 5.38485 5.84344 6.88514 4.34315C8.38543 2.84285 10.4203 2 12.542 2C14.6637 2 16.6986 2.84285 18.1988 4.34315C19.6991 5.84344 20.542 7.87827 20.542 10V17ZM18.542 17V10C18.542 8.4087 17.9099 6.88258 16.7846 5.75736C15.6594 4.63214 14.1333 4 12.542 4C10.9507 4 9.42457 4.63214 8.29935 5.75736C7.17413 6.88258 6.54199 8.4087 6.54199 10V17H18.542ZM9.54199 21H15.542V23H9.54199V21Z"
                fill="black"
              />
            </svg>
            <div
              className="absolute top-0 end-0 flex justify-center items-center"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#EB5757",
                color: "#F2F2F2",
                fontSize: "5px",
              }}
            >
              3
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={avatar}
              alt="user"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col ">
              <p
                className="text-neutral-900 text-base font-bold tracking-wide"
                style={{ fontFamily: "DMSans" }}
              >
                Abayomi O.
              </p>
              <span className="text-primary text-xs tracking-tight" style={{ fontFamily: "DMSans" }}>
                Super Admin
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
