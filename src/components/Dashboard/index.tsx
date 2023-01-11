import React from 'react';
import "./style.scss"

const Dashboard : React.FC = () => {
    return (
        <div className="dashboard">
            <header>
                <h1>Dashboard</h1>
                <ul>
                    <li>Popular</li>
                    <li>Favorite</li>
                    <li>New</li>
                </ul>
            </header>
        </div>
    );
};

export default Dashboard;