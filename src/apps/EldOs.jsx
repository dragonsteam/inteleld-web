// ELD OS - ELD online state
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '@/redux/auth/selector';
import AuthRouter from '@/router/AuthRouter';
import PageLoader from '@/components/PageLoader';

const ErpApp = lazy(() => import('./ErpApp'));

export default function EldOs() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) return <AuthRouter />;
  return (
    <Suspense fallback={<PageLoader />}>
      <ErpApp />
    </Suspense>
  );
}
