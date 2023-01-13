import React, {useEffect} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import "./style.scss"
import {changeCategory} from "../../features/content/contentSlice";
import {useAppDispatch, useLastPath} from "../../app/hooks";


const Main : React.FC = () => {

    const dispatch = useAppDispatch()

    const path = useLastPath(useLocation().pathname)

    useEffect(() => {
        dispatch(changeCategory(path))
    },[])

    return (
        <div className="main">
            <Outlet/>
        </div>
    );
};

export default Main;