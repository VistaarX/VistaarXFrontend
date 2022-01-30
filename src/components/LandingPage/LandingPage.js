import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import SuggestionCard from '../Network/suggestions/SuggestionCard'
import CompanyCard from './CompanyCard'
import '../../stylesheets/LandingPage/LandingPage.css'
import { getUserProducts } from '../../Api/profile/product_routes'
import { getRecommendedUsers } from '../../Api/user/fetchRequests';
import { Redirect } from 'react-router-dom'

const LandingPage = () => {
    const [redirect, setRedirect]=useState(false);
    const [suggestions, setSuggestions] = useState(null);
    const [products, setProducts] = useState(null);
    useEffect(async ()=>{
        if(localStorage.getItem('JWT')===null){
            setRedirect(true)
            return <Redirect to="/login"></Redirect>
        }
        if(redirect===false){
            let connections=await getRecommendedUsers();
            setSuggestions(connections.data.recommended_users);
            let products=await getUserProducts();
            setProducts(products.data);
        }
    },[])
    
    // dummy function to fullfill prop need
    const onclick=()=>{
        console.log("click made for connection request")
    }
    // repetitive function from Network.jsx
    const handlePop=(id)=>{
        let new_suggestion=suggestions.filter((i)=>i._id!=id);
        setSuggestions(new_suggestion);
    }
    
    // TODO: more specific things are required to make redirect.
    if(redirect===true){
        return <Redirect to="/login"></Redirect>
    }
    else if(products===null || suggestions===null){
        return <></>
    }
    return (
        <div className="landingPage">
            <div className="landingPage__product">
                <div className="heading">
                    <div className="headingText">Products</div>
                    <div className="more">Sell all</div>
                </div>
                <div className="content">
                    <div className="container">
                    {products.map((product) => {
                           return <ProductCard {...product} />
                       })}
                    </div>
                </div>
            </div>
            <div className="landingPage__people">
                <div className="heading">
                <div className="headingText">People</div>
                    <div className="more">Sell all</div>
                </div>
                <div className="content">
                    <div className="container">
                       {suggestions.map((suggestion) => {
                           return (
                           <SuggestionCard 
                            onclick={onclick} 
                            oncancel={()=>handlePop(suggestion._id)} 
                            suggestion={suggestion} 
                           />
                           )
                       })}
                    </div>
                </div>
            </div>
            <div className="landingPage__company">
                <div className="heading">
                <div className="headingText">Companies</div>
                    <div className="more">Sell all</div>
                </div>
                       <div className="content">
                           <div className="container">
                               <CompanyCard/>
                               <CompanyCard/>
                               <CompanyCard/>
                               <CompanyCard/>
                               <CompanyCard/>
                           </div>
                       </div>
            </div>
        </div>
    )
}

export default LandingPage
