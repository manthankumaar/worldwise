/* eslint-disable react/prop-types */
import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
const CityList = ({ cities, isLoading }) => {
  if (!cities.length) {
    return <Message message='Add a new City to your list first' />
  }
  return (
    <div className={styles.cityList}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.cityList}>
          {cities.map((city) => {
            return <CityItem city={city} key={city.id} />
          })}
        </ul>
      )}
    </div>
  )
}

export default CityList
