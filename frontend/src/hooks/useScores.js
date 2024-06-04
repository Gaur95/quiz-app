import { useMutation, useQuery } from "@tanstack/react-query";
import { getScore as getScoreApi } from "../services/score";

export default function useScores() {
  const { mutate: getScores, isLoading: loadingScores } = useMutation({
    mutationFn: getScoreApi,
  });

  return { getScores, loadingScores };
}
