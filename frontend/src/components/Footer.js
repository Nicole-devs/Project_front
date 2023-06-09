import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

function Footer() {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleMenu(e){
    setAnchorEl(e.currentTarget)
  }

  function handleClose(){
    setAnchorEl(null)
  }

  return (
    <Box sx={{ width: "100%", bottom: 0, position: "fixed" }}>
      <BottomNavigation
        sx={{ backgroundColor: "transparent"  }}
      >
        <BottomNavigationAction 
        rel="noopener noreferrer"
        href="https://github.com/my-workout-space-app" 
        target="_blank"
        label="GitHub Repo" 
        icon={<GitHubIcon />} />
        <BottomNavigationAction 
        label="LinkedIn" icon={<LinkedInIcon />} 
        onClick={handleMenu} />
        <Menu
            anchorEl={anchorEl} 
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
            >
            <Link rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/user1/" 
            target="_blank"
            sx={{ textDecoration: "none" }} >
              <MenuItem>
                User1's LinkedIn
              </MenuItem>
            </Link>
            <Link rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/user2/" 
            target="_blank"
            sx={{ textDecoration: "none" }}>
            <MenuItem>
              User2's LinkedIn
            </MenuItem>
            </Link>
          </Menu>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
