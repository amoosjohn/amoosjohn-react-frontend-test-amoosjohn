import React, {useEffect, useState} from "react";
import {Card} from "antd";
import { PiCoffeeLight } from "react-icons/pi";

interface getPreparedProps {
    setImTheBlock: (status: boolean) => void;
}

const GetPrepared = ({setImTheBlock}: getPreparedProps) => {
    const [helpMeTextStyle, setHelpMeTextStyle] = useState({});
    const [helpMeText, setHelpMeText] = useState('You are free to do any changes to the codebase to get things done!');
    const [items, setItems] = useState([
        `There is text in The Challenge {\`<ul>\`} steps please change text color to #CBD5e0 to see it`,
        'Install axios library',
        'You seed to set <YouAreBrilliant/> component as the 4th step instead of a text',
        'You are not allowed to pass this step it has been blocked! Please remove the block',
        'Make sure to complete backend task and it should be running on http://localhost:8000/',
        'You might need to create Endpoints, Resources and services in the backend code to complete task',
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (items.length) {
                const copyOfItems = [...items];
                copyOfItems.pop();
                setItems(copyOfItems);
            } else {
                clearInterval(intervalId);
            }
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [items]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (items.length > 4) {
                setImTheBlock(false);
            }
        }, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, [items]);

    useEffect(() => {
        setHelpMeTextStyle({
            textWeight: 'bold',
            color: getColor()
        })
    }, [items]);

    const getColor = () => {
        switch (items.length) {
            case 0 :
            case 1 :
                return 'red';
            case 2 :
                return 'orange';
            case 3 :
                return 'yellow';
            case 4 :
                return 'green';
            case 5 :
                return 'white';
            default:
                return '#CBD5e0';
        }
    }

    const getMessage = () => {
        switch (items.length) {
            case 0 :
                return 'Code get deleted! Please Refresh the page';
            case 1 :
                return 'What are you looking at! Please Stop it';
            case 2 :
                return 'Oh my Good!!! Im Shrinking!';
            case 3 :
                return 'Look closely, Im Shrinking!';
            case 4 :
                return 'I feel Like Something going wrong!';
            default:
                return 'You are free to do any changes to the codebase to get things done!';
        }
    }

    useEffect(() => {
        setHelpMeText(getMessage());
    }, [items]);

    return (
        <Card className={'card-style'}
              title={<div><PiCoffeeLight className={'header-icon'}/> <span
                  className={'header-text'}>Get Prepared</span></div>}>
            <div className={'card-text'}>
                <div style={helpMeTextStyle}>{helpMeText}</div>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </div>
        </Card>
    );
}
export default GetPrepared;
