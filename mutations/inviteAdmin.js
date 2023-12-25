import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();



export const sendAdminInvite = async ({ email, handleCloseModal }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admin/invite`,
      {
        email: email
      },
      {
        headers: {
          Authorization: `Bearer ${token }`,
        },
      }
    );
    toast.success(response?.data?.message);
    console.log(response, "inviteResponse");
    handleCloseModal()
  } catch (error) {
    toast.error(error?.response?.data?.error || error?.response?.data?.message);
    console.log(error, "inviteError");
    handleCloseModal()
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while sending an admin invite");
  }
};
