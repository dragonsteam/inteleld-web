// ELD OS - ELD online state
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/redux/auth/selector';
import AuthRouter from '@/router/AuthRouter';
import PageLoader from '@/components/PageLoader';

const ErpApp = lazy(() => import('./ErpApp'));

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import { RouterProvider } from "react-router-dom";

// import theme from "../theme.js";
// import router from "../routing/routes.jsx";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       // gcTime: 300_000, //5m
//       staleTime: 300_000, //5m
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       // refetchOnMount: false,
//       // retryDelay: 3000, // 3s
//     },
//   },
// });

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
