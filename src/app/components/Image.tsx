"use client"

import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

import FavoriteIcon from '@mui/icons-material/Favorite';

import type { Photo } from "@/models/Images";

type Props = {
  image: Photo
}

export default function Image({image}: Props) {
  const handleClick = () => {
    alert('Added to favourite!')
  };

  return (
    <Box 
      sx={{
        position: 'relative',
        "&:hover img": {
          opacity: 0.6
        },
        "&:hover .add-fav-button": {
          display: 'block'
        },
        "&:hover .link": {
          display: 'block'
        }
      }}
    >
      <Box 
        key={image.id} 
        component="img" 
        className='image'
        src={image.urls.small} 
        alt={image.description ? image.description : "animal"}
        sx={{
          height: '100%',
          width: '100%'
        }}
      >
      </Box>
      <IconButton 
        aria-label="add to favourite" 
        title="add to favourite"
        className='add-fav-button'
        sx={{
          display: 'none',
          top: '1%',
          right: '1%',
          position: 'absolute'
        }}
        onClick={handleClick}
      >
        <FavoriteIcon />
      </IconButton>
      <Typography
        className='link'
        variant='caption'
        sx={{
          display: 'none',
          bottom: '1%',
          right: '2%',
          left: '2%',
          position: 'absolute'
        }}
      >
        Photo by <Link href={image.user.links.html} color="inherit">{image.user.name}</Link> on <Link href={image.links.html} color="inherit">Unsplash</Link>
      </Typography>
      
    </Box>
    
  )
}