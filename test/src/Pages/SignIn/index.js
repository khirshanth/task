import React from 'react'
import Layout from "../../Component/Layout"
import { Container, Form, Button, Row, Col } from "react-bootstrap"
import Input from "../../Component/UI/Input"
function SignIn(props) {
    return (
        <div>

            <Layout>
                <Container>
                    <Row style={{ marginTop: "5%" }}>
                        <Col md={{ span: 6, offset: 3 }}>

                            <Form>

                                <Input
                                    label="Email"
                                    placeholder="Enter Your Email"
                                    value=""
                                    type="email"
                                    onChange={() => { }}
                                />

                                <Input
                                    label="Password"
                                    placeholder="Enter Your Password"
                                    value=""
                                    type="password"
                                    onChange={() => { }}
                                />
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                        </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </Layout>


        </div>
    )
}

export default SignIn