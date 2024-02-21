import React, { lazy, Suspense  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
const Home = lazy(() => import('./components/Home'));
const CompanyLocationList = lazy(() => import('./components/CompanyLocationList'));
const Login = lazy(() => import('./components/Auth/Login'));
const Register = lazy(() => import('./components/Auth/Register'));


function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* All protected routes*/}
            <Route element={<ProtectedRoute />}>
                <Route element={<CompanyLocationList/>} path="/company-location-list"/>
            </Route>
          </Routes>
        </Router>
        </Suspense>
    );
}

export default App;
