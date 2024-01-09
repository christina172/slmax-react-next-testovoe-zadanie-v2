"use client"

import { useState, useEffect } from "react";

import { DefaultSession } from "next-auth";

import Box from "@mui/material/Box";
import Masonry from '@mui/lab/Masonry';
import Typography from "@mui/material/Typography";

import type { Photo } from "@/models/Images";

import FavouriteImage from "./FavouriteImage";

type Props = {
  session: DefaultSession | null
}

export default function FavouriteGallery({session}: Props) {
  const [images, setImages] = useState<Photo[]>([]);

  useEffect(()=>{
    const username = session?.user?.name;
    const favourite = localStorage.getItem(`ig-favourite-${username}`);
    if (favourite) {
      const jsonFavourite = JSON.parse(favourite);
      setImages(jsonFavourite);
    }
  }, []);

  const deleteImage = (image: Photo) => {
    const username = session?.user?.name;
    const favourite = localStorage.getItem(`ig-favourite-${username}`);
    if (favourite) {
      const jsonFavourite = JSON.parse(favourite);
      const deletedJsonFavourite = jsonFavourite.filter(((photo: Photo) => photo.id !== image.id));
      localStorage.setItem(`ig-favourite-${username}`, JSON.stringify(deletedJsonFavourite));
      setImages(deletedJsonFavourite);
    }
  }

  if (!images.length) {
    return (
      <Typography variant='h6' component='h2' align='center'>
        You haven&#39;t added any images to favourite yet
      </Typography>
    )
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: '90%'}}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg:4 }} spacing={2.5}>
        {images.map((image)=>(
          <FavouriteImage key={image.id} image={image} deleteImage={deleteImage}/>
        ))}
      </Masonry>
    </Box>
  )
}
