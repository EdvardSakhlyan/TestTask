import React from 'react';
import "./style.scss"
import PlaySVG from "../../images/PlaySVG";

export interface Item {
    id?: number,
    category?: string,
    heading: string,
    lessons: number,
    minute: number
}

const ContentItem : React.FC<Item> = ({heading, lessons, minute}) => {

    return (
        <div className="content-item">
            <div className="content-item-header">
                <div>
                    <h3>{heading}</h3>
                    <h4>{lessons} lessons</h4>
                </div>
                <div>
                    <h3>{minute} min</h3>
                </div>
            </div>
            <div className="content-item-body">
                <div className="icon-box">
                    <PlaySVG/>
                </div>
            </div>
        </div>
    );
};

export default ContentItem;