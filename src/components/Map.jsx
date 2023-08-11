import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
const Map = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useSearchParams()
  const lat = searchQuery.get('lat')
  const lng = searchQuery.get('lan')
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h2>{lat}</h2>
      <h2>{lng}</h2>
    </div>
  )
}

export default Map
