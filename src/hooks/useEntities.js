import {
  useQuery,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import apiClient from "../services/api-client";

const useEntities = ({
  keys,
  url,
  staleTime,
  appendAuth = false,
  redirectOn401 = false,
  infiniteQuery = false,
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getAuth = () => {
    const auth = queryClient.getQueryData("auth");
    if (!appendAuth || !auth) return {};
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + auth.access,
      },
    };
  };

  const fetchEntities = ({ pageParam = 1 }) =>
    apiClient
      .get(url, {
        ...getAuth(),
        params: infiniteQuery ? { page: pageParam } : {},
      })
      .then((res) => {
        console.log("response data**", res.data);
        return res.data;
      });

  const query = infiniteQuery
    ? useInfiniteQuery({
        queryKey: keys,
        queryFn: fetchEntities,
        staleTime: staleTime,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.next ? allPages.length + 1 : undefined;
        },
      })
    : useQuery({
        queryKey: keys,
        queryFn: fetchEntities,
        staleTime: staleTime,
      });

  useEffect(() => {
    if (redirectOn401 && query.error?.response?.status === 401) {
      // this shit it causing to force user to login twice
      navigate("/login");
      // so i fixed it by changing status code, it doesnt execute here again
      query.error.response.status = 0;
    }
  }, [query.error]);

  return query;
};

export default useEntities;
