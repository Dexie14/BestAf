

import { useGetTerminal } from "@/hooks/auth/useGetTerm";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();

const TermTable = () => {


const param = {
  // terminalId : "2054vpo6",
  serialNumber: "12345678dexie"
}

const termid = "2054vpo6"

  // const { data: term, isLoading, isError } = useGetTerminal(termid);


  // console.log(term, "ferrsyursdyu");

 const postQuery = useQuery({
    queryKey: ['term'],
    queryFn: () => getTerminal()
  })

  
  console.log(postQuery.data, "parraa");

  const getTerminal = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/terminals?terminalId=${termid}`, {
        params: param,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data?.status === "success") {
        console.log(response, "getTerm");
        return response?.data?.data;
      } else {
        throw new Error(response.data?.data?.message);
      }
    } catch (error) {
      console.log(error, "getTermerror");
      if (error instanceof AxiosError) {
        throw new Error(error?.response?.data?.error?.message);
      } else if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occurred");
    }
  };


  return (
    <div>
      <table className=" w-full table-auto tabling">
        <thead className="text-left mb-3 border-b-4">
          <tr className="bg-secondary px-3">
            <th className="py-4 pl-2">
              <input type="checkbox" />
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              Terminal ID
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              Merchant Name
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              Created Date
            </th>
            <th className=" text-sm font-semibold text-[#333333]">
              Transaction
            </th>
            <th className=" text-sm font-semibold text-[#333333]">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white  ">
          {/* {data &&
                    data?.data?.map((item: any, index: number) => ( */}
          <tr
            className="bg-white border-b-4"
            style={{ boxShadow: "0px 2px 2px 0px rgba(34, 34, 34, 0.10);" }}
          >
            <td className="pl-2">
              <input type="checkbox" />
            </td>
            <td className="text-sm font-normal text-[#333333] py-4">
              20A1B2C3
            </td>
            <td className="text-sm font-normal text-[#333333]">
              Segun Adebayo
            </td>
            <td className="text-sm font-normal text-[#333333]">
              Mar 23, 2023, 13:00 PM
            </td>
            <td className="flex gap-1 text-sm font-normal text-[#333333]  bg-[#EDFFEA] w-fit px-1 mt-3 justify-center items-center rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.53312 14.6667C4.85122 14.6667 1.86646 11.6819 1.86646 8.00004C1.86646 4.31814 4.85122 1.33337 8.53312 1.33337C12.215 1.33337 15.1998 4.31814 15.1998 8.00004C15.1998 11.6819 12.215 14.6667 8.53312 14.6667ZM7.86819 10.6667L12.5823 5.95266L11.6395 5.00985L7.86819 8.78111L5.98259 6.89544L5.03978 7.83831L7.86819 10.6667Z"
                  fill="#165E3D"
                />
              </svg>
              Succeeded
            </td>
            <td className="text-sm font-normal text-[#333333] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#4F4F4F"
                />
              </svg>
            </td>
          </tr>
          <tr
            lassName="bg-white  border-b-4"
            style={{ boxShadow: "0px 2px 2px 0px rgba(34, 34, 34, 0.10);" }}
          >
            <td className="pl-2">
              <input type="checkbox" />
            </td>
            <td className="text-sm font-normal text-[#333333] py-4">
              20A1B2C3
            </td>
            <td className="text-sm font-normal text-[#333333]">
              Segun Adebayo
            </td>
            <td className="text-sm font-normal text-[#333333]">
              Mar 23, 2023, 13:00 PM
            </td>
            <td className="flex gap-1 text-sm font-normal text-[#333333] bg-[#EDFFEA] w-fit px-1 mt-3 justify-center items-center rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.53312 14.6667C4.85122 14.6667 1.86646 11.6819 1.86646 8.00004C1.86646 4.31814 4.85122 1.33337 8.53312 1.33337C12.215 1.33337 15.1998 4.31814 15.1998 8.00004C15.1998 11.6819 12.215 14.6667 8.53312 14.6667ZM7.86819 10.6667L12.5823 5.95266L11.6395 5.00985L7.86819 8.78111L5.98259 6.89544L5.03978 7.83831L7.86819 10.6667Z"
                  fill="#165E3D"
                />
              </svg>
              Succeeded
            </td>
            <td className="text-sm font-normal text-[#333333] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#4F4F4F"
                />
              </svg>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
      <div className="flex justify-between items-center cursor-pointer">
        <p className="text-xs text-[#4B5563] font-bold">
          10/50 <span className="font-normal">results</span>
        </p>
        <section className="flex gap-2 items-center">
          <p className="flex text-sm font-normal text-[#4B5563] border border-[#F0F2F4]  bg-[#fff] w-fit py-2 px-2 justify-center items-center rounded-lg">
            Previous
          </p>
          <p className="flex text-sm font-normal text-[#4B5563] border border-[#E0E0E0]  bg-[#fff] w-fit py-2 px-4 justify-center items-center rounded-2xl">
            1
          </p>
          <p className="flex text-sm font-normal text-[#4B5563] border border-[#E0E0E0]  bg-[#fff] w-fit py-2 px-4 justify-center items-center rounded-2xl">
            2
          </p>
          <p className="flex text-sm font-normal text-[#4B5563] border border-[#E0E0E0]  bg-[#fff] w-fit py-2 px-4 justify-center items-center rounded-2xl">
            3
          </p>
          <p className="flex text-sm font-normal text-[#4B5563] border border-[#E0E0E0]  bg-[#fff] w-fit py-2 px-4 justify-center items-center rounded-2xl">
            4
          </p>
          <p className="flex text-sm font-normal text-[#4B5563] border border-[#F0F2F4]  bg-[#fff] w-fit py-2 px-2 justify-center items-center rounded-lg">
            Next
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermTable;
