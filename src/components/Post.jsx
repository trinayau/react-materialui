import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia,Checkbox,IconButton, Typography } from "@mui/material";

const Post = ({username, imgUrl}) => {
    return ( 
        <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={username}
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image={imgUrl}
          alt="Doggo"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Doggo ipsum fat boi smol super chub porgo tungg heckin good boys and girls, heckin good boys h*ck mlem heckin angery woofer. Doggo mlem puggorino wow very biscit shoob ruff big ol pupper doge, heckin good boys lotsa pats boofers borking doggo long bois. Shibe doggorino borkdrive long woofer borkf, heckin heckin good boys and girls. Borking doggo many pats adorable doggo doggo heckin good boys and girls, very good spot pupper. Borkf you are doin me a concern ur givin me a spook fluffer wow very biscit blep bork blop, thicc sub woofer blop pupper blep. Doggorino smol heck blop much ruin diet waggy wags most angery pupper I have ever seen long woofer heck, mlem thicc corgo shoober most angery pupper I have ever seen yapper. Wow very biscit long woofer noodle horse super chub h*ck blop wrinkler, doge borking doggo fat boi smol mlem.

          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          
        </CardActions>
  
      </Card>
     );
}
 
export default Post;
