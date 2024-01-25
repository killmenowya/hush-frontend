import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import TagIcon from '@mui/icons-material/Tag';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { threads} from "../../ReactQuery/Queries/home-query";





const LeftSideBar = () => {
  const bar = threads()
  function foo () {
    console.log("hello")
    console.log(bar.data)
  }
  
  return (
    <Box flex={2} p={2} sx={{ display: { xs:"none", sm:"none", md:"block" } }}>
      <List style={{position:'fixed'}}>
          <ListItem >
            <Link to = '/createThread'>
              <ListItemButton>
              <ListItemIcon>
                <TagIcon />
              </ListItemIcon>
              <ListItemText primary="Create Thread" />
            </ListItemButton>

            </Link>
            
          </ListItem>

          <ListItem >
            <ListItemButton onClick={foo}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Likes" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}

export default LeftSideBar