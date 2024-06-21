import { useMutation } from "@tanstack/react-query";
import { submitScore as submitScoreApi } from "../services/score";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function useSubmitScore() {
  const navigate = useNavigate();
  const { mutate: submitScore, isLoading } = useMutation({
    mutationFn: submitScoreApi,
    onSuccess: () => {
      toast.success("Quiz submitted successfully");

      setTimeout(() => {
        navigate("/");
      }, 5000);
    },
  });

  return { submitScore, isLoading };
}
