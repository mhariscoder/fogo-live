import React, { useContext, useState } from "react";
import AppLayout from "../Layouts/AppLayout";
import { Form, Container, Row, Col, Card, Image, Button, Tab, Tabs } from "react-bootstrap";
import UserCard from "./../components/UserCard";
import CurrentDate from "./../components/CurrentDate";
import IncomeCard from "./../components/IncomeCard";
import SearchBar from "./../components/SearchBar";
import TeamCard from "./../components/TeamCard";

const Agency = () => {

    return (
        <>
            <AppLayout isFooter style={{backgroundColor: "#efefef"}}>
                <div className="container mt-3">
                    <div className="py-3">
                        <div className="mb-3">
                            <SearchBar />
                        </div>

                        {/* <div className="mb-3">
                            <UserCard 
                                title={`Admin Name Here`} 
                                description={`ID 3023565256`}
                                image={require('./../assets/images/person-1.png')}
                                className={`mb-3 border-0`}
                            />
                        </div> */}

                        <div className="mb-3">
                            <TeamCard
                                bgColor="#fff"
                                verified
                                shadow
                                title = 'Gojo Satoru Team'
                                description = 'ID 3023565256'
                                image = {require('./../assets/images/person-1.png')}
                                className="mb-3 border-0"
                                
                                authorType="Admin"
                                authorName="Kathykatie"

                                agencyType="Agency code:"
                                agencyName="345"
                            />

                            <TeamCard
                                type="danger"
                                bgColor="#fff"
                                verified
                                shadow
                                title = 'Gojo Satoru Team'
                                description = 'ID 3023565256'
                                image = {require('./../assets/images/person-1.png')}
                                className="mb-3"
                                
                                authorType="Admin"
                                authorName="Kathykatie"

                                agencyType="Agency code:"
                                agencyName="345"
                            />

                            <TeamCard
                                bgColor="#fff"
                                verified
                                shadow
                                title = 'Gojo Satoru Team'
                                description = 'ID 3023565256'
                                image = {require('./../assets/images/person-1.png')}
                                className="mb-3 border-0"
                                
                                authorType="Admin"
                                authorName="Kathykatie"

                                agencyType="Agency code:"
                                agencyName="345"
                            />

                            <TeamCard
                                bgColor="#fff"
                                verified
                                shadow
                                title = 'Gojo Satoru Team'
                                description = 'ID 3023565256'
                                image = {require('./../assets/images/person-1.png')}
                                className="mb-3 border-0"
                                
                                authorType="Admin"
                                authorName="Kathykatie"

                                agencyType="Agency code:"
                                agencyName="345"
                            />
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}
export default Agency;