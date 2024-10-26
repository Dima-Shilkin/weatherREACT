//для определения геопозиции
export default async function getLocation() {
  return new Promise((res) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      res({ latitude, longitude });
    });
  });
}
