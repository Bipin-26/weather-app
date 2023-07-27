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
            <Button onClick={handleOnSubmit} >Get<br/>Weather</Button>
        </FormContainer>
    )
}

export default FormComponent;

const FormContainer = styled.div`
    display:flex;
    width:40%;
    align-items:stretch;
    justify-content:center;
    gap:20px;
    @media (max-width:768px){
        width:100%;
        flex-direction:column;
        align-items:center;
        gap:10px;   
    }
    
`

const FormInput = styled.input`
    width:80%;
    padding:15px 10px;
    border:none;
    outline:2px solid #b1b1b1;
    border-radius:5px;
    &:focus{
        border:none;
        // outline:none;
    }
    
`

const Button = styled.button`
    padding:10px 20px;
    border:none;
    outline:none;
    background-color:#faaf2a;
    color:#262626;
    font-weight:600;
    border-radius:5px;
    cursor:pointer;
`