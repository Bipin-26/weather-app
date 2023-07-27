import { styled } from "styled-components";
import { useState, useEffect } from "react";
const Card = ({item}) => {
    console.log("You are inside Card")
    console.log("CARD ITEM", item)
    const [bgImg, setBgImg] = useState("")

    const getWeatherType = () => {
        console.log("inside the get bg function")
        if(item.current.condition.code === 1240 || item.current.condition.code === 1183){
            setBgImg("rain.png")
        }else if(item.current.condition.code === 1006){
            setBgImg("cloudy.png")
        }else if(item.current.condition.code === 1003){
            setBgImg('partly-cloudy.png')
        }else if(item.current.condition.code === 1030){
            setBgImg('mist-night.png')
        }else if(item.current.condition.code === 1000){
            setBgImg('clear-night.png')
        }else{
            setBgImg('sunny.png')
        }
    }
    useEffect(() => {
        getWeatherType();
    },[])

    
    console.log("WEATHER TYPE",bgImg)
    return (
        <CardDiv bgImg={item.current.condition.icon} >
            <CardHeader>
                <span>{item.current.temp_c} &#8451;</span>
                <span className="type">({item.current.condition.text})</span>
            </CardHeader>
            <CardBody>
                <span>{item.location.name}</span>
            </CardBody>
        </CardDiv>
    )
}

export default Card;

const CardDiv = styled.div`
// height:300px;
height:fit-content;
width:320px;
    background-color:#f6f6f6;
    backdrop-filter:blur(10px);
    background-image:url(${props => (props.bgImg)});
    background-repeat:no-repeat;
    background-size:110px;
    background-position:95% 0px ;
    display:flex;
    flex-direction:column;
    gap:30px;
    border-radius:10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -200px, rgba(0, 0, 0, 0.3) 0px 30px 60px -300px, rgba(10, 37, 64, 0.07) 0px -2px 6px 0px inset;
    &:hover{
        transform:scale(1.05);
        cursor:pointer;
    }
`

const CardHeader = styled.div`
    margin:20px;
    display:flex;
    flex-direction:column;
    & span{
        font-size:32px;
        font-weight:600;
    }
    & .type{
        font-size:14px;
        font-weight:400;
    }
`

const CardBody = styled.div`
    margin:20px;
    font-size:14px;
    font-weight:600
`