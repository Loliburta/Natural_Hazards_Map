import React, { useState, useEffect } from "react";
import Map from "./Map";
import Header from "./Header";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Context } from "./Context";
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

const App: React.FC = () => {
  const [context, setContext] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=300&api_key=${nasaApiKey}`
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <div className="loader">
          <PropagateLoader color={"#123abc"} size={30} />
        </div>
      ) : (
        <Context.Provider value={[context, setContext]}>
          <Map data={eventData} />
        </Context.Provider>
      )}
    </>
  );
};

export default App;
