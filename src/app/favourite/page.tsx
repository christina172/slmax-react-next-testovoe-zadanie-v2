import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import Typography from '@mui/material/Typography';

export default async function FavouritePage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/favourite')
  }

  return (
    <Typography>Hello, {session?.user?.name}! Here are your favourite images!</Typography>
  )
}