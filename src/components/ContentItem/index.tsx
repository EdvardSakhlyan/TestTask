import React from 'react';
import "./style.scss"
import Play from "../../images/play";

export interface Item {
    id: number,
    category: string,
    heading: string,
    lessons: number,
    minute: number
}

interface ContentItemProps {
    item : Item
}

const ContentItem : React.FC<ContentItemProps> = ({item}) => {

    return (
        <div className="content-item">
            <div className="content-item-header">
                <div>
                    <h3>{item.heading}</h3>
                    <h4>{item.lessons} lessons</h4>
                </div>
                <div>
                    <h3>{item.minute} min</h3>
                </div>
            </div>
            <div className="content-item-body">
                <div className="icon-box">
                    <Play/>
                </div>
            </div>
        </div>
    );
};

export default ContentItem;