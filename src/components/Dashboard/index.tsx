import React from 'react';
import "./style.scss"
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Dashboard : React.FC = () => {
    return (
        <div className="dashboard">
            <Header heading="Dashboard"/>
            <Outlet />
        </div>
    );
};

export default Dashboard;