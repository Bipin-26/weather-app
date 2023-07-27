import { useContext, useEffect } from "react"
import CardContainer from "../components/cardContainer.componet"
import FormComponent from "../components/form.component"
import { WeatherContext } from "../contexts/weather.context"
import { styled } from "styled-components"
const HomePage = () => {
    // const {weatherHistory} = useContext(WeatherContext);
    // const [data, setData] = 
    

    return (
        <HomeContainer>
            <FormContainer>
            <h1>Weather App</h1>
            <FormComponent />
            </FormContainer>
            <CardContainer />
        </HomeContainer>
    )
}

export default HomePage;

const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    h1{
        text-align:center;
        font-family: 'Lemonada', cursive;
    }

`

const FormContainer = styled.div`
    position:fixed;
    top:0;
    height:200px;
    // background-color:yellow;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:9999;
`