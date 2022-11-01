import {
  Avatar, Button, Container, Divider, IconButton,
  List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack, TextField
} from '@mui/material'
// import { useTranslation } from 'react-i18next'
import ImageIcon from '@mui/icons-material/Image'
import AddIcon from '@mui/icons-material/Add'

const Home = () => {
  // const { t } = useTranslation(['main'])
  return (
    <Container maxWidth="sm">
      <Stack direction="row"
        justifyContent="center"
        spacing={2}>
        <TextField label="Search"
          size="small" />
        <Button variant="outlined"
          size="small">Search</Button>
      </Stack>
      <List>
        <ListItem secondaryAction={
          <IconButton edge="end"
            size="large"
            aria-label="add">
            <AddIcon />
          </IconButton>
        }>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Istanbul, Turkey"
            secondary="22 deg, Sunny" />
        </ListItem>
        <Divider variant="inset"
          component="li" />
      </List>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Skeleton variant="circular"
                width={40}
                height={40} />
            </Avatar>
          </ListItemAvatar>
          <Skeleton variant="rounded"
            width="100%"
            height={50} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Skeleton variant="circular"
                width={40}
                height={40} />
            </Avatar>
          </ListItemAvatar>
          <Skeleton variant="rounded"
            width="100%"
            animation="wave"
            height={50} />
        </ListItem>
      </List>
    </Container>
  )
}

export default Home
