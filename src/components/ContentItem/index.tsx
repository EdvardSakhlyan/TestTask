import React from 'react';
import "./style.scss"

export interface Item {
    id: number
}

interface ContentItemProps {
    item : Item
}

const ContentItem : React.FC<ContentItemProps> = ({item}) => {

    return (
        <div className="content-item">
            <div className="content-item-header">
                <div>
                    <h2>Some text</h2>
                    <h3>Some text</h3>
                </div>
                <div>
                    <h2>Some text</h2>
                </div>
            </div>
            <div className="content-item-body">
                <div>icon</div>
            </div>
        </div>
    );
};

export default ContentItem;