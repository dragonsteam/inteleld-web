// ELD OS - ELD online state
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/redux/auth/selector';
import AuthRouter from '@/router/AuthRouter';
import PageLoader from '@/components/PageLoader';

const ErpApp = lazy(() => import('./ErpApp'));

const DefaultApp = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ErpApp />
    </Suspense>
    // <ChakraProvider theme={theme}>
    //   <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    //   <QueryClientProvider client={queryClient}>
    //     <RouterProvider router={router} />
    //     <ReactQueryDevtools />
    //   </QueryClientProvider>
    // </ChakraProvider>
  );
};

export default function EldOs() {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn) return <AuthRouter />;
  return <DefaultApp />;
}
