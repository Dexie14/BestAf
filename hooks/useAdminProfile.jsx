import { adminProfile } from "@/queries/getAdminProfile";
import { useQuery } from '@tanstack/react-query'

export const useAdminProfile = () =>

useQuery({
    queryKey: ['profile'], queryFn: (props) => adminProfile(props) 
  });
