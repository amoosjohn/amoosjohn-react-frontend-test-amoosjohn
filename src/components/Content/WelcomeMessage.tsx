import React from "react";
import {Card} from "antd";
import { FaRegHandshake } from "react-icons/fa";

const WelcomeMessage = () => {
    return (
        <Card className={'card-style'}
              title={<div><FaRegHandshake className={'header-icon'}/> <span
                  className={'header-text'}>Welcome to Connect HR</span></div>}>
            <div className={'card-text'}>
                We're excited that you want to join our team! We're a group of motivated and
                talented developers. Before you come on board, we'd like to see if you're the
                right
                fit for us. Please complete the task below to show us what you've got. Good
                luck,
                dear candidate, and enjoy the coding challenge!
            </div>
        </Card>
    );
}

export default WelcomeMessage;
