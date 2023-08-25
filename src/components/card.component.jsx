import { styled } from "styled-components";
const Card = ({item}) => {

    return (
        <>
        <CardDiv>
            <CardHeader>
                <span>{item.current.temp_c} &#8451;</span>
                <span className="type">({item.current.condition.text})</span>
                <img src={item.current.condition.icon} alt="ICON" />
            </CardHeader>
            <CardBody>
                <span>{item.location.name}</span>
            </CardBody>
        </CardDiv>
        </>
    )
}

export default Card;

const CardDiv = styled.div`
    height:fit-content;
    width:350px;
    background-color:rgba(255,255,255,.2);
    backdrop-filter:blur(10px);
    display:flex;
    flex-direction:column;
    border-radius:10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -200px, rgba(0, 0, 0, 0.3) 0px 30px 60px -300px, rgba(10, 37, 64, 0.07) 0px -2px 6px 0px inset;
    &:hover{
        transform:scale(1.01);
        cursor:pointer;
    }
    
    @media (max-width:768px){
        width:90vw;
        height:fit-content;
    }
`

const CardHeader = styled.div`
    margin:20px;
    display:flex;
    align-items:center;
    gap:10px;
    & span{
        font-size:32px;
        font-weight:600;
    }
    & .type{
        font-size:14px;
        font-weight:400;
    }
    & img{
        position:absolute;
        right:0;
        height:100px;
        width:100px;
        margin:0 auto;
    }

    @media (max-width:768px){
        margin:10px;
        & img{
            position:absolute;
            right:0px;
            height:75px;
            width:75px;
        }
    }
`

const CardBody = styled.div`
    margin:20px;
    font-size:14px;
    letter-spacing:2px;
    
    @media (max-width:768px){
        margin:10px;
    }
`