import React, {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import "./style.scss"
import {changeCategory} from "../../features/content/contentSlice";
import {useAppDispatch, useLastPath} from "../../app/hooks";


const Main : React.FC = () => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const path = useLastPath(useLocation().pathname)

    useEffect(() => {
        navigate("dashboard/popular")
        dispatch(changeCategory(path))
    },[dispatch,path,navigate])

    return (
        <div className="main">
            <Outlet/>
        </div>
    );
};

export default Main;