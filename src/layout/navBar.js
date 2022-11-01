import { useState } from 'react'
import {
  AppBar, Button, IconButton, Stack, Toolbar, Typography,
  Menu, MenuItem, ListItemIcon, Hidden
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// icons
import ApiIcon from '@mui/icons-material/Api'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import TranslateIcon from '@mui/icons-material/Translate'

const NavBar = () => {
  /* -------------------------------- variables ------------------------------- */
  const { t, i18n } = useTranslation(['main', 'navBar'])
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const [lang, setLang] = useState(localStorage.getItem('i18nextLng'))
  const open = Boolean(anchorEl)

  /* ----------------------------- handle methods ----------------------------- */
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)
  const handleHomeButton = () => navigate('/')
  const handleAboutButton = () => navigate('about')
  const handleProductButton = () => navigate('products')
  const handleTranslateButton = () => (lang === 'tr' ? 'TR' : 'EN')
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

  const handleTranslate = () => {
    if (lang === 'tr') {
      i18n.changeLanguage('en')
      setLang('en')
    } else {
      i18n.changeLanguage('tr')
      setLang('tr')
    }
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
              onClick={handleHomeButton}><Typography>{t('navBar:home.label')}</Typography></Button>
            <Button color="inherit"
              onClick={handleAboutButton}><Typography>{t('navBar:about.label')}</Typography></Button>
            <Button color="inherit"
              onClick={handleProductButton}><Typography>{t('navBar:products.label')}</Typography></Button>
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
            <MenuItem onClick={handleTranslate}>
              <ListItemIcon>
                <TranslateIcon />
              </ListItemIcon>
              <Typography>{handleTranslateButton()}</Typography>
            </MenuItem>
            <MenuItem onClick={handleSettingsButton}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography>{t('navBar:settings.label')}</Typography>
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
