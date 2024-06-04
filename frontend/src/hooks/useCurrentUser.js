import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/user";

export default function useCurrentUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isLoading,
  };
}
