import React, { useContext, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import { selectContext } from "../context/context";
import { BankName } from "../utils/dummydata";

const UserCard = (props) => {
    const {
        bgColor = '#fff',
        title = null,
        description = null,
        image = null,
        className = ``,
        authorType = null,
        authorName = null,
        agencyType = null,
        agencyName = null
    } = props

    return (
        <>
            <Card className={className} style={{ backgroundColor: bgColor, borderRadius: 15, boxShadow: "0px 4px 35px 0px #00000012" }}>
                <Card.Body className="admin-card-container">
                    <div className="admin-card-box">
                        <div className="admin-card-image-box">
                            {
                                (image && image?.length > 0) && <Image src={image} className="admin-card-image"/>
                            }
                        </div>
                        <div className="admin-card-content-box">
                            {   title && 
                                    <Card.Title className="title">{ title }</Card.Title> 
                            }
                            { 
                                description && 
                                    <Card.Text className="description">
                                        { description } <Image src={require('./../assets/images/document-copy.png')} />
                                    </Card.Text> 
                            }
                        </div>
                    </div>
                    
                    {
                        ((authorType && authorName) || (agencyType && agencyName)) &&

                            <div className="d-flex align-items-center justify-content-between mt-3">
                                {
                                    (authorType && authorName) ?
                                        <div className="author-container">
                                            <div className="author-circle"></div>
                                            <p className="author-type">{authorType}</p>
                                            <h2 className="author-name">{authorName}</h2>
                                        </div>
                                        :
                                        <div></div>
                                }

                                {
                                    (agencyType && agencyName) &&
                                        <div className="agency-container">
                                            <div className="agency-box"> 
                                                <p className="agency-type">{agencyType}</p>
                                                <h2 className="agency-name">{agencyName}</h2>
                                            </div>
                                        </div>
                                }
                            </div>
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default UserCard;