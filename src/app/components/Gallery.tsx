import fetchImages from "@/libs/fetchImages";
import type { SearchResultWithImages } from "@/models/Images";
import Box from "@mui/material/Box";
import Masonry from '@mui/lab/Masonry';

export default async function Gallery() {
  const url = `https://api.unsplash.com/search/photos?query=animals&collections=1424240&per_page=12&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

  const images: SearchResultWithImages | undefined = await fetchImages(url);

  if (!images) {
    return (<h2>No images found</h2>)
  }

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg:4 }} spacing={2} sx={{maxWidth: '100vw'}}>
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
  )
}
