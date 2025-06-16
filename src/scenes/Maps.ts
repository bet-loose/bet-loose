import { Scene } from "phaser";
import Map, { LatLngExpression } from "leaflet";

export class Maps extends Scene {
  map: Map.Map = Map.map("game-container").setView([0, 0], 18);

  constructor() {
    super({ key: "Maps" });
  }

  create() {
    Map.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {}
    ).addTo(this.map);

    const userMarker = Map.circleMarker([0, 0], {
      radius: 8,
      filcColor: "#3388ff",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    }).addTo(this.map);

    const pathCoordinates: LatLngExpression[] = [];

    const pathLine = Map.polyline(pathCoordinates, {
      color: "#ff0000",
      weight: 3,
      opacity: 0.7,
    }).addTo(this.map);

    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          userMarker.setLatLng([latitude, longitude]);
          pathCoordinates.push([latitude, longitude] as LatLngExpression);
          pathLine.setLatLngs(pathCoordinates);
          this.map.setView([latitude, longitude], 18, {
            animate: true,
            duration: 1,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        },
        options
      );
    }
  }
}
