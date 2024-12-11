import React, { useContext, useEffect } from "react";
import { Card, Image, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import { selectContext } from "../context/context";
import { BankName } from "../utils/dummydata";

const TeamCard = (props) => {
    const typeColor = {
        danger: "#FF2242"
    };
    const {
        children,

        verified,
        type = null,
        shadow = null,
        bgColor = null,
        title = null,
        description = null,
        image = null,
        className = "",
        authorType = null,
        authorName = null,
        agencyType = null,
        agencyName = null,
        actionText = null,
        actionFunc = null
    } = props;

    useEffect(() => {
        console.log('props', props)
    }, [props])

    return (
        <>
            <Card 
                className={className} 
                style={{
                    borderRadius: "15px",
                    ...(type && { borderColor: typeColor[type] }),
                    ...(shadow && { boxShadow: "0px 4px 35px 0px #00000012" }),
                    ...(bgColor && { backgroundColor: bgColor })
                }}
            >
                <Card.Body>
                    <div className="team-card-container">
                        <div className="team-card-box">
                            <div className="team-card-image-box">
                                {
                                    (image && image?.length > 0) && <Image src={image} className="team-card-image"/>
                                }
                            </div>

                            <div className="team-card-content-box">
                                <div>
                                    {   title && 
                                            <>
                                                <Card.Title className="title">
                                                    { title }
                                                    { verified && <Image className="verified" src={require("./../assets/images/Frame.png")} /> }
                                                </Card.Title>
                                            </> 
                                    }
                                    { 
                                        description && 
                                            <>
                                                <Card.Text className="description">
                                                    { description } <Image className="document-copy" src={require('./../assets/images/document-copy.png')} />
                                                </Card.Text>
                                            </> 
                                    }
                                </div>

                                { children }
                                
                                {
                                    (actionText && actionFunc) && 
                                        <div className="action-container">
                                            <Button className="action" onClick={actionFunc}>{actionText}</Button>
                                        </div>
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

                        
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default TeamCard;