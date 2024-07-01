import React, { Suspense } from 'react';
import { useCommonStore } from '@/store/commonStore';

import AppRouter from '@/router';
import Loading from '@/components/Loading';
import Header from '@/components/layouts/Header';
import LeftGnb from '@/components/layouts/LeftGnb';

import Box from '@mui/material/Box';

const CommonAlert = React.lazy(() => import('@/components/CommonAlert'));

export default function App() {
  const isNavOpen = useCommonStore((state) => state.isNavOpen);

  return (
    <div className="wrap">
      <Header />
      <div className="wrap-container">
        <LeftGnb />
        <div className={`inner-container ${isNavOpen ? '' : 'full'}`}>
          <Box sx={{ borderRadius: 1 }} className="contents">
            <Suspense fallback={<Loading />}>
              <AppRouter />
            </Suspense>
          </Box>
        </div>
      </div>

      <CommonAlert />
    </div>
  )
}

