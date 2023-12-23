import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";

export const signUp = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/create`, {
      name,
      email,
      password,
    });
    console.log(response, "ressssss");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while creating account");
  }
};
