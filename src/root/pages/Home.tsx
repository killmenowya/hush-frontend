import { Box, Stack } from "@mui/material"
import LeftSideBar from "../comp/LeftSideBar"
import Feed from "../comp/Feed"
import RightSideBar from "../comp/RightSideBar"

import Topbar from "../comp/Topbar"


const Home = () => {
  return (
    <Box>
        <Topbar />
        
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <LeftSideBar/>
          <Feed/>
          <RightSideBar/>   
        </Stack>
    </Box>
  )
}

export default Home