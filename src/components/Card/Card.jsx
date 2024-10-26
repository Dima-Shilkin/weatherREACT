/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export default function Card({ weather }) {
  if (!weather || Object.keys(weather).length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__head}>
          <div className={styles.card__head_left}>
            <img
              className={styles.card__icon}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div className={styles.card__head_left_title}>
              <h3 className={styles.card__title}>{weather.name}</h3>
              <span className={styles.card__desc}>
                {weather.weather[0].description}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__head_right}>
            <img
              className={styles.card__footer_img}
              src="/images/temperature.png"
              alt="Иконка температуры"
            />
            <span className={styles.param__temp}>
              {weather.main.temp.toFixed(0)} ℃
            </span>
          </div>
          <div className={styles.card__footer_left}>
            <img
              className={styles.card__footer_img}
              src="/images/wind.png"
              alt="Иконка ветра"
            />
            <span className={styles.param__temp}>{weather.wind.speed} м/с</span>
          </div>
          <div className={styles.card__footer_right}>
            <img
              className={styles.card__footer_img}
              src="/images/humidity.png"
              alt="Иконка влажности"
            />
            <span className={styles.param__temp}>
              {weather.main.humidity} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
