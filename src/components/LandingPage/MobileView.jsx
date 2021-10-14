import React from 'react'
import SectionHeader from './SectionHeader'
import '../../stylesheets/LandingPage/LandingPage.css'
import ProductCard from './ProductCard'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import PersonCard from './PersonCard'
import CompanyCard from './CompanyCard'
import {Zoom, Fade} from 'react-reveal';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const MobileView = ({people,products,companies}) => {
    let key = 0
    return (
        <div>
            <SectionHeader title="Products" link="http://www.google.com"/>
                    {/* <TransitionGroup> */}
                <ScrollMenu >
                    {products.slice(0,8).map(product=>
                       <Fade right key={product.key}> <ProductCard 
                            image={product.image} 
                            company={product.company} 
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                            key={products.length}
                        />
                        </Fade>)}
                </ScrollMenu>
                    {/* </TransitionGroup> */}
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
