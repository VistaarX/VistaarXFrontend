import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import '../../stylesheets/LandingPage/ProductCard.css'

const ProductCard = ({image,company,name,price,discount}) => {
    return (
        <div>
            <Card sx={{ minWidth:'100px', maxWidth: '130px', maxHeight:'182px'}} 
            style={{
                background:"#203341", 
                color:"white",
                borderRadius:"8px",
                border: '1px solid #203341',
                margin:'10px'
                }}>
                <CardActionArea style={{position:'relative'}}>
                    <CardMedia
                    component="img"
                    height="101px"
                    image={image}
                    alt={name}
                    />
                    {/*render discount if disount more than 0 else leave it empty 
                        this acts as an overlay on the image
                    */}
                    {discount>0?
                            <Typography style={{
                                fontSize:'12px', 
                                background:'green', 
                                borderRadius:'6px',
                                padding:'5px',
                                position:'absolute',
                                top:'2px',
                                right:'2px'}}>
                                {discount+"%off"}
                            </Typography>
                            :
                            <Typography>
                             
                            </Typography>
                            }

                </CardActionArea>
                <CardActions>
                    <div className='Content'>
                        <div className="prices">
                            <span>
                            <Typography style={{fontSize:'13px', justifySelf:'flex', fontWeight:800}}>
                            <span>&#8377;</span>{price}
                            </Typography>
                            </span>
                        </div>
                        <Typography  fontSize="12px" fontWeight="800" component="div">
                                {name.slice(0,20)}
                        </Typography>
                        <Typography fontSize="12px">
                            {company.slice(0,20)}
                        </Typography>
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard
