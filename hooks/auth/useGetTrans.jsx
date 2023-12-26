import { getTrans } from "@/queries/getAllTrans"; 
import { useQuery } from "@tanstack/react-query";


export const useGetTrans = () => {
  return useQuery({
      queryKey: ["transaction"],
      queryFn: () => getTrans(),
    staleTime: 1000 * 5 * 5,
  });
};

