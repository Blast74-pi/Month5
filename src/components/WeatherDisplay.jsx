import styles from './WeatherDisplay.module.css';

const WeatherDisplay = ({city, data}) => {
    if (!data) {
        return <p className={styles.error}>Город"{city}"не нфйден.</p>
    }

    return (
        <div className={styles.weatherCard}>
            <h2>{city}</h2>
            <p>{data.icon}
                {data.description}</p>
            <p>Температура: {data.temp}</p>
        </div>
    )
}

export default WeatherDisplay;