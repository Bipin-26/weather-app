import { useContext } from "react";
import { styled } from "styled-components";
import { WeatherContext } from "../contexts/weather.context";

const CardItemModal = ({ item }) => {
  const { toggleModal, modalIsOpen } = useContext(WeatherContext);
  return (
    <>
      {modalIsOpen && (
        <CardModalContainer modalIsOpen={modalIsOpen}>
          <CloseButton onClick={toggleModal}>
            <span></span>
            <span></span>
          </CloseButton>
          <CardItemContainer>
            <CardLocation>
              <span className="location">
                {item.location.name},{item.location.region}
              </span>
              <span>Last updated: {item.current.last_updated}</span>
            </CardLocation>
            <CardItemTemp>
              <CardWeather bgImg={item.current.condition.icon}>
                <span className="temperature">
                  {item.current.temp_c} &#8451;
                </span>
                <span>{item.current.condition.text}</span>
              </CardWeather>
              <hr />
              <CardWeatherDetails>
                <div className="weather-details">
                  <span className="value">
                    {item.forecast.forecastday[0].day.maxtemp_c} &#8451;
                  </span>
                  <span className="label">High</span>
                </div>
                <div className="weather-details">
                  <span className="value">
                    {item.forecast.forecastday[0].day.mintemp_c} &#8451;
                  </span>
                  <span className="label">Low</span>
                </div>

                <div className="weather-details">
                  <span className="value">{item.current.wind_kph}kph</span>
                  <span className="label">Wind</span>
                </div>
                <div className="weather-details">
                  <span className="value">
                    {item.forecast.forecastday[0].day.daily_chance_of_rain}%
                  </span>
                  <span className="label">Rain</span>
                </div>

                <div className="weather-details">
                  <span className="value">
                    {item.forecast.forecastday[0].astro.sunrise}
                  </span>
                  <span className="label">Sunrise</span>
                </div>
                <div className="weather-details">
                  <span className="value">
                    {item.forecast.forecastday[0].astro.sunset}
                  </span>
                  <span className="label">Sunset</span>
                </div>
              </CardWeatherDetails>
            </CardItemTemp>
            <CardForecast>
              <span className="title">Hourly Forecast</span>
              <CardForecastDetails>
                {item.forecast.forecastday[0].hour.map((elem) => (
                  <>
                    <div className="forecast-details">
                      <span className="time">{elem.time.split(" ")[1]}</span>
                      <img src={elem.condition.icon} />
                      <span className="temp">{elem.temp_c} &#8451; </span>
                    </div>
                    <hr />
                  </>
                ))}
              </CardForecastDetails>
            </CardForecast>
          </CardItemContainer>
        </CardModalContainer>
      )}
    </>
  );
};

export default CardItemModal;

const CardModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 50px;
  cursor: pointer;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
  }
  & span {
    z-index: 999;
    height: 35px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.9);
  }

  & :nth-child(1) {
    transform: rotate(-45deg);
  }

  & :nth-child(2) {
    transform: rotate(45deg);
  }

  @media (max-width: 768px) {
    top: 5px;
    right: 10px;
  }
  @media (min-width: 769px) and (max-width:1300px) {
    right: 10px;
  }
`;

const CardItemContainer = styled.div`
  background: linear-gradient(to right, #5d4157, #a8caba);
  color: rgba(255, 255, 255, 0.9);
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 9999;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 95vw;
    height: 90vh;
    padding: 20px;
  }
`;

const CardLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap:5px;
  & .location {
    font-size: 24px;
    letter-spacing: 2px;
  }

  & :nth-child(2) {
    font-size: 13px;
  }
`;

const CardItemTemp = styled.div`
  height: 250px;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  & hr {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 600px){
    width:100%;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    & hr {
        width:100%;
      }
  }

  @media (min-width: 601px) and (max-width:768px) {
    width:60%;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    & hr {
        width:100%;
      }
  }
  @media (min-width: 769px) and (max-width:1300px) {
    height: fit-content;
    align-items: center;
    gap: 10px;
    & hr {
        height:100%;
      }
  }
`;

const CardWeather = styled.div`
  width: 350px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-evenly;
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: 0 50%;
  & .temperature {
    font-size: 42px;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
    background-image: url(${(props) => props.bgImg});
    background-repeat: no-repeat;
    background-size: 120px;
    background-position: 0 50%;
  }

  @media (min-width: 769px) and (max-width:1300px) {
    width: 100%;
    justify-content: space-evenly;
    background-image: url(${(props) => props.bgImg});
    background-repeat: no-repeat;
    background-size: 120px;
    background-position: 0 50%;
  }
`;

const CardWeatherDetails = styled.div`
  padding: 10px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  gap: 50px;
  & .weather-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  & .value {
    font-size: 20px;
    font-weight: 600;
  }
  & .label {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;

    & :nth-child(odd) {
      align-items: flex-start;
    }
    & :nth-child(even) {
      align-items: flex-end;
    }
  }
  @media (min-width: 768px) and (max-width:1300px) {
    width:100%;
    display: grid;
    grid-template-columns: auto auto;

    & :nth-child(odd) {
      align-items: flex-start;
    }
    & :nth-child(even) {
      align-items: flex-end;
    }
  }
`;

const CardForecast = styled.div`
  & .title {
    font-size: 15px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const CardForecastDetails = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  overflow-x: scroll;

  & .forecast-details {
    padding: 10px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
  }

  & hr {
    height: 100px;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar {
    // width:px;
    height: 2px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 50px;
  }
`;
