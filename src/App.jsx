import './App.scss'
import {useState} from "react";
import {weatherData} from "./Data.js";
import WeatherDisplay from "./components/WeatherDisplay.jsx";
import UserList from './UserList.jsx'
import {Block} from "./Block.jsx";
import ProductList from "./components/ProductList.jsx"

const products = [
  {id: 1, name: "Товар 1"},
  {id: 2, name: "Товар 2"},
  {id: 3, name: "Товар 3"}
]

const images = [
  "https://placekitten.com/200/200",
  "https://placebear.com/200/200",
  "https://placebeard.it/200x200"
];


function App() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = () => {
    setSelectedCity(city.trim());
  };

  return (
    <>
      <div>
        <h1>Интернет магазин</h1>
        <ProductList products={products} images={images}/>
      </div>
      <div className="title">Hello world</div>
        <Block/>
        <UserList/>
      <div style={{padding: "2rem", fontFamily: "sans-serif"}}>
        <h1>Приложение погоды</h1>
        <div>
          <input type="text"
                 placeholder="Введите город"
                 value={city}
                 onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Показать</button>
        </div>

        {selectedCity && (
          <WeatherDisplay
          city={selectedCity}
          data={weatherData[selectedCity]} />
          )}
      </div>
    </>
  )

}

export default App