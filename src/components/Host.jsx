import React, { useContext, useState } from "react";
import { Form, Container, Row, Col, Card, Image, Button, Tab, Tabs } from "react-bootstrap";
import CurrentDate from "./../components/CurrentDate";
import IncomeCard from "./../components/IncomeCard";
import SearchBar from "./../components/SearchBar";
import TeamCard from "./../components/TeamCard";

const Host = (props) => {
    const {
        title,
        description,
        image
    } = props

    return (
        <>
            <div className="host-container">
                <h2 className="host-title">{title}</h2>
                <Image className="host-image" src={image} />
                <span className="host-description">{description}</span>
            </div>
        </>
    )
}
export default Host;