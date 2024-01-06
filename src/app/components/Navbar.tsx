import React, {ReactNode} from 'react';

import Link from 'next/link';
import { getServerSession } from "next-auth/next";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { options } from '../api/auth/[...nextauth]/options';

import MenuComponent from './Menu';

type Props = {children: ReactNode;}

async function Navbar () {
  const session = await getServerSession(options);

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography 
          variant="h4" 
          component="h2"
          sx={{flexGrow:1}}
        >
          <Link href='/' style={{textDecoration: 'none', color: 'white'}}>
            Image Gallery
          </Link>
        </Typography>
        {session && (<Typography variant='body1'>{session.user?.name}</Typography>)}
        {session 
          ? <MenuComponent /> 
          : (
            <Typography variant='h6'>
              <Link href='/favourite' style={{textDecoration: 'none', color: 'white'}}>Log in</Link>
            </Typography>
          )
        }
      </Toolbar>
    </AppBar> 
  )
};

export default Navbar;