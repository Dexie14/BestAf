"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogoutIcon } from "./icons/LogoutIcon";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const title = pathname.split("/")[2];

  const pathParts = pathname.split("/");
  const lastPathSegment = pathParts[pathParts.length - 1];

  const handleLogout = () => {
    toast.success("You have successfully Loggedout");
    Cookies.remove("token");

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <aside className="bg-white min-h-[100vh] w-full relative scrol overflow-y-scroll overflow-hidden">
      <div className="px-6 py-5">
        <section className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image src={logo} height={28} width={24} alt="logo" />
            <h6
              className="text-xl text-primary"
              style={{ fontFamily: "DMSans" }}
            >
              Bestaf
            </h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5001 14.9995V16.6662H2.50008V14.9995H17.5001ZM5.49691 3.25269L6.67542 4.43119L4.02377 7.08284L6.67542 9.7345L5.49691 10.913L1.66675 7.08284L5.49691 3.25269ZM17.5001 9.16617V10.8328H10.0001V9.16617H17.5001ZM17.5001 3.33284V4.99951H10.0001V3.33284H17.5001Z"
              fill="#4B5563"
            />
          </svg>
        </section>
        <section className="py-20">
          <Link href={`/user`} className="">
            <div
              className="flex gap-3 hover:bg-secondary group rounded-lg px-5 py-2 items-center cursor-pointer mb-[25px]"
              style={{
                background: lastPathSegment === "user" ? "#FFEAEF" : "",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M19 8.71001L13.667 4.56201C13.199 4.19792 12.623 4.00024 12.03 4.00024C11.4371 4.00024 10.861 4.19792 10.393 4.56201L5.05903 8.71001C4.73847 8.9593 4.47912 9.27854 4.30078 9.64336C4.12245 10.0082 4.02984 10.4089 4.03003 10.815V18.015C4.03003 18.5454 4.24074 19.0542 4.61582 19.4292C4.99089 19.8043 5.4996 20.015 6.03003 20.015H18.03C18.5605 20.015 19.0692 19.8043 19.4442 19.4292C19.8193 19.0542 20.03 18.5454 20.03 18.015V10.815C20.03 9.99201 19.65 9.21501 19 8.71001Z"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: lastPathSegment === "user" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M16 15C13.79 16.333 10.208 16.333 8 15"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: lastPathSegment === "user" ? "#941D3A" : "",
                  }}
                />
              </svg>

              <h5
                className="text-dark group-hover:text-primary text-sm"
                style={{
                  color: lastPathSegment === "user" ? "#941D3A" : "",
                }}
              >
                Dashboard
              </h5>
            </div>
          </Link>
          <Link href={`/user/terminal`} className="">
            <div
              className="flex gap-3 hover:bg-secondary group rounded-lg px-5 py-2 items-center cursor-pointer mb-[25px]"
              style={{
                background: title === "terminal" ? "#FFEAEF" : "",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5Z"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "terminal" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M3 10H21"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "terminal" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M7 15H7.01"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "terminal" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M11 15H13"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "terminal" ? "#941D3A" : "",
                  }}
                />
              </svg>

              <h5
                className="text-dark group-hover:text-primary text-sm"
                style={{
                  color: title === "terminal" ? "#941D3A" : "",
                }}
              >
                Terminal
              </h5>
            </div>
          </Link>
          <Link href={`/user/transaction`} className="">
            <div
              className="flex gap-3 hover:bg-secondary group rounded-lg px-5 py-2 items-center cursor-pointer mb-[25px]"
              style={{
                background: title === "transaction" ? "#FFEAEF" : "",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5Z"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "transaction" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M3 10H21"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "transaction" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M7 15H7.01"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "transaction" ? "#941D3A" : "",
                  }}
                />
                <path
                  d="M11 15H13"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "transaction" ? "#941D3A" : "",
                  }}
                />
              </svg>

              <h5
                className="text-dark group-hover:text-primary text-sm"
                style={{
                  color: title === "transaction" ? "#941D3A" : "",
                }}
              >
                Transaction
              </h5>
            </div>
          </Link>
          <Link href={`/user/merchant`} className="">
            <div
              className="flex gap-4 hover:bg-secondary group rounded-lg px-5 py-2 items-center cursor-pointer mb-[25px]"
              style={{
                background: title === "merchant" ? "#FFEAEF" : "",
              }}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="group"
              >
                <path
                  d="M7.50008 2.04825V3.81801C5.05689 4.80699 3.33341 7.20226 3.33341 10.0001C3.33341 13.682 6.31818 16.6667 10.0001 16.6667C12.7979 16.6667 15.1932 14.9432 16.1822 12.5001H17.9519C16.89 15.881 13.7314 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10.0001C1.66675 6.26871 4.11916 3.11014 7.50008 2.04825ZM10.0001 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001C18.3334 10.2813 18.3195 10.5593 18.2922 10.8334H9.16675V1.7079C9.44083 1.68068 9.71883 1.66675 10.0001 1.66675ZM10.8334 3.38499V9.16675H16.6152C16.2392 6.15115 13.849 3.76103 10.8334 3.38499Z"
                  fill="#4B5563"
                  className="group-hover:stroke-primary"
                  style={{
                    stroke: title === "merchant" ? "#941D3A" : "",
                  }}
                />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="group"
              >
                <path
                  d="M7 0C7.98891 0 8.95561 0.293245 9.77785 0.842652C10.6001 1.39206 11.241 2.17295 11.6194 3.08658C11.9978 4.00021 12.0969 5.00555 11.9039 5.97545C11.711 6.94536 11.2348 7.83627 10.5355 8.53553C9.83627 9.2348 8.94536 9.711 7.97545 9.90393C7.00555 10.0969 6.00021 9.99784 5.08658 9.6194C4.17295 9.24096 3.39206 8.6001 2.84265 7.77785C2.29324 6.95561 2 5.98891 2 5L2.005 4.783C2.06092 3.49575 2.61161 2.27978 3.54222 1.38866C4.47284 0.497541 5.71154 7.44425e-05 7 0ZM9 12C10.3261 12 11.5979 12.5268 12.5355 13.4645C13.4732 14.4021 14 15.6739 14 17V18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V17C0 15.6739 0.526784 14.4021 1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H9Z"
                  fill="#4B5563"
                  className="group-hover:stroke-primary"
                  style={{
                    fill: title === "merchant" ? "#941D3A" : "",
                  }}
                />
              </svg>

              <h5
                className="text-dark group-hover:text-primary text-sm"
                style={{
                  color: title === "merchant" ? "#941D3A" : "",
                }}
              >
                Merchant
              </h5>
            </div>
          </Link>
        </section>
        <section className="bottom-0 flex items-end">
          <div
            className="flex gap-3 hover:bg-secondary group rounded-lg px-5 py-2 items-center cursor-pointer mb-[25px]"
            onClick={handleLogout}
          >
            <LogoutIcon />

            <h5 className="text-[#EB5757] group-hover:text-primary text-sm">
              Log out
            </h5>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
