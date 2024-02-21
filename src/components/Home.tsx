import React, {useState} from 'react';
import connectLogo from '../Assets/Images/logo.png';
import '../App.css';
import {Button, Card, Col, Row, Steps} from "antd";
import WelcomeMessage from "./Content/WelcomeMessage";
import GetPrepared from "./Content/GetPrepared";
import TheChallenge from "./Content/TheChallenge";
import YouAreBrilliant from "./Content/YouAreBrilliant";

function Home() {
    const [current, setCurrent] = useState<number>(0);
    const [imTheBlock, setImTheBlock] = useState<boolean>(false);

    const steps = [
        {
            key: 'welcome_to_connect_hr',
            title: 'Welcome to Connect HR',
            content: <WelcomeMessage/>,
        },
        {
            key: 'get_prepared',
            title: 'Get Prepared',
            content: <GetPrepared setImTheBlock={setImTheBlock}/>,
        },
        {
            key: 'the_challenge',
            title: 'The Challenge',
            content: <TheChallenge/>,
        },
        {
            key: 'you_are_brilliant',
            title: 'You are Brilliant!',
            content: <YouAreBrilliant/>,
        },
    ];

    const next = () => {
        let nextStep = current + 1;
        if (nextStep >= 1 && imTheBlock) {
            nextStep = 1;
        }
        setCurrent(nextStep);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className="app">
            <Row className={'container'} gutter={[16, 16]}>
                <Col span={24}>
                    <Col span={2}>
                        <img src={connectLogo} className={'logo'} alt="logo"/>
                    </Col>
                </Col>
                <Col span={24}>
                    <Card className={'main-card-style'}>
                        <Steps current={current} items={steps}/>
                        <div className={'steps'}>{steps[current].content}</div>
                        <div style={{marginTop: 24}}>
                            {current > 0 && (
                                <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                    Previous
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => console.log('hello')}>
                                    Done
                                </Button>
                            )}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
