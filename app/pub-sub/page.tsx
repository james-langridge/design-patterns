'use client'

import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {PublishButtons} from "@/app/pub-sub/publish-buttons";
import {SubscriberCard} from "@/app/pub-sub/subscriber-card";
import {Button} from '@/components/ui/button'

export type Subscriber = {
    id: string
}

export default function Page() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([])

    return (
        <div>
            <header className="sticky flex border-b justify-between p-6 items-end">
                <PublishButtons />
                <Button
                    onClick={() => setSubscribers(prev => [...prev, {id: uuidv4()}])}
                >
                    Add Subscriber
                </Button>
            </header>
            <div className="flex flex-wrap justify-evenly items-center h-screen space-x-2 space-y-6 p-4">
                {subscribers.map(subscriber => (
                    <SubscriberCard key={subscriber.id} subscriber={subscriber} />
                ))}
            </div>
        </div>
    )
}
