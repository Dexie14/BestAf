
import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";



export const signinWithEmail = async ({
  email,
  password,
}) => {
  try {
    const response  = await axios.post(
      `${BASE_URL}/admin/login`,
      {
        email,
        password,
      }
    );
    console.log(response, "log");
    if (response?.data?.status !== "error") {
      localStorage.setItem("token", response?.data?.message?.accessToken);
      return { success: true, data: response?.data };
    } else {
      throw new Error(response?.data?.message);
    } 
  
  } catch (error) {
    console.log(error, "logerror");
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.error || error?.response?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while logging in");
  }
};
