import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import connectLogo from '../Assets/Images/logo.png';
import '../App.css';
import {Card, Col, Row, Button} from "antd";
import { LiaListAltSolid } from "react-icons/lia";
import apiService from '../Services/apiService';
import {getUser, removeAccessToken, removeUser} from './Auth/auth';

interface Company {
    id:number;
    name:string;
    address:string;
    employee_count:number;
    created_at:string;
    updated_at:string;
}

interface Location {
    id:number;
    company_id:number;
    name:string;
    address:string;
    created_at:string;
    updated_at:string;
}

function CompanyLocationList() {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState<Company[]>([]);
    const [locations, setLocations] = useState<Location[]>([]);
    const user = getUser();
    
    const getAllCompanies = async () => {
        try {
            const response = await apiService.get('/api/companies');
            setCompanies(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getAllLocations = async () => {
        try {
            const response = await apiService.get('/api/locations');
            setLocations(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleLogout = async () => {
        try {
            await apiService.post('/api/logout');
            removeAccessToken();
            removeUser();
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {    
        getAllCompanies();
        getAllLocations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app">
            <Row className={'container'} gutter={[16, 16]}>
                <Col span={22}>
                    <Col span={2}>
                        <img src={connectLogo} className={'logo'} alt="logo"/>
                    </Col>
                </Col>
                <Col span={2} >
                    <Col span={12}>
                        <span style={{
                                color: "#CBD5e0",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}>
                                {user.name ?? ''}
                        </span>
                    </Col>
                    <Col span={12}>
                        <Button type="link" onClick={handleLogout}>Logout</Button>
                    </Col>
                </Col>
                <Col span={12}>
                    <Card 
                        className={'card-style'}
                        title={<div><LiaListAltSolid className={'header-icon'}/> <span
                              className={'header-text'}>Company List</span></div>}
                    >
                        <div className={'card-text '}>
                            <ul style={{
                                color: "#CBD5e0"
                            }}>
                                {
                                    companies.length > 0 ?
                                        companies.map((company, index) => (
                                            <li key={index}>
                                                {company.name}
                                            </li>
                                        ))
                                    : <></>
                                }
                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card 
                        className={'card-style'}
                        title={<div><LiaListAltSolid className={'header-icon'}/> <span
                              className={'header-text'}>Location List</span></div>}
                    >
                        <div className={'card-text '}>
                            <ul style={{
                                color: "#CBD5e0"
                            }}>
                                {
                                    locations.length > 0 ?
                                        locations.map((location, index) => (
                                            <li key={index}>
                                                {location.name}
                                            </li>
                                        ))
                                    : <></>
                                }
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CompanyLocationList;
