import { styled } from "styled-components";
import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/weather.context";
const FormComponent = () => {
    const [input, setInput] = useState("");
    const { getWeather } = useContext(WeatherContext);    

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log("Input ==> ", input)
        getWeather(input);
        setInput("");
    }
    return (
        <FormContainer>
            <FormInput placeholder="Search Location" onChange={(e)=>setInput(e.target.value)} value={input} />
            {console.log(input)}
            <Button onClick={handleOnSubmit} >Get Weather</Button>
        </FormContainer>
    )
}

export default FormComponent;

const FormContainer = styled.div`

`

const FormInput = styled.input`
    
`

const Button = styled.button`

`