import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !user) {
        navigate("/login");
      }
    },
    [user, isLoading, navigate]
  );

  if (isLoading) return null;

  if (user) return children;
}
