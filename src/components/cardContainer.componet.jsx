import { styled } from "styled-components";
import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/weather.context";
import Card from "./card.component";
import CardItemModal from "./cardItem.component";

const CardContainer = () => {
    const { storedData, clearAllData } = useContext(WeatherContext);
    // console.log("STORED DATA",storedData)
    // console.log("You are inside card container")

    const { modalIsOpen, toggleModal } = useContext(WeatherContext);
    const [ modalItem, setModalItem] = useState();
    return (
        <>
        <Container>
        <span>Your Searches</span>
        {storedData.length!=0 ? <ClearButton onClick={clearAllData}>Clear</ClearButton> : null}
        <CardContainerDiv>
            { storedData.length!=0 ? storedData.map((item) => (
                <div onClick={() => {setModalItem(item);toggleModal()}}>
                    <Card item={item} />
                </div>
            )) : <span>No Data Found</span>}
        </CardContainerDiv>
        </Container>
        {modalIsOpen && <CardItemModal item={modalItem} />}
        </>
    )
}

export default CardContainer;

const Container = styled.div`
    // background-color:red;
    position:relative;
    top:180px;
    width:100%;
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    & span{
        margin-bottom:10px;
        color:rgba(255,255,255,.90);
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

    &::-webkit-scrollbar{
        width:5px;
        // height:2px;
        // display:none;
    }
    &::-webkit-scrollbar-track {
        display:none;
      }
      
      /* Handle */
    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 50px;
      }

`

const ClearButton = styled.button`
    padding:8px 20px;
    position:absolute;
    top:0;
    right:80px;
    border:none;
    outline:none;
    background-color:#faaf2a;
    color:#262626;
    font-weight:600;
    border-radius:5px;
    cursor:pointer;
`;
