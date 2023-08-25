import { useContext, useEffect } from "react";
import CardContainer from "../components/cardContainer.componet";
import FormComponent from "../components/form.component";
import { styled } from "styled-components";
const HomePage = () => {
  return (
    <HomeContainer>
      <FormContainer>
        <h1>Weather App</h1>
        <FormComponent />
      </FormContainer>
      <CardContainer />
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #141e30, #243b55);
  h1 {
    text-align: center;
    font-family: "Lemonada", cursive;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
