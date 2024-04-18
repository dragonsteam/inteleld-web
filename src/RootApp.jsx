import './style/app.css';

import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageLoader from '@/components/PageLoader';

const EldOs = lazy(() => import('./apps/EldOs.jsx'));

export default function RootApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <EldOs />
      </Suspense>
    </BrowserRouter>
  );
}
