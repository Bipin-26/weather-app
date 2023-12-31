import { styled } from "styled-components";
import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/weather.context";
import Card from "./card.component";
import CardItemModal from "./cardItem.component";

const CardContainer = () => {
  const { storedData, clearAllData } = useContext(WeatherContext);

  const { modalIsOpen, toggleModal } = useContext(WeatherContext);
  const [modalItem, setModalItem] = useState();
  return (
    <>
      <Container>
        <span>Your Searches</span>
        {storedData.length != 0 ? (
          <ClearButton onClick={clearAllData}>Clear</ClearButton>
        ) : null}
        <CardContainerDiv>
          {storedData.length != 0 ? (
            storedData.map((item) => (
              <div
                onClick={() => {
                  setModalItem(item);
                  toggleModal();
                }}
              >
                <Card item={item} />
              </div>
            ))
          ) : (
            <span>No Data Found</span>
          )}
        </CardContainerDiv>
      </Container>
      {modalIsOpen && <CardItemModal item={modalItem} />}
    </>
  );
};

export default CardContainer;

const Container = styled.div`
  // background-color:red;
  position: relative;
  top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  & span {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const CardContainerDiv = styled.div`
  height: 70vh;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 50px;
  }

  @media (max-width:768px){
    height:fit-content;
  }

`;

const ClearButton = styled.button`
  padding: 8px 20px;
  position: absolute;
  top: 0;
  right: 15px;
  border: none;
  outline: none;
  background-color: #faaf2a;
  color: #262626;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
