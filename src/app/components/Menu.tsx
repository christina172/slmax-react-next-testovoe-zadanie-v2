"use client"

import React, { useState } from 'react';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import AccountCircle from '@mui/icons-material/AccountCircle';


export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>
          <Link href='/favourite' style={{textDecoration: 'none', color: 'black'}}>
            Favourite
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem sx={{color: 'common.black'}} onClick={() => {signOut({ callbackUrl: 'http://localhost:3000' })}}>
          Log out
        </MenuItem>
      </Menu>
    </div>
  )
}