/* eslint-disable react/prop-types */
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
const CountryList = ({ cities, isLoading }) => {
  if (!cities.length) {
    return <Message message='Add a new City to your list first' />
  }
  const countries = cities.reduce((arr, city) => {
    console.log(city)
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji, id: city.id }]
    else return arr
  }, [])
  console.log(countries)
  return (
    <div className={styles.cityList}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.countryList}>
          {countries.map((country) => {
            return <CountryItem country={country} key={country.id} />
          })}
        </ul>
      )}
    </div>
  )
}

export default CountryList
