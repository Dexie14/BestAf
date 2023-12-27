import { adminProfile } from "@/queries/getAdminProfile";
import { useQuery } from "@tanstack/react-query";

export const useAdminProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => adminProfile(),
    staleTime: 1000 * 5 * 5,
  });
};
