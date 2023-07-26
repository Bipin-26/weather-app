import { styled } from "styled-components";
import { useContext, useEffect } from "react";
import { WeatherContext } from "../contexts/weather.context";
import Card from "./card.component";

const CardContainer = () => {
    // const { weatherData } = useContext(WeatherContext);
    console.log("You are inside card container")
    // console.log(weatherData)

    return (
        <CardContainerDiv>
            {/* {weatherData.length !=0 ? weatherData.map((item) => (
                <Card item={item} />
            )) : <h3>No Data Found</h3>} */}
        </CardContainerDiv>
    )
}

export default CardContainer;

const CardContainerDiv = styled.div`
    height:720px;
    width:1024px;
    background-color:#e4e4e4;
`