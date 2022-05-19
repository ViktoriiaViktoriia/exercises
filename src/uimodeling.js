import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AccountCircle from '@mui/icons-material/AccountCircle';
import pink_panther from './pink_panther.jpg';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { List, ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/material/ListItemButton';
import SearchIcon from '@mui/icons-material/Search';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 280;

export default function UImodeling() {
    const homeview = ['Home'];
    const logout = ['Logout'];
    const settings = ['Settings View'];
    const profile = ['Profile View'];
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(true);
    
    const open = Boolean(anchorElUser);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <div >
          <AppBar 
            position="static" 
            style={{ background: '#2E3B65' }}
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
              <Toolbar disableGutters>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex'} }}> 
                  <Tooltip title="Profile menu">
                    <IconButton 
                      id="icon-button"
                      aria-controls={open ? 'menu-appbar' : undefined } 
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleOpenUserMenu} 
                    >
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                      >
                        <Avatar alt="Profile" src={pink_panther}/>
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    aria-labelledby='icon-button'
                    anchorEl={anchorElUser}
                    open={open}
                    onClose={handleCloseUserMenu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  > 
                    <MenuItem key={profile}>
                      <ListItemIcon>
                        <AccountCircle color="disabled"/>
                      </ListItemIcon>
                      <RouterLink className="profile" to="/uimodeling/profile">
                        <ListItemText>{profile}</ListItemText>
                      </RouterLink>
                    </MenuItem>
                    <Divider component="li" /> 
                    <MenuItem key={settings}>
                      <ListItemIcon>
                        <SettingsIcon color="disabled"/>
                      </ListItemIcon>
                      <RouterLink className="settings" to="/uimodeling/settings">
                        <ListItemText>{settings}</ListItemText>
                      </RouterLink>
                    </MenuItem>
                    <Divider component="li" /> 
                    <MenuItem key={logout} onClick={handleCloseUserMenu}>
                      <ListItemIcon>
                        <LogoutIcon color="disabled"/>
                      </ListItemIcon>
                      <ListItemText>{logout}</ListItemText>
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Box
              sx={{width: 279, height: 57, backgroundColor: '#f4f5f7'}}
            />
            <Box
              sx={{width: 270, height: 64, backgroundColor: '#2E3B65', marginLeft:'5px'}}
            >
              <Typography variant="h4" color="common.white" sx={{marginTop:'12px'}} >
                  TAMK
              </Typography>
            </Box>
            <Avatar alt="Profile" src={pink_panther} sx={{ width: 150, height: 150, marginLeft:'50px', marginTop:'25px' }}/>
            <Typography variant="h6"  sx={{marginTop:'2px'}} >
              Pink Panther
            </Typography>
            <Typography sx={{marginLeft:'80px', marginTop:'5px', marginBottom:'40px'}} >
              Student
            </Typography>
            <Divider/>
            <List>
              <ListItem key={homeview}>
                <ListItemIcon>
                  <HomeIcon color="#2E3B65"/>
                </ListItemIcon>
                <RouterLink className="homeview" to="/uimodeling/homeview">
                  <ListItemText primaryTypographyProps={{
                    fontSize: 18,
                    color: '#2E3B65',
                    fontWeight: 'medium'
                  }}>{homeview}</ListItemText>
                </RouterLink>
              </ListItem>
            </List>
            <Divider />
            <Box
              sx={{
                pb: open ? 4 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpenMenu(!openMenu)}
                sx={{
                  px: 2,
                  pt: 4,
                  pb: openMenu ? 0 : 3,
                  '&:hover, &:focus': { '& svg': { opacity: openMenu ? 1 : 0 } },
                }}
              >
                <ListItemIcon>
                  <MenuOpenIcon color="#2E3B65"/>
                </ListItemIcon>
                <ListItemText
                  primary="Menu"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '10px',
                    marginTop:'6px',
                    color: '#2E3B65',
                  }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: openMenu ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {openMenu &&
                <>
                  <MenuItem key={profile}>
                    <ListItemIcon sx={{marginLeft:'55px'}}>
                      <AccountCircle color="#2E3B65" />
                    </ListItemIcon>
                    <RouterLink className="profile" to="/uimodeling/profile">
                      <ListItemText >{profile}</ListItemText>
                    </RouterLink>
                  </MenuItem>
                  <MenuItem key={settings}>
                    <ListItemIcon sx={{marginLeft:'55px'}}>
                      <SettingsIcon color="#2E3B65"/>
                    </ListItemIcon>
                    <RouterLink className="settings" to="/uimodeling/settings">
                      <ListItemText>{settings}</ListItemText>
                    </RouterLink>
                  </MenuItem>
                </>
                }
            </Box>
          </Drawer>
          <div>
            <Outlet/>
          </div>
      </div>
    ); 
}