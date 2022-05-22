import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardItems = ({name,price,image,less, oldPrice}) => {

    return (
        <Card sx={{ maxWidth: 345,  }}>
        <img style={{marginLeft:'100px'}} src={image} height="150px" width="150px" alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <div className="d-flex m-2">
          <Typography variant="body2" color="text.secondary" className="mx-2">
            {price}
          </Typography>
          <Typography style={{textDecoration:' line-through'}} variant="body2" color="text.secondary">
            {oldPrice}
          </Typography>
          </div>
        </CardContent>
        <CardActions className="align-item-center">
          <Button variant="contained" size="small">Add</Button>
        </CardActions>
      </Card>
       
    )
}
export default CardItems;