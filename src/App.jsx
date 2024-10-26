import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import StartComponent from "./components/StartComponent/StartComponent";
import Main from "./components/Main/Main";
import getLocation from "./utils/getLocation";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import { getWeatherData, getWeatherByCoords } from "./api/api";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import IncorrectData from "./components/IncorrectData/IncorrectData";

function App() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { latitude, longitude } = await getLocation();
        const data = await getWeatherByCoords(latitude, longitude);
        setWeather(data);
      } catch (error) {
        console.log(`Ошибка: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (city) => {
    if (city) {
      setLoading(true);
      try {
        const data = await getWeatherData(city);
        setWeather(data);
      } catch (error) {
        console.log(`Ошибка: ${error}`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <StartComponent />
      <Header />
      <Main>
        <SearchBlock onSearch={handleSearch} />
        {loading ? (
          <Loading />
        ) : weather ? (
          <Card weather={weather} />
        ) : (
          <IncorrectData />
        )}
      </Main>
    </>
  );
}

export default App;
