import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../contexts/weather.context";
import Card from "./card.component";

const CardContainer = () => {
    const { storedData } = useContext(WeatherContext);
    console.log("STORED DATA",storedData)
    console.log("You are inside card container")


    return (
        <Container>
        <span>Your Searches</span>
        <CardContainerDiv>
            { storedData.length!=0 ? storedData.map((item) => (
                <Card item={item} />
            )) : <span>No Data Found</span>}
        </CardContainerDiv>
        </Container>
    )
}

export default CardContainer;

const Container = styled.div`
    position:absolute;
    top:180px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    & span{
        margin-bottom:10px;
    }
`


const CardContainerDiv = styled.div`
    height:70vh;
    // height:calc(100vh-200px);
    width:100%;
    padding:10px 0;
    // background-color:red;
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
    overflow-y:scroll;
`