import { CanceledError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getLocalAuthData } from "../util";
import apiClient from "../services/api-client";

const useRequest = ({ url, redirectOn401 = false, appendAuth = false }) => {
  const navigate = useNavigate();
  const [resData, setResData] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [resErrors, setResErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const resetData = () => {
    setLoading(true);
    setErrorMsg("");
    setResErrors({});
  };

  const handleResponse = (res, callback) => {
    // clean before fetching
    setResData(res.data);
    setLoading(false);
    callback(res);
  };

  const handleError = (err, callback) => {
    if (err instanceof CanceledError) return;
    setErrorMsg(err.message);
    setLoading(false);
    callback(err);

    if (err.response?.data) setResErrors(err.response?.data);

    if (redirectOn401 && err.response?.status === 401) navigate("/login");
    if (err.response?.status === 400 && err.response.data) {
      setResErrors(err.response.data);
      console.log("reserr", err.response.data);
    }
  };

  const post = ({
    data,
    callback = () => {},
    errCallback = () => {},
    uploadHandler = () => {},
  }) => {
    resetData();
    apiClient
      .post(url, data, {
        ...getLocalAuthData(appendAuth),
        onUploadProgress: uploadHandler,
      })
      .then((res) => handleResponse(res, callback))
      .catch((err) => handleError(err, errCallback));
  };

  const put = ({
    recordUrl,
    data,
    callback = () => {},
    errCallback = () => {},
  }) => {
    resetData();
    apiClient
      .put(recordUrl, data, { ...getLocalAuthData(appendAuth) })
      .then((res) => handleResponse(res, callback))
      .catch((err) => handleError(err, errCallback));
  };

  const deleteRecord = ({
    recordUrl,
    callback = () => {},
    errCallback = () => {},
  }) => {
    resetData();
    apiClient
      .delete(recordUrl, { ...getLocalAuthData(appendAuth) })
      .then((res) => handleResponse(res, callback))
      .catch((err) => handleError(err, errCallback));
  };

  return {
    post,
    put,
    deleteRecord,
    resData,
    errorMsg,
    resErrors,
    isLoading,
  };
};

export default useRequest;
