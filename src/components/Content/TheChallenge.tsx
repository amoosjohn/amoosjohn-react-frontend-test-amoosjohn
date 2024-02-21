import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import {Button, Card, Select, Tag} from "antd";
import {TagComponent} from "../ParallelComponents/TagComponent";
import MyButton from "../ParallelComponents/ButtonComponent";
import axios from "axios";
import { LiaListAltSolid } from "react-icons/lia";
import {Counter} from "../ParallelComponents/counter"

const TheChallenge = () => {
    const [users, setUsers] = useState<Array<any>>([]);
    const [changeColor, setChangeColor] = useState('red');
    const [changeTextColor, setChangeTextColor] = useState('green');
    const [selectedUser, setSelectedUser] = useState<string>('');

    const handleSelectChange = (e: any) => {
        const filteredUser = users.filter(user => 
            user.id === e     
        );
        setSelectedUser(filteredUser[0].name);
    };

    useEffect(() => {
         axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const {data} = response;
            setUsers(data);
        }).catch(error => {
          console.error('error',error)
        });
    }, []);


    return (<Card className={'card-style the-challenge'}
                  title={<div><LiaListAltSolid className={'header-icon'}/> <span
                      className={'header-text'}>The Challenge</span></div>}>
        <div className={'card-text '}>
            <ul style={{
                color: "#CBD5e0"
            }}>
                <li>Congratulations if you have done all the preparations, you have already
                    completed 50% of the challenge.
                </li>
                <li>Change the icons of all the headers
                    <ul>
                        <li><strong>Welcome to Connect HR</strong>: {` <FaRegHandshake/>`}
                        </li>
                        <li><strong>Get Prepared</strong>: {` <PiCoffeeLight/>`}</li>
                        <li><strong>The Challenge</strong>: {` <LiaListAltSolid/>`}</li>
                        <li><strong>You are Brilliant!</strong>: {` <LiaTrophySolid/>`}</li>
                    </ul>
                    </li>
                <li>
                    When I click 
                    <Button 
                        size={'small'} 
                        type={'primary'} 
                        onClick={() => setChangeColor('green')}
                    >
                        This
                    </Button> 
                    I want <Tag
                    color={changeColor}>This</Tag> color change to Green
                </li>
                <li style={{padding: 5}}>
                    Call this end point https://jsonplaceholder.typicode.com/users and then
                    populate this drop down id as value and name as label 
                    <Select
                        style={{width: 120}}
                        onChange={handleSelectChange}
                    > 
                        {users.map(user => (
                            <Select.Option value={user.id} key={user.id}>{user.name}</Select.Option>
                        ))}
                    </Select>
                    and then when I select any user from the drop down the name should reflect here <Tag
                    color={'processing'}>{`Hi My Name Is `}{selectedUser ? selectedUser : ''}</Tag>
                </li>
                <li>
                    When I click 
                    <MyButton handleOnClick={() => setChangeTextColor('red')}/> 
                    I want 
                    <TagComponent 
                        changeTextColor={changeTextColor}
                    /> color change to Red
                </li>
                <li>Create a view to display all the companies and locations from the backend. I want to navigate to
                    that page by
                    clicking <Link to="/company-location-list" target="_blank"><strong>This</strong></Link> and it should be open in a new tab.
                </li>
                <li>When you load companies and locations it must first load company and then only it should load
                    locations.
                </li>
                <li>Import <strong>Counter</strong> component inside of this <Counter/></li>
            </ul>
        </div>
    </Card>)
}
export default TheChallenge;
