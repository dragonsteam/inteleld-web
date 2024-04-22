import { Routes, Route } from 'react-router-dom';

import Login from '@/pages/Login';
import Register from '@/pages/Register';
import NotFoundPage from '@/pages/NotFound';

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
