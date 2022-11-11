import { useState } from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, Menu, MenuItem, ListItemIcon, Hidden } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Icons
import ApiIcon from '@mui/icons-material/Api'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

const NavBar = () => {
  const { t } = useTranslation(['main'])
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClickMenu = (event) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)

  const handleHomeButton = () => navigate('/')
  const handleAboutButton = () => navigate('about')
  const handleProductButton = () => navigate('products')
  const handleSettingsButton = () => {
    handleCloseMenu()
    setTimeout(() => {
      navigate('settings')
    }, 50)
  }
  const handleLogout = () => {
    handleCloseMenu()
    localStorage.removeItem('auth')
    navigate('login')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleHomeButton}>
          <ApiIcon />
        </IconButton>
        <Typography variant="h6"
          component="div"
          align="left"
          sx={{ flexGrow: 1 }}>
            Api App
        </Typography>
        <Stack
          spacing={1}
          direction="row">
          <Hidden only="xs">
            <Button color="inherit"
              onClick={handleHomeButton}><Typography>Home</Typography></Button>
            <Button color="inherit"
              onClick={handleAboutButton}><Typography>About</Typography></Button>
            <Button color="inherit"
              onClick={handleProductButton}><Typography>Products</Typography></Button>
          </Hidden>
          <IconButton size="large"
            color="inherit"
            onClick={handleClickMenu}>
            <AccountCircle />
          </IconButton>
          <Menu id="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleSettingsButton}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography>Settings</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <Typography>{t('main:logout.button')}</Typography>
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
