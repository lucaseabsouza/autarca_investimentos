import React from 'react'

function CardsInsights(props) {
    return (
    <>
        <section className='containerCardsInsights'>
            <div className='cardsInsights'>
                <h1>{props.titleCardInsights}</h1>
                <h2>{props.valueCardInsights}</h2>
                <p>{props.detailsCardInsights}</p>
            </div>
        </section>
    </>
)
}

export default CardsInsights