import {useState} from 'react'

import {Checkbox} from '@/components/ui/checkbox'
import {EventCallback, pubsub, Topic} from "@/app/pub-sub/pubsub";

export function TopicCheckbox({
  topic,
  callback,
}: {
  topic: Topic
  callback: EventCallback
}) {
  const [isChecked, setIsChecked] = useState(false)
  const [token, setToken] = useState<string>()

  function onClick() {
    if (isChecked && token) {
      pubsub.unsubscribe(token)
      setIsChecked(!isChecked)
    } else if (!isChecked) {
      const newToken = pubsub.subscribe(topic, callback)
      setToken(newToken)
      setIsChecked(!isChecked)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={topic} onClick={onClick} />
      <label
        htmlFor={topic}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
      >
        {topic}
      </label>
    </div>
  )
}
