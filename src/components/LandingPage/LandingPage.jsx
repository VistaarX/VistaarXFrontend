import React from 'react'
import Navbar from './Navbar'
import '../../stylesheets/LandingPage/LandingPage.css'
import { useState } from 'react'
import MobileView from './MobileView'
import DesktopNavbar from './DesktopNavbar'
const LandingPage = () => {
    console.log(window.innerWidth)
    const [products, setProducts]=useState([
            {
            image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-gold-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1598653759000",
            price:"40,000",
            name:"Apple iPad Air",
            company:"XYZ Co.",
            discount:"80",
        }
    ])

    const [people, setPeople]=useState([
        {
            image:"https://vit.ac.in/sites/default/files/images/news/chan11.jpg",
            name:"Person1",
            company:"ABC Co."
        }
    ])

    const [companies, setCompanies]=useState([
        {
            name:'Slack',
            image:'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png'
            
        }
    ])
    
    if(window.innerWidth<=1024){
    return (
        <div className="LandingPage">
            <Navbar/>
            <MobileView products={products} companies={companies} people={people}/> 
        </div>
    )}
    else{
        return(
            <div className="LandingPage">
                <DesktopNavbar/>
                <div className="Content" style={{display:'flex',flexDirection:'row'}}>
                    <div style={{
                        border:'1px solid black',
                        height:'90vh',
                        width:'20%',
                        margin:'10px',
                        borderRadius:'15px'
                    }}></div>
                    {/*=======================================================================*/}
                    <div style={{
                        border:'1px solid black',
                        height:'90vh',
                        width:'60%',
                        margin:'10px',
                        borderRadius:'15px',
                        padding:'0 5% 0 5%'
                    }}>
                       <MobileView products={products} companies={companies} people={people}/>  
                    </div>
                    {/*=======================================================================*/}
                    <div style={{
                        border:'1px solid black',
                        height:'90vh',
                        width:'20%',
                        margin:'10px',
                        borderRadius:'15px'
                    }}>

                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
