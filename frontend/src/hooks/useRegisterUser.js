import { useMutation } from "@tanstack/react-query";
import { register } from "../services/user";
import toast from "react-hot-toast";

export default function useRegisterUser() {
  const { mutate: registerUser, isLoading: isRegistering } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { registerUser, isRegistering };
}
