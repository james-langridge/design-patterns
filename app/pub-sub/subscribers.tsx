import {Dispatch, SetStateAction} from 'react'

import {Subscriber} from '@/app/pub-sub/page'
import {SubscriberCard} from '@/app/pub-sub/subscriber-card'

export default function Subscribers({
  subscribers,
  setSubscribers,
}: {
  subscribers: Subscriber[]
  setSubscribers: Dispatch<SetStateAction<Subscriber[]>>
}) {
  return (
    <div className="flex flex-wrap justify-center items-start h-full gap-10 p-4 sm:mt-36 mt-40">
      {subscribers.map(subscriber => (
        <SubscriberCard
          key={subscriber.id}
          subscriber={subscriber}
          setSubscribers={setSubscribers}
        />
      ))}
    </div>
  )
}
