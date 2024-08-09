import React from "react";

export default function CardsInsights(props) {
    return (
        <>
            <div className="container">
                <div className='containerCards'>
                    <h1 className='titles'>{props.title}</h1>
                    <h2 className='subTitles'>{props.subTitle}</h2>
                    <p className='descriptions'>{props.description}</p>
                </div>
            </div>
        </>
    )
}