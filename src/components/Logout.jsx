import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Logout = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries();
    window.localStorage.setItem("auth", "");
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;
