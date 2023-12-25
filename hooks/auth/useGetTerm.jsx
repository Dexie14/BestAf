import { getTerminal } from "@/queries/getAllTerm";
import { useQuery } from "@tanstack/react-query";




export const useGetTerminal = (termid) => {
  return useQuery({
      queryKey: ["terminals"],
      queryFn: () => getTerminal(termid),
    staleTime: 1000 * 5 * 5,
  });
};



// ?terminalId=${"20dbzmfj"}&pageSize=${10}&page=${1}&enable=${false}