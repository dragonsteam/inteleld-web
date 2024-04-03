import { Navigate } from "react-router-dom";

const Posts = () => {
  const authdata = localStorage.getItem("auth");
  if (!authdata) return <Navigate to="/login" />;

  const user_id = JSON.parse(authdata).user_id;

  return <Navigate to={"/vendor/" + user_id} />;
};

export default Posts;
