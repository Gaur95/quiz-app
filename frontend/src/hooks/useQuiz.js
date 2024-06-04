import { useQuery } from "@tanstack/react-query";
import { getQuiz } from "../services/quiz";
import { useParams } from "react-router-dom";

export default function useQuiz() {
  const { pin } = useParams();

  const { data: questions, isLoading: loadingQuestions } = useQuery({
    queryKey: ["questions"],
    queryFn: () => getQuiz(pin),
  });

  return { questions, loadingQuestions };
}
