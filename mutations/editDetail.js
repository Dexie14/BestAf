import { BASE_URL } from "@/utils/baseUrl";
import axios, { AxiosError } from "axios";
import { useToken } from "@/hooks/auth/useToken";

import { toast } from "react-toastify";
const { token } = useToken();

export const editingDetails = async ({
  name,
  address,
  supportNumber,
  receiptNum,
  print,
  acc,
  enabling,
  handleCloseModal,
  value,
  refetch
}) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/admin/terminal/update/${value}`,
      {
        merchantName: name,
        supportNumber: supportNumber,
        address: address,
        accountSelection: acc,
        isEnabled: enabling,
        // numberOfReciepts: receiptNum,
        // printReciept: print,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(response?.data?.message);
    console.log(response, "editt");
    handleCloseModal();
  } catch (error) {
    toast.error(error?.response?.data?.error || error?.response?.data?.message);
    console.log(error, "createediterror");
    handleCloseModal();
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data?.message);
    } else if (error instanceof Error) {
      throw error;
    } else throw new Error("Error occurred while editing merch");
  }
  refetch()
};
