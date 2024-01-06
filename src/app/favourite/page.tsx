import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import Typography from '@mui/material/Typography';

import FavouriteGallery from "../components/FavouriteGallery";


export default async function FavouritePage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/favourite')
  }

  return (
    <>
      <Typography variant='h5' component='h1' sx={{mb: 3}}>My favourite images</Typography>
      <FavouriteGallery session={session} />
    </> 
  )
}