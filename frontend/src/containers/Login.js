import React from 'react';
import GoogleLogin from 'react-google-login';
import { Container, Row, Col } from 'reactstrap';
import { Redirect, useHistory } from 'react-router';
import titleimage from './celebi.jpg'
// import "./LoginRegister.css"
import './Login.css'
import { Jumbotron, Media } from 'reactstrap';
import Logo from './Logo.jpeg';
import { AwesomeButton } from "react-awesome-button";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        this.onSuccessfuLogin = this.onSuccessfuLogin.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    onSuccessfuLogin(response) {
        console.log("Login Successful")
        console.log(response.profileObj)
        sessionStorage.setItem("userData", JSON.stringify(response.profileObj))
        this.setState({
            loggedIn: true
        });
    }

    onFailure(response) {
        console.log(response);
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        } else {
            return (
                <div class="demo-wrap">

                    <img
                        class="demo-bg"
                        src="https://wallpapercave.com/wp/wp6721067.jpg"
                        alt=""
                    />
                    <div class="demo-content">
                        <Jumbotron fluid>
                            <Container fluid>
                                
                                    <img
                                            alt="titleImage"
                                            src={Logo}
                                            className="login-image" />
                                        <h1 className="title">Project Celebi</h1>
                                        <h3 className="subheading">Sustainable communities for a brighter future</h3>
                                    
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    render={renderProps => (
                                        <button className="unstyled-button" onClick={renderProps.onClick} disabled={renderProps.disabled}> Sign in with Google</button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={this.onSuccessfuLogin}
                                    onFailure={this.onFailure}
                                    cookiePolicy={'single_host_origin'}
                                />
                               

                               
                            </Container>
                        </Jumbotron>
                        <div>
                            <Container>

                            </Container>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;