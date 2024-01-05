import React, {ReactNode} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type Props = {children: ReactNode;}

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography 
          variant="h4" 
          component="h2"
          sx={{flexGrow:1}}
        >
          Image Gallery
        </Typography>
      </Toolbar>
    </AppBar> 
  )
};

export default Navbar;