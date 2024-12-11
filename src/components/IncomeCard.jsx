import React, { useContext, useEffect } from "react";
import { Card, Image } from "react-bootstrap";

const IncomeCard = (props) => {
    const {
        bgColor = '#fff',
        title = null,
        description = null,
        image = null,
        className = ''
    } = props

    return (
        <>
            <Card className={className} style={{ backgroundColor: bgColor, borderRadius: 15 }}>
                <Card.Body className="income-card-container">
                    <div className="income-card-image-box">
                        {
                            (image && image?.length > 0) && <Image src={image} className="admin-card-image"/>
                        }
                    </div>
                    <div className="income-card-content-box">
                        <Card.Title className="title">{ title }</Card.Title> 
                        <Card.Text className="description">
                            { description }
                        </Card.Text> 
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default IncomeCard;