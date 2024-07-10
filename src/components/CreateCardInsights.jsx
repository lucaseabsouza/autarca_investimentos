import React from "react";
import CardsInsights from "./CardsInsights";

export default function createCardInsights(infoCardInsights) {
    return <CardsInsights
        titleCardInsights={infoCardInsights.titleCardInsights}
        valueCardInsights={infoCardInsights.valueCardInsights}
        detailsCardInsights={infoCardInsights.detailsCardInsights}
    />
}