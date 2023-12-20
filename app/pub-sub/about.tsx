import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function About() {
  return (
    <div className="prose sm:mt-36 mt-40 p-4 mx-auto max-w-prose">
      <p>
        This is a TypeScript implementation of the Publish/Subscribe pattern, a
        variation of the classic{' '}
        <a href="https://www.patterns.dev/vanilla/observer-pattern">
          Observer pattern
        </a>
        .
      </p>
      <p>
        A topic/event channel sits between the publisher and the subscriber,
        avoiding dependencies between the publisher and the subscriber.
      </p>
      <p>
        This promotes loose coupling, as instead of subscriber objects directly
        calling methods of other objects, they subscribe to a specific activity
        of the other object, and get notified when it occurs.
      </p>
      <p>Further resources:</p>
      <ul>
        <li>
          <a href="https://github.com/james-langridge/design-patterns/tree/main/app/pub-sub">
            Source
          </a>
        </li>
        <li>
          <a href="https://addyosmani.com/learning-jsdp/">
            https://addyosmani.com/learning-jsdp/
          </a>
        </li>
      </ul>
      <SyntaxHighlighter language="typescript" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

const codeString = `
class PubSub {
  topics: Record<string, Subscriber[]>
  subUid: number

  constructor() {
    this.topics = {}
    this.subUid = -1
  }

  publish({topic, args}: PublishParams) {
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
`
