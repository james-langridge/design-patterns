'use client'

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {SubscriberCard} from "@/app/pub-sub/subscriber-card";
import {Button} from '@/components/ui/button'
import {pubsub, Topic} from "@/app/pub-sub/pubsub";

export type Subscriber = {
    id: string
}

export default function Page() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([])

    return (
        <div>
            <header className="fixed top-0 left-0 right-0 flex flex-col sm:flex-row border-b justify-between items-center p-6 flex-wrap space-x-4 space-y-4 sm:space-y-0 bg-white">
                <Button onClick={() => pubsub.publish(Topic.Foo, 'bar')}>
                    Publish {Topic.Foo} event
                </Button>
                <Button onClick={() => pubsub.publish(Topic.Bar, true)}>
                    Publish {Topic.Bar} event
                </Button>
                <Button onClick={() => pubsub.publish(Topic.Foobar, 123)}>
                    Publish {Topic.Foobar} event
                </Button>
                <Button
                    onClick={() => setSubscribers(prev => [...prev, {id: uuidv4()}])}
                >
                    Add Subscriber
                </Button>
            </header>
            <div className="flex flex-wrap justify-center items-center h-full gap-10 p-4 sm:mt-28 mt-72">
                {subscribers.map(subscriber => (
                    <SubscriberCard key={subscriber.id} subscriber={subscriber} />
                ))}
            </div>
        </div>
    )
}
