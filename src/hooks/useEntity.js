import apiClient from "../services/api-client";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getHeaders } from "./useData";


const useEntity = ({ id, keys, url, staleTime }) => {
    const fetchEntity = () =>
        apiClient.get(url + "/" + id, {headers: getHeaders()}).then((res) => { console.log("data**entity", res.data); return res.data});

    return useQuery({
        // queryKey: [url, id],
        queryKey: keys,
        queryFn: fetchEntity,
        staleTime: staleTime,
    });
}

export default useEntity;