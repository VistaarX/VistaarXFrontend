import React from 'react'
import "../../../stylesheets/User/Manufacturer.css"
import ProgressBar from './ProgressBar'
import ProductCard from '../../LandingPage/ProductCard'

const Manufacturer = () => {
    return (
        <div className='company'>
            <div className='company__headBox'>
                <div className='company__avatar'>
                    {/* Add Avatar img here */}
                    <img src="https://picsum.photos/200" alt="" />
                </div>
            </div>

            <div className='company__detail'>
                <h1>Ray Ban Manufactrer</h1>
                <h6>Delhi</h6>
                <h4>Estd. 1965</h4>
                <div className='company__designation'>Manufacturer</div>
            </div>
            <br/>
            <ProgressBar title = "GST" />
            <ProgressBar title = "Annual Turnover"/>
            <ProgressBar title = "Main Markets"/>
            <ProgressBar title = "Product Category"/>
            <br/>

            <div className="company__management">
                <h4 className='title'>Company Management</h4>
                <div className="managerInfo">
                    <div className="avatar">
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className="otherInfo">
                        <h4 className="name">Shivam Raj</h4>
                        <h5 className="address">Lives in <span>Delhi, India</span></h5>
                        <h5 className="position">President</h5>
                    </div>
                </div>
                <div className="about">
                    <h4 className="title">About the Firm</h4>

                    <h5 className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum. 
                    </h5>
                </div>
            </div>
            <div className="company__products">
                <div className="header">
                    <h4 className="left">Our Products</h4>
                    {/* <h5 className='right'>See all</h5> */}
                </div>
                <div className="container">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
            <div className="company__footer">
                <div className="header">
                    <h4>Your Dashboard</h4>
                </div>
                <div className="info">
                    <h1 className="count">233</h1>
                    <h5>People have viewed your profile</h5>
                    <button>View Orders</button>
                </div>
            </div>
        </div>
    )
}

export default Manufacturer
