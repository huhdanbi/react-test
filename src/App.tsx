import { Suspense } from 'react';

import AppRouter from '@/router';
import Loading from '@/components/Loading';
import Header from '@/components/layouts/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <AppRouter />
      </Suspense>
    </div>
  )
}

