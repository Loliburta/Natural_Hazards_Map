import stormSevere from "@iconify-icons/carbon/thunderstorm-severe";
import iceberg from "@iconify-icons/openmoji/iceberg";
import volcano from "@iconify-icons/emojione/volcano";
import drought from "@iconify-icons/carbon/drought";
import dotIcon from "@iconify-icons/bi/dot";
import flood from "@iconify-icons/carbon/flood";
import landslide from "@iconify-icons/openmoji/landslide";
import earthquake from "@iconify-icons/ri/earthquake-line";
import wildfire from "@iconify-icons/el/fire";

export const ChooseIcon = (_id: number, main: boolean | undefined) => {
  let fontSize = "2rem";
  let color = "blue";
  let icon = drought;
  if (_id === 6) {
    fontSize = "1.8rem";
    color = "#d5d1cc";
    icon = drought;
  } else if (_id === 8) {
    fontSize = "1.5rem";
    color = "red";
    icon = wildfire;
  } else if (_id === 9) {
    color = "#83d7ee";
    icon = flood;
  } else if (_id === 10) {
    if (main) {
      color = "yellow";
      icon = stormSevere;
    } else {
      fontSize = "1.5rem";
      color = "#fc6b03";
      icon = dotIcon;
    }
  } else if (_id === 12) {
    icon = volcano;
  } else if (_id === 14) {
    fontSize = "2.5rem";
    icon = landslide;
  } else if (_id === 15) {
    fontSize = "1.6rem";
    icon = iceberg;
  } else if (_id === 16) {
    fontSize = "2rem";
    color = "#A9A18C";
    icon = earthquake;
  }
  return [icon, fontSize, color];
};
