import Icon from "@iconify/react";
import xIcon from "@iconify-icons/bi/x";
import { Context } from "./Context";
import { useContext, useState, useEffect } from "react";

interface Props {
  id: string;
  title: string;
  eventDate: string;
}
const LocationInfoBox: React.FC<Props> = ({ id, title, eventDate }) => {
  const [visible, isVisible] = useContext(Context);
  const [display, setDisplay] = useState("locationInfo");
  let ts = new Date(eventDate);
  useEffect(() => {
    if (visible) {
      setDisplay("locationInfo");
    } else {
      setDisplay("locationInfo--hidden");
    }
  }, [visible]);

  return (
    <div className={display}>
      <div className="" onClick={() => isVisible(false)}>
        <Icon icon={xIcon} className="locationInfo__xIcon" />
      </div>
      <h2>Event Location Info</h2>

      <ul className="locationInfo__list">
        <li className="locationInfo__list__item">{title}</li>
        <li className="locationInfo__list__item">{ts.toDateString()}</li>
        <li className="locationInfo__list__item">
          ID: <strong>{id}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
