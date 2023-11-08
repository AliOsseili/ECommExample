import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ShippingAddressScreen() {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [country, setCountry] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Helmet>
                <title>Shipping Address</title>
            </Helmet>
            <h1 className="my-3">Shipping Address</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        value={postalcode}
                        onChange={(e) => setPostalcode(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <div className="mb-3">
                    <Button variant="primary" type="submit">
                        Continue
                    </Button>
                </div>
            </Form>
        </div>
    );
}
