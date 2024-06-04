import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logout } from "../services/user";

export default function useLogoutUser() {
  const navigate = useNavigate();

  const { mutate: logoutUser, isLoading: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login");
      toast.success("Logged out successfull");
    },
  });

  return { logoutUser, isLoggingOut };
}
