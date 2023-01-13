import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getFilteredContent} from "../../features/content/contentSlice";
import ContentItem from "../ContentItem";
import "./style.scss"

interface ContentProps {
    type: string
}

const Content : React.FC<ContentProps> = ({type}) => {

    const dispatch = useAppDispatch()

    const {content} = useAppSelector(state => state.contentReducer)

    useEffect(() => {
        dispatch(getFilteredContent(type))
    },[type])

    return (
        <div className="content">
            {content.map(item => <ContentItem item={item} key={item.id}/>)}
        </div>
    );
};

export default Content;