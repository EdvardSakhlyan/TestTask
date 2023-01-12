import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getFilteredContent} from "../../features/content/contentSlice";

interface ContentProps {
    type: string
}

const Content : React.FC<ContentProps> = ({type}) => {

    const dispatch = useAppDispatch()

    const content = useAppSelector(state => state)

    useEffect(() => {
        dispatch(getFilteredContent({type}))
    },[])

    console.log(content)

    return (
        <div>
            {type}
        </div>
    );
};

export default Content;