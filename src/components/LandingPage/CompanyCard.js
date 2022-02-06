import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/LandingPage/CompanyCard.css'

const CompanyCard = (props) => {
    return (
        <Link to={`/user/${props.company._id}`}>
            <div className="companyCard">
                <img src={/* props.company.logo? props.company.logo: */"https://picsum.photos/200"} alt="" />
                <div className="name">{props.company.name? props.company.name:""}</div>
            </div>
        </Link>
    )
}

export default CompanyCard
