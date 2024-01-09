import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();



export const getRoute = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/routing/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === "success") {
      console.log(response, "getroute");
      return response?.data?.data;
    } else {
      throw new Error(response.data?.data?.message);
    }
  } catch (error) {
    console.log(error, "getrouteerror");
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.error?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred");
  }
};
