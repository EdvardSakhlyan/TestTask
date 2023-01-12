import React from 'react';
import './App.scss';
import {RouterProvider} from "react-router-dom";
import router from "./router";

function App() {
    return (
        <div className="app">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
