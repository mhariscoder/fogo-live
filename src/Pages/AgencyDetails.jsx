import React, { useContext, useState } from "react";
import { Form, Container, Row, Col, Card, Image, Button, Tab, Tabs } from "react-bootstrap";
import AppLayout from "../Layouts/AppLayout";
import UserCard from "./../components/UserCard";
import CurrentDate from "./../components/CurrentDate";
import IncomeCard from "./../components/IncomeCard";
import SearchBar from "./../components/SearchBar";
import TeamCard from "./../components/TeamCard";
import Host from "./../components/Host";

const AgencyDetails = () => {

    const [adminTab, setAdminTab] = useState('video');

    return (
        <>
            {/* <AppLayout isFooter style={{backgroundColor: "#efefef"}}> */}
                <div className="container mt-3">
                    <div className="py-3">
                        <div className="mb-3">
                            <UserCard 
                                title={`Admin Name Here`} 
                                description={`ID 3023565256`}
                                image={require('./../assets/images/person-1.png')}
                                className={`mb-3 border-0`}
                                authorType="Admin"
                                authorName="Kathykatie"
                                agencyType="Agency code:"
                                agencyName="345"
                            />
                        </div>

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
                                        image = {require('./../assets/images/money-send.png')}
                                        className="border-0"
                                    />
                                </Col>
                                <Col xs={6}>
                                    <IncomeCard 
                                        bgColor="#FEF3C7"
                                        title = "45780"
                                        description = "Daily Income"
                                        image = {require('./../assets/images/wallet.png')}
                                        className="border-0"
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className="mb-3">
                            <Host
                                title="My Hosts"
                                description="12"
                                image={require('./../assets/images/user-with-mark.png')}
                            />
                        </div>

                        <div className="mb-3">
                            <Tabs activeKey={adminTab} onSelect={(k) => setAdminTab(k)} className="agency-tabs">
                                <Tab eventKey="video" title="Video">
                                    <div className="mt-4 mb-2">
                                        <SearchBar />
                                    </div>

                                    <div className="mb-3" style={{minHeight: '550px'}}>
                                        <TeamCard
                                            // type="danger"
                                            // bgColor="#fff"
                                            verified
                                            // shadow
                                            title = 'Gojo Satoru Team'
                                            description = 'ID 3023565256'
                                            image = {require('./../assets/images/person-1.png')}
                                            className="border-0 mb-3"
                                            
                                            // authorType="Admin"
                                            // authorName="Kathykatie"

                                            // agencyType="Agency code:"
                                            // agencyName="345"

                                            // actionText="View Agencies"
                                            // actionFunc={() => alert('View Agencies')}
                                            >
                                            <div className="operation-container">
                                                <Button className="operation">
                                                    <Image src={require('./../assets/images/edit.png')} />
                                                </Button>
                                                <Button className="operation">
                                                    <Image src={require('./../assets/images/cross.png')} />
                                                </Button>
                                            </div>
                                        </TeamCard>
                                        <TeamCard
                                            // type="danger"
                                            // bgColor="#fff"
                                            verified
                                            // shadow
                                            title = 'Gojo Satoru Team'
                                            description = 'ID 3023565256'
                                            image = {require('./../assets/images/person-1.png')}
                                            className="border-0 mb-3"
                                            
                                            // authorType="Admin"
                                            // authorName="Kathykatie"

                                            // agencyType="Agency code:"
                                            // agencyName="345"

                                            // actionText="View Agencies"
                                            // actionFunc={() => alert('View Agencies')}
                                            >
                                            <div className="operation-container">
                                                <Button className="operation">
                                                    <Image src={require('./../assets/images/edit.png')} />
                                                </Button>
                                                <Button className="operation">
                                                    <Image src={require('./../assets/images/cross.png')} />
                                                </Button>
                                            </div>
                                        </TeamCard>
                                        <TeamCard
                                            // type="danger"
                                            // bgColor="#fff"
                                            verified
                                            // shadow
                                            title = 'Gojo Satoru Team'
                                            description = 'ID 3023565256'
                                            image = {require('./../assets/images/person-1.png')}
                                            className="border-0 mb-3"
                                            
                                            // authorType="Admin"
                                            // authorName="Kathykatie"

                                            // agencyType="Agency code:"
                                            // agencyName="345"

                                            // actionText="View Agencies"
                                            // actionFunc={() => alert('View Agencies')}
                                            >
                                            <div className="operation-container">
                                                <Button className="operation">
                                                    <Image src={require('./../assets/images/edit.png')} />
                                                </Button>
                                                <Button className="operation">
                                                    <Image src={require('./../assets/images/cross.png')} />
                                                </Button>
                                            </div>
                                        </TeamCard>
                                    </div>      
                                </Tab>
                                <Tab eventKey="audio" title="Audio">
                                    
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            {/* </AppLayout> */}
        </>
    )
}
export default AgencyDetails;