import { getDash } from "@/queries/getDashboard"; 
import { useQuery } from "@tanstack/react-query";


export const useGetDash = () => {
  return useQuery({
      queryKey: ["dash"],
      queryFn: () => getDash(),
    staleTime: 1000 * 5 * 5,
  });
};

