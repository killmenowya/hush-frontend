import { Box, Stack } from "@mui/material"
import Topbar from "../comp/Topbar"
import LeftSideBar from "../comp/LeftSideBar"
import RightSideBar from "../comp/RightSideBar"
import Form from "../comp/Form"

const CreateThread = () => {
  return (
    <Box>
        <Topbar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <LeftSideBar/>
          <Form/>
          <RightSideBar/>   
        </Stack>
    </Box>
  )
}

export default CreateThread