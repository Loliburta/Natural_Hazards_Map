import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { checkGeometries } from "../utils/checkGeometries";
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY!;
console.log(googleApiKey);
const defaultCenter = {
  lat: 45.237049,
  lng: 21.017532,
};
const defaultZoom = 5;

interface Props {
  data: any[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

const Map: React.FC<Props> = ({
  data,
  center = defaultCenter,
  zoom = defaultZoom,
}) => {
  const [locationInfo, setLocatonInfo] = useState({
    id: "",
    title: "",
    eventDate: "",
  });
  const markers = data.map((ev) => {
    if ([6, 8, 9, 12, 14, 15, 16].includes(ev.categories[0].id)) {
      let lng: number;
      let lat: number;

      [lng, lat] = checkGeometries(
        ev.geometries[0].type,
        ev.geometries[0].coordinates
      );
      return (
        <LocationMarker
          id={ev.categories[0].id}
          lat={lat}
          lng={lng}
          onClick={() =>
            setLocatonInfo({
              id: ev.id,
              title: ev.title,
              eventDate: ev.geometries[0].date,
            })
          }
        />
      );
    } else if (ev.categories[0].id === 10) {
      let arr = [];
      let i = 0;
      for (const elem of ev.geometries) {
        arr.push(
          <LocationMarker
            id={ev.categories[0].id}
            main={i === 0 || i === ev.geometries.length - 1}
            lat={elem.coordinates[1]}
            lng={elem.coordinates[0]}
            onClick={() =>
              setLocatonInfo({
                id: ev.id,
                title: ev.title,
                eventDate: ev.geometries[0].date,
              })
            }
          />
        );
        i += 1;
      }

      return arr;
    } else {
      return null;
    }
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{ fullscreenControl: false }}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo.title !== "" && (
        <LocationInfoBox
          id={locationInfo.id}
          title={locationInfo.title}
          eventDate={locationInfo.eventDate}
        />
      )}
    </div>
  );
};

export default Map;
