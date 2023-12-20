import {format} from 'date-fns'
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function SubscriberCard({
  subscriber,
  setSubscribers,
}: {
  subscriber: Subscriber
  setSubscribers: Dispatch<SetStateAction<Subscriber[]>>
}) {
  const [log, setLog] = useState<
    {topic: Topic; date: string; args: EventPayload}[]
  >([])
  const topics = Object.values(Topic)

  function callback(topic: Topic, args: EventPayload) {
    console.log(topic)
    const date = new Date()
    const item = {topic, date: format(date, 'HH:mm:ss'), args}

    setLog(prev => {
      if (prev.length === 5) {
        return [item, ...prev.slice(0, 4)]
      }

      return [item, ...prev]
    })
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
        {!!log.length && (
          <Table>
            <TableCaption>The last 5 events.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Time</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {log.map(event => (
                <TableRow key={uuidv4()}>
                  <TableCell>{event.date}</TableCell>
                  <TableCell className="capitalize">{event.topic}</TableCell>
                  <TableCell>{event.args.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
