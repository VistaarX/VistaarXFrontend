import React from 'react'
import Card from './Card'
import '../../stylesheets/Catalog/Catalog.css'

const Catalogue = () => {
    return (
        <div className="catalog">
            <div className="catalog__header">
                Catalogue
            </div>
            <div className="catalog__content">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Catalogue
