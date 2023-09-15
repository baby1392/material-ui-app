import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const Post = () => {
    return (
        <Card sx={{margin: 5}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="../images/buttons/breakfast.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" >
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox sx={{color: pink[800], '&.Mui-checked': {color: pink[600]}}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </IconButton>
                </CardActions>
        </Card>
    );

}

export default Post;