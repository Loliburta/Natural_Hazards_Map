export const checkGeometries = (geoType: string, coordinates: any[]) => {
  let lng: number;
  let lat: number;
  if (geoType === "Point") {
    lng = coordinates[0];
    lat = coordinates[1];
  } else {
    lng = coordinates[0][0][0];
    lat = coordinates[0][0][1];
  }
  return [lng, lat];
};
