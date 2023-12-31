import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
// import { toast } from "react-toastify";
// import toast from 'react-hot-toast';

export const signUp = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/create`, {
      name,
      email,
      password,
    });
    console.log(response, "ressssss");
    // toast.success(response?.data?.message);
  } catch (error) {
    console.log(error, "signuperror");
    // toast.error(error?.response?.data?.error || error?.response?.data?.message );
    if (error instanceof AxiosError) {
      throw new Error(error?.data?.message || error?.response?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while creating account");
  }
};
