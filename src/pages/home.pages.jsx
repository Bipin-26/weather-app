import { useContext, useEffect } from "react"
import CardContainer from "../components/cardContainer.componet"
import FormComponent from "../components/form.component"
import { WeatherContext } from "../contexts/weather.context"

const HomePage = () => {
    // const {weatherHistory} = useContext(WeatherContext);
    // const [data, setData] = 
    

    return (
        <>
            <h1>Weather App</h1>
            <FormComponent />
            <CardContainer />
        </>
    )
}

export default HomePage