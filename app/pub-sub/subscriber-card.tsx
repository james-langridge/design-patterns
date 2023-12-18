import {X} from 'lucide-react'
import {Dispatch, SetStateAction, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {Subscriber} from '@/app/pub-sub/page'
import {EventPayload, Topic} from '@/app/pub-sub/pubsub'
import {TopicCheckbox} from '@/app/pub-sub/topic-checkbox'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function SubscriberCard({
  subscriber,
  setSubscribers,
}: {
  subscriber: Subscriber
  setSubscribers: Dispatch<SetStateAction<Subscriber[]>>
}) {
  const [log, setLog] = useState<EventPayload[]>([])
  const topics = Object.values(Topic)

  function callback(topic: Topic, args: EventPayload) {
    setLog(prev => [...prev, args])
  }

  function onClick() {
    setSubscribers(prev => prev.filter(s => s.id !== subscriber.id))
  }

  return (
    <Card className="w-[350px]">
      <CardHeader className="relative">
        <CardTitle>Subscriber</CardTitle>
        <CardDescription>{subscriber.id}</CardDescription>
        <X className="h-6 w-6 absolute top-1 right-1" onClick={onClick} />
      </CardHeader>
      <CardContent className="space-y-4">
        {topics.map(topic => (
          <TopicCheckbox key={topic} topic={topic} callback={callback} />
        ))}
        {log.map(event => (
          <div key={uuidv4()}>{event.toString()}</div>
        ))}
      </CardContent>
    </Card>
  )
}
