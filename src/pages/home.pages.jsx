import { useContext, useEffect } from "react"
import CardContainer from "../components/cardContainer.componet"
import FormComponent from "../components/form.component"
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
        // color:rgba(255,255,255,.90);
    flex-direction:column;
    align-items:center;
    position:fixed;
    height:100vh;
    width:100vw;
    // background: linear-gradient(to right, #304352, #d7d2cc);
    // background: linear-gradient(to right, #232526, #414345); 
    // background: linear-gradient(to bottom, #3e5151, #decba4);
    // background: linear-gradient(to right, #ece9e6, #ffffff);
    background: linear-gradient(to right, #141e30, #243b55);
    // background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
    // background: linear-gradient(to right, #000000, #434343);
    h1{
        text-align:center;
        font-family: 'Lemonada', cursive;
        color:rgba(255,255,255,.90);
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
    // z-index:-99;
`