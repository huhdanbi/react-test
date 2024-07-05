import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useLoadingStore } from '@/store/commonStore';

export default function Loading() {
  const { isLoading } = useLoadingStore();

  return (
    <>
      {
        isLoading &&
        <Box className="wrap-loader">
          <CircularProgress />
        </Box>
      }
    </>
  )
}