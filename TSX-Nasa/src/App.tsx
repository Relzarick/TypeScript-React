import { useEffect, useState } from "react";

import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { SiderBar } from "./components/SideBar";

function App() {
  const [showModal, setVis] = useState(false);

  const [data, setData] = useState(null);

  const toggleModle = () => {
    setVis(!showModal);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const NASA_KEY: string = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      //* FOR LOCAL STORAGE
      const today = new Date().toDateString(); // FETCHES DATE

      const localKey = `NASA-${today}`;
      const storedData = localStorage.getItem(localKey);

      if (storedData) {
        const apiData = JSON.parse(storedData);
        setData(apiData);
        console.log("fetched from storage");
        return;
      }

      localStorage.clear(); // CLEAR OLD CACHES

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData)); // SETS NEW CACHE FOR CURRENT DATE

        setData(apiData);
        console.log("fetched from storage");
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("Unknown error");
        }
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModal && data && <SiderBar data={data} toggleDisplay={toggleModle} />}

      {data && <Footer data={data} toggleDisplay={toggleModle} />}
    </>
  );
}

export default App;
