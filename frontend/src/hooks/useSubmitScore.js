import { useMutation } from "@tanstack/react-query";
import { submitScore as submitScoreApi } from "../services/score";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useSubmitScore() {
  const { mutate: submitScore, isLoading } = useMutation({
    mutationFn: submitScoreApi,
    onSuccess: () => {
      toast.success("Quiz submitted successfully");
    },
  });

  return { submitScore, isLoading };
}
