import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, IconButtonProps,Menu,MenuItem,Typography, styled } from "@mui/material";
import React, { FC, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from "@mui/material/colors";
import { Thread } from "../../ReactQuery/objects";
import { deleteThread } from "../../ReactQuery/Queries/home-query";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  interface ThreadProps extends React.HTMLAttributes<HTMLParagraphElement> {
    thread: Thread,
    innerRef?: React.Ref<HTMLParagraphElement>
  }

  const Post: FC<ThreadProps> = ({thread, innerRef, ...props}) => {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const { mutate: deletePost } = deleteThread();
    const handleDelete= () => {
      deletePost({id: thread.ID})

    }
  
  
    return (
      <Box key={thread.ID} ref={innerRef}>
      <Card >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Box>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu 
             anchorEl={anchorEl}
             open={open}
             onClose={()=>setAnchorEl(null)}>
            <MenuItem>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            </Box>
          }
          title={thread.Title}
          subheader={thread.CreatedAt}
        />
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {thread.Body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comment</Typography>
            <Typography paragraph>
             {thread.Body}
            </Typography>
            <Typography paragraph>
             {thread.ID}
            </Typography>

            
          </CardContent>
        </Collapse>
      </Card>
      </Box>
    );
  }

export default Post
  
  // export default function Post( ) {
  //   const [expanded, setExpanded] = React.useState(false);
  
  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };
  
  //   return (
  //     <Card>
  //       <CardHeader
  //         avatar={
  //           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  //             R
  //           </Avatar>
  //         }
  //         action={
  //           <IconButton aria-label="settings">
  //             <MoreVertIcon />
  //           </IconButton>
  //         }
  //         title="Shrimp and Chorizo Paella"
  //         subheader="September 14, 2016"
  //       />
        
  //       <CardContent>
  //         <Typography variant="body2" color="text.secondary">
  //          test
  //         </Typography>
  //       </CardContent>
  //       <CardActions disableSpacing>
  //         <IconButton aria-label="add to favorites">
  //           <FavoriteIcon />
  //         </IconButton>
  //         <IconButton aria-label="share">
  //           <ShareIcon />
  //         </IconButton>
  //         <ExpandMore
  //           expand={expanded}
  //           onClick={handleExpandClick}
  //           aria-expanded={expanded}
  //           aria-label="show more"
  //         >
  //           <ExpandMoreIcon />
  //         </ExpandMore>
  //       </CardActions>
  //       <Collapse in={expanded} timeout="auto" unmountOnExit>
  //         <CardContent>
  //           <Typography paragraph>Method:</Typography>
  //           <Typography paragraph>
  //             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
  //             aside for 10 minutes.
  //           </Typography>
  //           <Typography paragraph>
  //             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
  //             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
  //             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
  //             large plate and set aside, leaving chicken and chorizo in the pan. Add
  //             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
  //             stirring often until thickened and fragrant, about 10 minutes. Add
  //             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
  //           </Typography>
  //           <Typography paragraph>
  //             Add rice and stir very gently to distribute. Top with artichokes and
  //             peppers, and cook without stirring, until most of the liquid is absorbed,
  //             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
  //             mussels, tucking them down into the rice, and cook again without
  //             stirring, until mussels have opened and rice is just tender, 5 to 7
  //             minutes more. (Discard any mussels that don&apos;t open.)
  //           </Typography>
  //           <Typography>
  //             Set aside off of the heat to let rest for 10 minutes, and then serve.
  //           </Typography>
  //         </CardContent>
  //       </Collapse>
  //     </Card>
  //   );
  // }

