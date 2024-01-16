import { Box, List, ListItem, ListItemButton } from "@mui/material"
import { styled } from "@mui/system"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const StyledListItem = styled(ListItem)(() => ({
  justifyContent: "center"
}))

const RightSideBar = () => {
  return (
    <Box flex={1} p={2} padding={'50px 20px'} sx={{ display: {xs:"none", sm:"none", md:"block" } }}>
      <Box bgcolor={"gray"} justifyContent={'center'} borderRadius={'10px'} padding={'0 5px'}>
        <List >
          <ListItem divider style={{justifyContent:'space-between'}}>
            Popular Tags
            <EmojiEventsIcon/>
          </ListItem>
          <StyledListItem divider>
            <ListItemButton>
              tag1
            </ListItemButton>
          </StyledListItem>
          <StyledListItem divider>
            <ListItemButton>
              tag2
            </ListItemButton>
          </StyledListItem>
          <StyledListItem divider>
            <ListItemButton>
              tag3
            </ListItemButton>
          </StyledListItem>
          <StyledListItem divider>
            <ListItemButton>
              tag4
            </ListItemButton>
          </StyledListItem>
          <StyledListItem divider>
            <ListItemButton>
              tag5
            </ListItemButton>
          </StyledListItem>
          
        
          

        </List>
      
      </Box>
      
    </Box>
  )
}

export default RightSideBar