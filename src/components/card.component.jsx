import { styled } from "styled-components";
const Card = ({item}) => {
    console.log("You are inside Card")
    console.log("CARD ITEM", item)
    return (
        <CardDiv>
            <h4>{item.location.name}</h4>
        </CardDiv>
    )
}

export default Card;

const CardDiv = styled.div`
height:300px;
width:200px;
background-color:orange;
`