import { Icon } from "@iconify/react";
import { Context } from "./Context";
import { useContext } from "react";
import { ChooseIcon } from "../utils/ChooseIcon";
interface Props {
  id: number;
  main?: boolean;
  lat: number;
  lng: number;
  onClick?: any;
}

const LocationMarker: React.FC<Props> = ({ id, main, lat, lng, onClick }) => {
  const [, isVisible] = useContext(Context);
  let icon: any;
  let fontSize, color;
  [icon, fontSize, color] = ChooseIcon(id, main)!;
  const onClickFun = () => {
    isVisible(true);
    onClick();
  };

  return (
    <div className="locatioMarker" onClick={onClickFun}>
      <Icon
        icon={icon}
        className="locationMarker__icon"
        style={{ color, fontSize }}
      />
    </div>
  );
};

export default LocationMarker;
