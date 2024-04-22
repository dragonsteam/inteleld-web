import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PageLoader from '@/components/PageLoader';
import { logout as logoutAction } from '@/redux/auth/actions';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutAction());
    navigate('/login');
  }, []);

  return <PageLoader />;
}
