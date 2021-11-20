import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'
import '../../stylesheets/Catalog/Catalog.css'
import { getCatalouge } from '../../Api/profile/product_routes'
import { getMyProfile } from '../../Api/profile/profile_routes'

const Catalogue = () => {
    const [catalouge, setCatalouge]=useState([]);
    useEffect(async()=>{
        // get the company profile of logged in user and then pass the profileID to catalouge method
        let user=await getMyProfile();
        let catalouge=await getCatalouge(user['data']._id)
        setCatalouge(catalouge['data'])
    },[])
    return (
        <div className="catalog">
            <div className="catalog__header">
                Catalogue
            </div>
            <div className="catalog__content">
                {catalouge.map((product, index)=>{
                    return (
                    <Fragment key={index}>
                        <Card product={product}></Card>
                    </Fragment>)
                })}
            </div>
        </div>
    )
}

export default Catalogue
