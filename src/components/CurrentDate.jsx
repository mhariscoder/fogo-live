import React, { useContext, useState } from "react";
import { Form, Container, Row, Col, Card, Image, Button, Tab, Tabs } from "react-bootstrap";

const CurrentDate = () => {

    return (
        <>
            <div className="current-date-container">
                <label className="current-date">25 July, 2024</label>
                <Image src={require('./../assets/images/calendar.png')} className="label-input-file-image" />
            </div>
        </>
    )
}
export default CurrentDate;