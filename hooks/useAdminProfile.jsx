import { adminProfile } from "@/queries/getAdminProfile";
import { useQuery } from "@tanstack/react-query";

export const useAdminProfile = () => {
  return useQuery({
    queryFn: () => adminProfile(),
    queryKey: ["profile"],
    staleTime: 1000 * 5 * 5,
  });
};
