import Events from './data/events'
import FilterButtons from './components/filters'
import ServicePng from '../../../public/services.png'
import Banner from '../../components/Banner'
import { useState } from 'react'

import EventBanner from './components/EventBanner'


type EventType = 'all' | 'nearest' | 'latest'


const events = () => {
   const [filter, setFilter] = useState<EventType>('all')
  const now = new Date()

  const filteredEvents = (() => {
    if (filter === 'all') return Events

    if (filter === 'nearest') {
      // sort future events by soonest date
      return Events
        .filter((e) => new Date(e.date) > now)
        .sort((a, b) => +new Date(a.date) - +new Date(b.date))
    }

    if (filter === 'latest') {
      // get only past events, and return latest one
      const pastEvents = Events
        .filter((e) => new Date(e.date) < now)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date))

      return pastEvents.length > 0 ? [pastEvents[0]] : []
    }

    return Events
  })()
  return (
    <div>
      <Banner
        title={"Events"}
        subtitle={"Join our community events."}
        description={
          "From startups to enterprises, we've helped businesses transform ideas into reality. Explore our portfolio to see how we blend creativity, technology, and strategy to deliver results that matter."
        }
        image={ServicePng}
      />
      <div className='mt-5'>
      <FilterButtons selected={filter} onChange={setFilter}/>
      </div>
       <div className="space-y-10">
        {filteredEvents.map((event) => (
          <EventBanner key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default events
