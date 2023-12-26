import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();

// {{URL}}api/v1/transaction?from=2023-11-18T23:43:13.341Z&to=2023-12-18T23:43:13.341Z

export const getTrans = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === "success") {
      console.log(response, "getTrans");
      return response?.data?.data;
    } else {
      throw new Error(response.data?.data?.message);
    }
  } catch (error) {
    console.log(error, "getTranserror");
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.error?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred");
  }
};
