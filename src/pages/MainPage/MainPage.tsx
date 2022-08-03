import { AirportSearch } from '../../components/AirportSearch/AirportSearch'
import { AirportFilter } from '../../components/AirportFilter/AirportFilter'
import { AirportCard } from '../../components/AirportCard/AirportCard'

export const MainPage = () => {
  return (
    <div className={'container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'}>
      <AirportSearch />
      <AirportFilter />
      <AirportCard />
    </div>
  )
}
