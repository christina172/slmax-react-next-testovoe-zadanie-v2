"use client"

import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

import DeleteIcon from '@mui/icons-material/Delete';

import type { Photo } from "@/models/Images";

type Props = {
  image: Photo,
  deleteImage: (image: Photo) => void
}

export default function Image({image, deleteImage}: Props) {

  return (
    <Box 
      sx={{
        position: 'relative',
        "&:hover img": {
          opacity: 0.6
        },
        "&:hover .delete-fav-button": {
          display: 'block'
        },
        "&:hover .link": {
          display: 'block'
        }
      }}
    >
      <Box 
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
        aria-label="delete from favourite" 
        title="delete from favourite"
        className='delete-fav-button'
        sx={{
          display: 'none',
          top: '1%',
          right: '1%',
          position: 'absolute'
        }}
        onClick={()=>deleteImage(image)}
      >
        <DeleteIcon />
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
        Photo by <Link href={image.user.links.html} color="inherit">{image.user.name}</Link> from <Link href={image.links.html} color="inherit">Unsplash</Link>
      </Typography>
    </Box>
  )
}