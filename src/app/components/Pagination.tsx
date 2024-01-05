"use client"

import React, {useEffect, useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

type Props = {
  pages: number,
  query?: string | undefined,
  order_by?: string | undefined 
}

export default function PaginationComponent({pages, query, order_by}: Props) {
  const [page, setPage] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(()=>{
    const page = searchParams.get('page');
    if (page) {
      setPage(parseInt(page));
    } else {
      setPage(1);
    };
  }, [searchParams]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`/results?query=${query}&order_by=${order_by}&page=${value}`);
  };

  return (
    <Stack sx={{alignItems:'center'}}>
      <Pagination 
        page={page}
        count={pages} 
        sx={{mt: 2.5}} 
        onChange={handleChange}
      />
    </Stack>
  )
}