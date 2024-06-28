import { Suspense } from 'react';
import { useStore } from '@/store/store';

import AppRouter from '@/router';
import Loading from '@/components/Loading';
import Header from '@/components/layouts/Header';
import LeftGnb from '@/components/layouts/LeftGnb';

import Box from '@mui/material/Box';

export default function App() {
  const isNavOpend = useStore((state) => state.isNavOpend);

  return (
    <div className="wrap">
      <Header />
      <div className="wrap-container">
        <LeftGnb />
        <div className={`inner-container ${isNavOpend ? '' : 'full'}`}>
          <Box sx={{ borderRadius: 1 }} className="contents">
            <Suspense fallback={<Loading />}>
              <AppRouter />
            </Suspense>
          </Box>
        </div>
      </div>
    </div>
  )
}

