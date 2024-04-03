import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

export const getHeaders = () => {
  const localAuth = window.localStorage.getItem("auth");
  const accessToken = localAuth ? JSON.parse(localAuth).accessToken : "";
  return {
    "Content-Type": "application/json",
    Authorization:
      "JWT " +  accessToken,
  }
}

const useData = (endpoint, redirectOn401 = false, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  //
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    // clean before fetching
    setLoading(true);
    setError("")
    apiClient
      .get<FetchResponse>(endpoint, { signal: controller.signal, ...requestConfig, headers: getHeaders() })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        
        if (err.response?.status === 401 && redirectOn401) navigate('/login');
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;