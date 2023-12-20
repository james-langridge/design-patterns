'use client'

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import About from '@/app/pub-sub/about'
import Publisher from '@/app/pub-sub/publisher'
import {PublishParams, Topic} from '@/app/pub-sub/pubsub'
import Subscribers from '@/app/pub-sub/subscribers'
import TopicRadioGroup from '@/app/pub-sub/topic-radio-group'
import {Button} from '@/components/ui/button'

export type Subscriber = {
  id: string
}

export default function Page() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [topic, setTopic] = useState<PublishParams>({
    topic: Topic.Foo,
    args: 'bar',
  })

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 flex flex-row border-b justify-evenly items-end p-6 flex-wrap space-x-4 space-y-4 sm:space-y-0 bg-white">
        <div className="flex items-end space-x-4">
          <TopicRadioGroup setTopic={setTopic} />
          <Publisher topic={topic} />
        </div>
        <h1 className="hidden sm:block text-4xl">Publish/Subscribe Pattern</h1>
        <Button
          onClick={() => setSubscribers(prev => [...prev, {id: uuidv4()}])}
        >
          Add Subscriber
        </Button>
      </header>
      {subscribers.length ? (
        <Subscribers
          subscribers={subscribers}
          setSubscribers={setSubscribers}
        />
      ) : (
        <About />
      )}
    </div>
  )
}
