'use client'

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {z} from 'zod'

import {PublishParams, pubsub, Topic} from '@/app/pub-sub/pubsub'
import {SubscriberCard} from '@/app/pub-sub/subscriber-card'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'

export type Subscriber = {
  id: string
}

const topicSchema = z.nativeEnum(Topic)

const topicMap = new Map<Topic, PublishParams>([
  [Topic.Foo, {topic: Topic.Foo, args: 'bar'}],
  [Topic.Bar, {topic: Topic.Bar, args: true}],
  [Topic.Foobar, {topic: Topic.Foobar, args: 123}],
])

export default function Page() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [event, setEvent] = useState<PublishParams>({
    topic: Topic.Foo,
    args: 'bar',
  })

  const handleValueChange = (value: string) => {
    const parsed = topicSchema.safeParse(value)
    if (parsed.success) {
      const params = topicMap.get(parsed.data)

      if (params) {
        setEvent(params)
      }
    } else {
      console.error('Invalid topic selected')
    }
  }

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 flex flex-row border-b justify-evenly items-end p-6 flex-wrap space-x-4 space-y-4 sm:space-y-0 bg-white">
        <div className="flex items-end space-x-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="rg">Events</Label>
            <RadioGroup
              id="rg"
              defaultValue={Topic.Foo}
              onValueChange={handleValueChange}
            >
              <div className="flex items-center space-x-2 capitalize">
                <RadioGroupItem value={Topic.Foo} id="r1" />
                <Label htmlFor="r1">{Topic.Foo}</Label>
              </div>
              <div className="flex items-center space-x-2 capitalize">
                <RadioGroupItem value={Topic.Bar} id="r2" />
                <Label htmlFor="r2">{Topic.Bar}</Label>
              </div>
              <div className="flex items-center space-x-2 capitalize">
                <RadioGroupItem value={Topic.Foobar} id="r3" />
                <Label htmlFor="r3">{Topic.Foobar}</Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            onClick={() => {
              if (event) pubsub.publish(event)
            }}
          >
            Publish
          </Button>
        </div>

        <h1 className="hidden sm:block text-4xl">Publish/Subscribe Pattern</h1>

        <Button
          onClick={() => setSubscribers(prev => [...prev, {id: uuidv4()}])}
        >
          Add Subscriber
        </Button>
      </header>

      <div className="flex flex-wrap justify-center items-center h-full gap-10 p-4 sm:mt-36 mt-40">
        {subscribers.map(subscriber => (
          <SubscriberCard
            key={subscriber.id}
            subscriber={subscriber}
            setSubscribers={setSubscribers}
          />
        ))}
      </div>
    </div>
  )
}
