export enum Topic {
  Foo = 'foo',
  Bar = 'bar',
  Foobar = 'foobar'
}

type FooPayload = string
type BarPayload = boolean
type FoobarPayload = number
export type EventPayload = FooPayload | BarPayload | FoobarPayload

export type EventCallback = (topic: Topic, args: EventPayload) => void

type Subscriber = {
  token: string
  func: EventCallback
}

class PubSub {
  topics: Record<string, Subscriber[]>
  subUid: number

  constructor() {
    this.topics = {}
    this.subUid = -1
  }

  publish(topic: Topic, args: EventPayload) {
    if (!this.topics[topic]) {
      return false
    }

    const subscribers = this.topics[topic]
    let len = subscribers ? subscribers.length : 0

    while (len--) {
      subscribers[len].func(topic, args)
    }

    return this
  }

  subscribe(topic: Topic, func: EventCallback) {
    if (!this.topics[topic]) {
      this.topics[topic] = []
    }

    const token = (++this.subUid).toString()
    this.topics[topic].push({
      token,
      func,
    })

    return token
  }

  unsubscribe(token: string) {
    for (const m in this.topics) {
      if (this.topics[m]) {
        for (let i = 0, j = this.topics[m].length; i < j; i++) {
          if (this.topics[m][i].token === token) {
            this.topics[m].splice(i, 1)

            return token
          }
        }
      }
    }

    return this
  }
}

export const pubsub = new PubSub()
