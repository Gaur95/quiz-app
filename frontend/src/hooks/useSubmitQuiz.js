import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { submitQuiz as submitQuizApi } from "../services/quiz";

export default function useSubmitQuiz() {
  const { mutate: submitQuiz, isLoading } = useMutation({
    mutationFn: submitQuizApi,
    onSuccess: () => {
      toast.success("Quiz Submitted Successfully");
    },
  });

  return { submitQuiz, isLoading };
}
