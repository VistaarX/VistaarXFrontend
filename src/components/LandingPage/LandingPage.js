import React from 'react'
import ProductCard from './ProductCard'
import SuggestionCard from '../Network/suggestions/SuggestionCard'
import CompanyCard from './CompanyCard'
import '../../stylesheets/LandingPage/LandingPage.css'

const LandingPage = () => {
    

    const suggestions = [{
        name: 'Mrinal',
        connections: '400',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Raj',
        connections: '500',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }, {
        name: 'Deepanshu',
        connections: '600',
        companyName: 'VistaarX',
        img: "https://picsum.photos/200"
    }]


    return (
        <div className="landingPage">
            <div className="landingPage__product">
                <div className="heading">
                    <div className="headingText">Products</div>
                    <div className="more">Sell all</div>
                </div>
                <div className="content">
                    <div className="container">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
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
                           return <SuggestionCard suggestion={suggestion} />
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
