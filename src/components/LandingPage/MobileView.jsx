import React from 'react'
import SectionHeader from './SectionHeader'
import '../../stylesheets/LandingPage/LandingPage.css'
import ProductCard from './ProductCard'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import PersonCard from './PersonCard'
import CompanyCard from './CompanyCard'
const MobileView = ({people,products,companies}) => {
    return (
        <div>
            <SectionHeader title="Products" link="http://www.google.com"/>
                <ScrollMenu>
                    {products.slice(0,8).map(product=>
                        <ProductCard 
                            image={product.image} 
                            company={product.company} 
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                            key={products.length}
                        />)}
                </ScrollMenu>
            <SectionHeader title="People" link="#"/>
                <ScrollMenu>
                    {people.slice(0,8).map(person=>
                        <PersonCard 
                            image={person.image}
                            company={person.company}
                            name={person.name}
                            key={people.length}
                        />)}
                </ScrollMenu>
            <SectionHeader title="Companies" link="#"/>
                <ScrollMenu>
                    {companies.slice(0,8).map(company=>
                        <CompanyCard 
                        name={company.name} 
                        image={company.image}
                        key={companies.length}
                        />)}
                </ScrollMenu>
        </div>
    )
}

export default MobileView
