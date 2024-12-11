import React, { useContext, useState } from "react";
import { Form, Container, Row, Col, Card, Image, Button, Tab, Tabs } from "react-bootstrap";
import CurrentDate from "./../../components/CurrentDate";
import IncomeCard from "./../../components/IncomeCard";
import SearchBar from "./../../components/SearchBar";
import TeamCard from "./../../components/TeamCard";

const MyAdmins = () => {

    return (
        <>
            <div className="py-3">
                <div className="mb-3">
                    <CurrentDate />
                </div>

                <div className="mb-3">
                    <Row className="gx-3">
                        <Col xs={6}>
                            <IncomeCard 
                                bgColor="#FFEDD5"
                                title = "45780"
                                description = "Total Income Month"
                                image = {require('./../../assets/images/money-send.png')}
                                className="border-0"
                            />
                        </Col>
                        <Col xs={6}>
                            <IncomeCard 
                                bgColor="#FEF3C7"
                                title = "45780"
                                description = "Daily Income"
                                image = {require('./../../assets/images/wallet.png')}
                                className="border-0"
                            />
                        </Col>
                    </Row>
                </div>

                <div className="mb-3">
                    <SearchBar />
                </div>

                <div className="mb-3">
                    <TeamCard
                        type="danger"
                        // bgColor="#fff"
                        verified
                        // shadow
                        title = 'Gojo Satoru Team'
                        description = 'ID 3023565256'
                        image = {require('./../../assets/images/person-1.png')}
                        className="border-0"
                        
                        // authorType="Admin"
                        // authorName="Kathykatie"

                        // agencyType="Agency code:"
                        // agencyName="345"

                        actionText="View Agencies"
                        actionFunc={() => alert('View Agencies')}
                    />
                    <TeamCard
                        type="danger"
                        // bgColor="#fff"
                        verified
                        // shadow
                        title = 'Gojo Satoru Team'
                        description = 'ID 3023565256'
                        image = {require('./../../assets/images/person-1.png')}
                        className="border-0"
                        
                        // authorType="Admin"
                        // authorName="Kathykatie"

                        // agencyType="Agency code:"
                        // agencyName="345"

                        actionText="View Agencies"
                        actionFunc={() => alert('View Agencies')}
                    />
                    <TeamCard
                        type="danger"
                        // bgColor="#fff"
                        verified
                        // shadow
                        title = 'Gojo Satoru Team'
                        description = 'ID 3023565256'
                        image = {require('./../../assets/images/person-1.png')}
                        className="border-0"
                        
                        // authorType="Admin"
                        // authorName="Kathykatie"

                        // agencyType="Agency code:"
                        // agencyName="345"

                        actionText="View Agencies"
                        actionFunc={() => alert('View Agencies')}
                    />
                </div>
            </div>
        </>
    )
}
export default MyAdmins;