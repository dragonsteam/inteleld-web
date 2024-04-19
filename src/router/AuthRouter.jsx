import { Routes, Route } from 'react-router-dom';

import Login from '@/pages/Login';
import NotFoundPage from '@/pages/NotFound';

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
