import React from "react";
import './landing.scss'
import Header from "../../components/Header/Header";
import {Button, Col, Container, Row} from "reactstrap";
import landingMain from '../../assets/img/landingMain.png'
import computerIcon from '../../assets/img/computer.png'
import {PlayCircle} from "react-feather";

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className=" landing">


                    <div className="firstView">
                        <Row className='w-100'>
                            <Col mg={6}>
                                <img src={landingMain} alt=""/>
                            </Col>
                            <Col md={6} className='content-wrapper'>
                                <h1 className='content-topic'>Pushing The Envelope Of Software Development</h1>
                                <p className='subDetails-para'>With unique business ideas and the passionate people
                                    behind. </p>
                                <div className='landing-btn-grp d-flex justify-content-between'>
                                    <Button className='btn-getStart'>Get Started</Button>
                                    <span> <PlayCircle strokeWidth='0.5px' size='68px'/> How it works </span>
                                </div>

                            </Col>
                        </Row>
                    </div>

                    <div className="WhatWeDo">
                        <div className="container">
                            <Row className='w-100 py-5'>
                                <Col mg={6} className='topic-wrapper py-5'>
                                    <span>WHAT WE DO</span> <br/>
                                    <h1>Integrated tech solutions across all digital platforms</h1>
                                </Col>

                                <Col mg={6} className='content-wrapper py-5'>
                                    <div>
                                        <p className='subIntro'>We are committed to keeping you ahead in today’s
                                            fast-paced and ever-evolving
                                            world by delivering digital solutions that solve problems in a secure,
                                            simple and effective way.</p>
                                    </div>

                                    <div className=' service-view '>
                                        <Row>
                                            <Col className='service-card' md={6}>
                                                <img src={computerIcon} alt=""/>
                                                <h5>Custom Software</h5>
                                                <p>We create solutions that solve your business problems. Our team has a
                                                    decade long success track record.</p></Col>

                                            <Col className='service-card' md={6}>
                                                <img src={computerIcon} alt=""/>
                                                <h5>Web Applications</h5>
                                                <p>We typically build all web applications from scratch to satisfy your requirements.</p></Col>


                                            <Col className='service-card' md={6}>
                                                <img src={computerIcon} alt=""/>
                                                <h5>Mobile Applications</h5>
                                                <p>We transform your mobile app ideas into high quality customised apps that are easy to use.</p></Col>


                                            <Col className='service-card' md={6}>
                                                <img src={computerIcon} alt=""/>
                                                <h5>UI / UX Design</h5>
                                                <p>We craft better user experience and Interface designs for your digital products.</p></Col>


                                        </Row>

                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Landing;

