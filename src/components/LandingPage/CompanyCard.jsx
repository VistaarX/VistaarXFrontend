import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

const CompanyCard = ({name,image}) => {
    return (
        <div>
            <Card sx={{ maxWidth: '130px', maxHeight:'182px'}} 
            style={{
                background:"white", 
                color:"black",
                borderRadius:"8px",
                border: '1px solid #203341',
                margin:'10px',
                }}>
                <CardActionArea style={{
                    borderBottom:"1px solid black"
                }}>
                    <CardMedia
                    component="img"
                    height="101px"
                    image={image}
                    alt={name}
                    />
                </CardActionArea>
                <CardActions style={{display:'flex',justifyContent:'center'}}>
                    <div className='Content'>
                        {name}
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

export default CompanyCard
