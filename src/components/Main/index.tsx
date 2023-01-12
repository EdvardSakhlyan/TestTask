import React from 'react';
import {Outlet} from "react-router-dom";
import "./style.scss"

const Main : React.FC = () => {
    return (
        <div className="main">
            <Outlet/>
        </div>
    );
};

export default Main;