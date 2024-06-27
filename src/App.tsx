import { Suspense } from 'react';

import AppRouter from '@/router';
import Loading from '@/components/Loading';
import Header from '@/components/layouts/Header';
import LeftGnb from '@/components/layouts/LeftGnb';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Container className="wrap" disableGutters>
      <Header />
      <div className="wrap-container">
        <LeftGnb />
        <Box className="inner-container">
          <Box sx={{ borderRadius: 1 }} className="contents">
            <Suspense fallback={<Loading />}>
              <AppRouter />
            </Suspense>
          </Box>
        </Box>
      </div>
    </Container>
  )
}

