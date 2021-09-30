import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {CardActions } from '@mui/material'
import { Avatar, Button } from '@material-ui/core';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const PersonCard = ({image,name,company}) => {
    return (
        <div>
            <Card sx={{ minWidth:'130px',maxWidth: '130px', maxHeight:'182px'}} elevation='0' disableRipple={true}
            style={{
                display:'flex',
                flexDirection:'column',
                background:"transparent", 
                color:"black",
                margin:'10px',
                borderRadius:'20px',
                }}>
                <CardActions
                style={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <Avatar alt={name} src={image}
                    style={{
                        border:"2px solid #203341",
                        height:100,
                        width:100
                    }}/>
                    <Typography style={{fontWeight:500,fontSize:'13px'}}>
                        {name}
                    </Typography>
                    <Typography style={{fontWeight:400,fontSize:'11px'}}>
                        {company}
                    </Typography>
                    <Button
                    style={{
                        background:'#203341',
                        color:'white',
                        borderRadius:'30px',
                        textTransform:'none',
                        fontWeight:200
                    }}>
                        <ControlPointIcon fontSize='small'/>
                        Connect
                    </Button>

                </CardActions>
            </Card>
        </div>
    )
}

export default PersonCard
