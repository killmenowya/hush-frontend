import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"

const Form = () => {
  return (
    <Box flex={4} p={2} padding={'100px 5px'} justifyContent={'center'}>
        <Typography variant="h4" align="center">
            Create Your New Thread 
        </Typography>
        <Typography gutterBottom align="center">
            You can say anything   
        </Typography>
        <Typography gutterBottom align="center">
            #FreeSpeach  
        </Typography>
        <Card>
            <CardContent>
                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <TextField placeholder="Title (what's on your mind)" fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField placeholder="Category" fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField placeholder="Tell people what you have to say" multiline rows={6} fullWidth/>
                    </Grid>

                    <Grid> 
                        <Button variant="contained">
                             Add Thread
                        </Button>
                        
                        
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Box>
    
  )
}

export default Form