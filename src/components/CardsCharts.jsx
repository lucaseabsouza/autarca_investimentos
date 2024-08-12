import React from "react";

export default function InitialCardProfitability(props) {
    return (
        <>
            <div className="container">
                <div className='containerCards'>
                    <h1 className='titles'>{props.title}</h1>
                    <h2 className='insights' style={{display: "flex", justifyContent: "center"}}>{props.insight1}</h2>
                    <p className='insights' style={{display: "flex", justifyContent: "center"}}>{props.insight2}</p>
                    <div className="containerBtnSelect" style={{display: "flex", justifyContent: "center"}}>
                        {props.btn1}
                        {props.btn2}
                        {props.btn3}
                    </div>
                    <div className="containerChart">
                        {props.chart}
                    </div>
                </div>
            </div>
        </>
    )
}