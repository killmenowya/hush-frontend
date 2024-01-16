import { Box, Stack } from "@mui/material"
import Topbar from "../comp/Topbar"
import LeftSideBar from "../comp/LeftSideBar"
import RightSideBar from "../comp/RightSideBar"
import Feed from "../comp/Feed"


const UserPage = () => {
  return (
    <Box>
        <Topbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <LeftSideBar />
            <Feed/>
            
            <RightSideBar />
        </Stack>
    </Box>
  )
}

export default UserPage