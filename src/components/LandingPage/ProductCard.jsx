import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import '../../stylesheets/LandingPage/ProductCard.css'

const ProductCard = ({image,company,name,price,discount}) => {
    return (
        <div>
            <Card sx={{ maxWidth: '130px', maxHeight:'182px'}} 
            style={{
                background:"#203341", 
                color:"white",
                borderRadius:"8px",
                border: '1px solid #203341',
                margin:'10px'
                }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="101px"
                    image={image}
                    alt={name}
                    />
                </CardActionArea>
                <CardActions>
                    <div className='Content'>
                        <div className="prices">
                            <span>
                            <Typography style={{fontSize:'12px', paddingRight:'30px'}}>
                                Rs.{price}
                            </Typography>
                            </span>
                            <Typography style={{fontSize:'12px'}}>
                                {discount}% off
                            </Typography>
                        </div>
                        <Typography  fontSize="12px" fontWeight="800" component="div">
                                {name}
                        </Typography>
                        <Typography fontSize="12px">
                            {company}
                        </Typography>
                    </div>
                    {/* <CardContent>
                        <Typography  variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h6">
                            {company}
                        </Typography>
                    </CardContent> */}
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard
