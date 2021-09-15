import React from 'react';
import GoogleLogin from 'react-google-login';
import { Container, Row, Col } from 'reactstrap';
import { Redirect, useHistory } from 'react-router';
import titleimage from './celebi.jpg'
import "./LoginRegister.css"

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
        this.onSuccessfuLogin = this.onSuccessfuLogin.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    onSuccessfuLogin(response) {
        console.log("Login Successful")
        this.setState({
            loggedIn: true
        });
    }
    
    onFailure(response) {
        console.log(response);
      }

    render(){ 
        if (this.state.loggedIn) {
            return <Redirect to = "/home" />
        } else {
            return (
                <div>
                    <div className="login__box">
                        <Container style={{padding: "20px"}}>
                            <Row>
                                <Col>
                                    <p className="login__text">
                                    Welcome to Project Celebi<br/>
                                    <span className="blue__text">Enabling sustainable communities for a brighter future. </span>
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                    alt="titleImage"
                                    src={titleimage}
                                    className="title__image"/>
                                </Col>
                            </Row>
                            <Row style={{display: "flex",alignItems:"center"}}>
                                <GoogleLogin
                                    clientId="200126695645-eghulruqrvtvvs0j2tbd407cq9gl5sll.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.onSuccessfuLogin}
                                    onFailure={this.onFailure}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Row>
                        </Container>
                    </div>
                </div>
            );
        }
    }
}

export default Login;