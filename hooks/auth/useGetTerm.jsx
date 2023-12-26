import { getTerminal } from "@/queries/getAllTerm";
import { useQuery } from "@tanstack/react-query";


export const useGetTerminal = () => {
  return useQuery({
      queryKey: ["terminals"],
      queryFn: () => getTerminal(),
    staleTime: 1000 * 5 * 5,
  });
};

