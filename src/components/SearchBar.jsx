import React, { useContext, useEffect } from "react";
import { Card, Image, Form, InputGroup } from "react-bootstrap";

const SearchBar = (props) => {
    const {
        
    } = props

    return (
        <>
            <Form>
                <Form.Group className="search-container">
                    <Form.Label className="icon">
                        <Image src={require('./../assets/images/search-normal.png')} />
                    </Form.Label>
                    <Form.Control
                        placeholder="Search something..."
                        aria-label="Search something..."
                        aria-describedby="search-addon"
                        className="custom-input"
                    />
                </Form.Group>
            </Form>
        </>
    )
}

export default SearchBar;