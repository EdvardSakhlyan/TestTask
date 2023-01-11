import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Dashboard";
import Tests from "../Tests";
import Team from "../Team";
import "./style.scss"
import NotFound from "../NotFound";

const Main : React.FC = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/tests" element={<Tests/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default Main;