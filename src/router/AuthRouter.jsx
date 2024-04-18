import { Routes, Route } from "react-router-dom";

import Login from "@/pages/Login";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
