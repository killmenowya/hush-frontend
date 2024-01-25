import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { Thread } from "../../ReactQuery/objects"
import { createthread } from "../../ReactQuery/Queries/home-query"

const Form = () => {
    const form = useForm<Thread>({
        defaultValues:{
            IdUser:          1,
            Title:           "",
            Body:            "",
            Tag:             "",
            Likes:           0,
            Dislikes:        0,
            ResponseCount:   0,
            IsHidden:        false
        }
    });
    const {register, control, handleSubmit} = form;
    const {mutateAsync: create, isPending: isLoadingCreate} = createthread()
    const onSubmit = (data:Thread) => {
        console.log('Form submitted', data)
        create(data)
        
    }

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
        <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
            <CardContent>
                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <TextField placeholder="Title (what's on your mind)" fullWidth id="Title" {...register("Title")}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField placeholder="Category" fullWidth id="Tag" {...register("Tag")}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField placeholder="Tell people what you have to say" multiline rows={6} fullWidth id="Body" {...register("Body")}/>
                    </Grid>

                    <Grid> 
                        <Button variant="contained" type="submit" disabled={isLoadingCreate}>
                             Add Thread
                        </Button>
                        
                        
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </form>
        <DevTool control={control}/>
    </Box>
    
  )
}

export default Form