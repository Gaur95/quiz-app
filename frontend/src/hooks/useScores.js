import { useQuery } from "@tanstack/react-query";
import { getScore } from "../services/score";

export default function useScores() {
  const { data: scores, isLoading: loadingScores } = useQuery({
    queryKey: ["scores"],
    queryFn: getScore,
  });

  return { scores, loadingScores };
}
