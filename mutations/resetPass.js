import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();


export const resetPass = async ({ tok, password, handleOpenModal }) => {


  try {
    const response = await axios.put(
      `${BASE_URL}/admin/resetpassword`,
      {
        token: tok,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response?.data?.message);
    if (response?.data?.status !== "error") {
      // router.push('/login');
      handleOpenModal();
      return { success: true, data: response?.data?.message };
    } else {
      throw new Error(response?.data?.message);
    }
  } catch (error) {
    toast.error(error?.response?.data?.error || error?.response?.data?.message);
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while resetting");
  }
};
