import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardItems = ({ name, price, image, less, oldPrice }) => {
    return (
        <Card sx={{ maxWidth: 345, }}>
            <Typography style={{color:'white', background:'rgb(240, 202, 34)', justifyContent:'center'}}>
                {less}
            </Typography>
            <img style={{ marginLeft: '100px' }} src={image} height="150px" width="150px" alt="" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <div className="d-flex m-2">
                    <Typography variant="body2" color="text.secondary" className="mx-2">
                        {price}
                    </Typography>
                    <Typography style={{ textDecoration: ' line-through' }} variant="body2" color="text.secondary">
                        {oldPrice}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className="justify-content-center">
                <Button style={{color: 'white', backgroundColor:'rgb(240, 202, 34)', fontWeight:'bold'}}>Add</Button>
        </CardActions>
        </Card>

    )
}
export default CardItems;