import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import apiClient from "./http-common"
const App = () => {
  const [movieData, setMoviedata] = useState([])
  console.log(movieData,"movieDatamovieData")
  const fetchData = async () => {
    try {
      const response = await apiClient.get("/movies")
      setMoviedata(response?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    
    fetchData()
  }, [])
  return (
    <>
      <Card movieData={movieData}/>
    </>
  );
}

export default App;
