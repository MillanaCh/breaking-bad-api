import { useEffect, useState } from "react"
import Header from "./components/Header";
import GridCharacters from "./components/GridCharacters";
import FilterChar from "./components/FilterChar";
import './App.css';

const urlApi = "https://breakingbadapi.com/api/characters?name="
function App() {
  const [char, setChar] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetchingTheApi()
  }, [search])
  const fetchingTheApi = async () => {
    try {
      const request = await fetch(urlApi+search)
      const data = await request.json()
      setChar(data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="container">
      <Header />
      <FilterChar search={(value) => setSearch(value)} />
      {/* send this function to my child , when it send back it will be in setSearch*/}
      <GridCharacters char={char} />
    </div>
  );
}

export default App;

//from child to parents
