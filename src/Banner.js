import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>
                    Blockchain based real estate investments
                </h1>
                <h5>
                    Invest in real estate properties fast and securely
                </h5>
                <Button variant="outlined">Explore New Properties</Button>
            </div>
        </div>
    )
}

export default Banner
