import react from 'react';
import CardItems from './CardItems';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

const Items = () =>{
    const style = {
        display: 'flex',
        margin: '80px',
        justifyContent: 'space-between'
    }
    const fruitItems  = [
        {
            name: 'Apple',
            price: '$1.60',
            image: "https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078?k=20&m=683494078&s=170667a&w=0&h=HHnGEokgWVCLhAnBG4PNQ_Q0xVO9FZMa6iCJdAKPPbc=",
            less: '20%',
            oldPrice: '$2.00'
        },
        {
            name: 'Orange',
            price: '$2.00',
            image: "https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=",
        },
        {
            name: 'Banana',
            price: '$1.00',
            image: "https://media.istockphoto.com/photos/banana-picture-id636739634?b=1&k=20&m=636739634&s=170667a&w=0&h=_HASEjG8LXbR4zu_eDH4dtS9WC80C9liLVFnKizTqtM=",
        },
        {
            name: 'Lemon',
            price: '$1.60',
            image: "https://media.istockphoto.com/photos/lemon-picture-id92280727?b=1&k=20&m=92280727&s=170667a&w=0&h=vc00OHrrcoLoVwue9cO4fTxyNg22KQn9DhoYp3ro0W4=",
            less: '40%',
            oldPrice: '$3.00'
        },
        {
            name: 'JackFruit',
            price: '$3.60',
            image: "https://us.123rf.com/450wm/spamas/spamas2003/spamas200300757/141698746-jackfruits-on-white-background-full-depth-of-field.jpg?ver=6",
            less: '17%',
            oldPrice: '$4.00'
        },
        {
            name: 'Watermelon',
            price: '$3.60',
            image: "https://thumbs.dreamstime.com/b/big-watermelon-slice-white-background-as-package-design-element-44517200.jpg",
            less: '40%',
            oldPrice: '$5.00'
        },
    ]

  

    return(
        <Box sx={{ flexGrow: 1, marginTop: '30px' , marginLeft:'60px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {fruitItems.map((item,index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
             <CardItems {...item}/>
            </Grid>
          ))}
        </Grid>
        <CardActions className="justify-content-center">
                <Button style={{color: 'black', backgroundColor:'rgb(240, 202, 34)', fontWeight:'bold'}}>Load More</Button>
        </CardActions>
      </Box>
    )
}
export default Items;