import { useState } from "react";
import { weatherData } from "./weatherData";
import styles from "./Weather.module.scss";

function Weather() {
    const [city, setCity] = useState("hanoi");
    const [weatherValue, setWeatherValue] = useState(weatherData.hanoi);
    const selectedCity = weatherData[city];

    const handleChange = (e) => {
        const key = e.target.value;
        setCity(key);
        setWeatherValue(weatherData[key]);
    };

    const getWeatherIcon = (weather) => {
        if (weather.toLowerCase().includes("nắng")) return "☀️";
        if (weather.toLowerCase().includes("mây")) return "🌤️";
        if (weather.toLowerCase().includes("mưa")) return "🌧️";
        return "❓";
    };

    const randomOffset = (base, range) => {
        return base + Math.floor(Math.random() * (range * 2 + 1)) - range;
    };

    const refreshWeather = () => {
        setWeatherValue((prev) => ({
            ...prev,
            temp: randomOffset(selectedCity.temp, 5),
            humidity: randomOffset(selectedCity.humidity, 5),
        }));
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <label className={styles.label} htmlFor="cities">
                    Choose a city:
                </label>
                <select
                    className={styles.select}
                    name="cities"
                    id="cities"
                    onChange={handleChange}
                    value={city}
                >
                    <option value="hanoi">Hà Nội</option>
                    <option value="hcm">TP.HCM</option>
                    <option value="danang">Đà Nẵng</option>
                </select>

                <h2 className={styles.title}>Weather data:</h2>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <span className={styles.itemLabel}>City</span>
                        <span>{selectedCity.city}</span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.itemLabel}>Temp</span>
                        <span>{weatherValue.temp}°C</span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.itemLabel}>Weather</span>
                        <span className={styles.weatherInfo}>
                            <strong>{selectedCity.weather}</strong>
                            {getWeatherIcon(selectedCity.weather)}
                        </span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.itemLabel}>Humidity</span>
                        <span>{weatherValue.humidity}%</span>
                    </li>
                </ul>

                <button
                    type="button"
                    className={styles.refreshBtn}
                    onClick={refreshWeather}
                >
                    Làm mới
                </button>
            </div>
        </div>
    );
}

export default Weather;
