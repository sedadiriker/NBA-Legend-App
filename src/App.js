import Header from "./components/Header";
import "./App.css";
import {data} from "./helper/data"
import CardContainer from "./components/CardContainer";
import { useState, useEffect } from "react";
import baskatball from "./assets/basketball-147794_1280 (1).png";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000)
    const clearTimer = () => clearTimeout(timer);
    return clearTimer
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <div className="yükleniyor">
          <p>Loading...</p>
          <img src={baskatball} alt="" />
        </div>   
      ) : (
        <>
          <Header data= {data} />
          <CardContainer data= {data} />
        </>
      )}
    </div>
  );
}

export default App;
