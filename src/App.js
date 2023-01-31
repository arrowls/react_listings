import './App.css';
import Listing from "./components/Listing";
import {useState, useEffect} from "react";

function App() {
  const [listings, updateListings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getData().then((res) => {
      if (isMounted) {
        updateListings(res);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <Listing items={listings} />
    </div>
  );
}

function getData() {
  return new Promise(async (resolve) => {
    const data = await fetch('./data.json');
    const arr = await data.json();
    resolve(arr);
  })
}

export default App;
