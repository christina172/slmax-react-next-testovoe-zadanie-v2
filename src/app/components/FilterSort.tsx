"use client"

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function FilterSort() {
  const [filter, setFilter] = useState('animals');
  const [sort, setSort] = useState('relevant');

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(()=>{
  const query = searchParams.get('query');
  if (query ) {
    setFilter(query);
  } else {
    setFilter('animals');
  };
  const order_by = searchParams.get('order_by');
  if (order_by) {
    setSort(order_by);
  } else {
    setSort('relevant')
  }
  }, [searchParams])

  const handleClick = (query: string) => {
    setFilter(query);
    router.push(`/results?query=${query}&order_by=${sort}`);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    router.push(`/results?query=${filter}&order_by=${event.target.value}`);
  };

  return (
    <>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
        <Chip label="Cats" onClick={()=>handleClick('cats')} />
        <Chip label="Dogs" variant="outlined" onClick={()=>handleClick('dogs')} />
        <Chip label="Birds" onClick={()=>handleClick('birds')} />
        <Chip label="Fish" variant="outlined" onClick={()=>handleClick('fish')} />
        <Chip label="Tropical" onClick={()=>handleClick('tropical')} />
        <Chip label="Wild" variant="outlined" onClick={()=>handleClick('wild')} />
      </Box>
      <FormControl sx={{ m: 1, minWidth: 120, alignSelf: "flex-end"}} size="small">
        <InputLabel id="demo-select-small-label">Sort by</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sort}
          label="Order by"
          onChange={handleChange}
        >
          <MenuItem value='relevant'>Relevant</MenuItem>
          <MenuItem value='latest'>Latest</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}