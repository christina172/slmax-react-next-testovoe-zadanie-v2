import fetchImages from "@/libs/fetchImages";
import type { SearchResultWithImages } from "@/models/Images";
import Box from "@mui/material/Box";
import Masonry from '@mui/lab/Masonry';

import FilterSort from "./FilterSort";

type Props = {
  query?: string | undefined,
  order_by?: string | undefined 
}

export default async function Gallery({query, order_by}: Props) {
  if (!query) {
    query="animals";
  };
  if (!order_by) {
    order_by="relevant"
  }

  const url = `https://api.unsplash.com/search/photos?query=${query}&order_by=${order_by}&collections=1424240&per_page=12&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

  const images: SearchResultWithImages | undefined = await fetchImages(url);

  if (!images) {
    return (<h2>No images found</h2>)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: '90%'}}>
      <FilterSort />
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg:4 }} spacing={2.5}>
        {images.results.map((image)=>(
          <Box 
            key={image.id} 
            component="img" 
            src={image.urls.small} 
            alt={image.description ? image.description : "animal"}
          >
          </Box>
        ))}
      </Masonry>
    </Box>
    
  )
}
