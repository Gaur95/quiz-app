import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/user";

export default function useLoginUser() {
  const navigate = useNavigate();

  const { mutate: loginUser, isPending: isLogging } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/");
      toast.success("Login Successfull");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { loginUser, isLogging };
}
