import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {Subscriber} from "@/app/pub-sub/page";
import {TopicCheckbox} from '@/app/pub-sub/topic-checkbox'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { EventPayload, Topic} from "@/app/pub-sub/pubsub";

export function SubscriberCard({subscriber}: {subscriber: Subscriber}) {
  const [log, setLog] = useState<EventPayload[]>([]);
  const topics = Object.values(Topic);

  function callback(topic: Topic, args: EventPayload) {
    setLog(prev => [...prev, args])
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Subscriber</CardTitle>
        <CardDescription>{subscriber.id}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {topics.map(topic => (
          <TopicCheckbox
            key={topic}
            topic={topic}
            callback={callback}
          />
        ))}
        {log.map(event => (
          <div key={uuidv4()}>{event.toString()}</div>
        ))}
      </CardContent>
    </Card>
  )
}
