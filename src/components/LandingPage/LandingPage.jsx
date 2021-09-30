import React from 'react'
import Navbar from './Navbar'
import SectionHeader from './SectionHeader'
import '../../stylesheets/LandingPage/LandingPage.css'
import { useState,useEffect } from 'react'
import ProductCard from './ProductCard'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import PersonCard from './PersonCard'
import CompanyCard from './CompanyCard'
const LandingPage = () => {
    const [products,setProducts]=useState([
            {
            image:"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
            price:"100",
            name:"Product1",
            company:"XYZ Co.",
            discount:"10"
        }
    ])
    const [people,setPeople]=useState([
        {
            image:"https://vit.ac.in/sites/default/files/images/news/chan11.jpg",
            name:"Person1",
            company:"ABC Co."
        }
    ])
    const [companies,setCompanies]=useState([
        {
            name:'Slack',
            image:'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png',
            
        }
    ])
    return (
        <div className="LandingPage">
            <Navbar/>
            <SectionHeader title="Products" link="http://www.google.com"/>
                <ScrollMenu>
                    {products.slice(0,8).map(product=>
                        <ProductCard 
                            image={product.image} 
                            company={product.company} 
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                        />)}
                </ScrollMenu>
            <SectionHeader title="People" link="#"/>
                <ScrollMenu>
                    {people.slice(0,8).map(person=>
                        <PersonCard 
                            image={person.image}
                            company={person.company}
                            name={person.name}
                        />)}
                </ScrollMenu>
            <SectionHeader title="Companies" link="#"/>
                <ScrollMenu>
                    {companies.slice(0,8).map(company=>
                        <CompanyCard 
                        name={company.name} 
                        image={company.image}
                        />)}
                </ScrollMenu>
        </div>
    )
}

export default LandingPage
