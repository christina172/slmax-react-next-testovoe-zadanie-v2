"use client"

import { DefaultSession } from "next-auth";

import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';

import FavoriteIcon from '@mui/icons-material/Favorite';

import type { Photo } from "@/models/Images";
import { useState } from "react";

type Props = {
  image: Photo,
  session: DefaultSession | null
}

export default function Image({image, session}: Props) {
  const [addedOpen, setAddedOpen] = useState(false);
  const [alreadyAddedOpen, setAlreadyAddedOpen] = useState(false);

  const handleAddedClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setAddedOpen(false);
  };

  const handleAlreadyAddedClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlreadyAddedOpen(false);
  };

  const handleClick = (image: Photo) => {
    const username = session?.user?.name;
    const favourite = localStorage.getItem(`ig-favourite-${username}`);
    if (favourite) {
      const jsonFavourite = JSON.parse(favourite);
      if (!jsonFavourite.some((photo: Photo) => photo.id === image.id)) {
        const addedJsonFavourite = [
          ...jsonFavourite,
          image
        ];
        localStorage.setItem(`ig-favourite-${username}`, JSON.stringify(addedJsonFavourite));
        setAddedOpen(true);
      } else {
        setAlreadyAddedOpen(true);
      }
    } else {
      const favourite = [
        image
      ]
      localStorage.setItem(`ig-favourite-${username}`, JSON.stringify(favourite));
      setAddedOpen(true);
    }
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
      {session
      && (
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
          onClick={()=>handleClick(image)}
        >
          <FavoriteIcon />
        </IconButton>
      )}
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
      <Snackbar
        open={addedOpen}
        autoHideDuration={1500}
        onClose={handleAddedClose}
        message="Image added to favourite"
      />
      <Snackbar
        open={alreadyAddedOpen}
        autoHideDuration={1500}
        onClose={handleAlreadyAddedClose}
        message="Image is already in favourite"
      />
    </Box>
  )
}