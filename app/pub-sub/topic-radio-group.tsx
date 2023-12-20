import {Dispatch, SetStateAction} from 'react'
import {z} from 'zod'

import {PublishParams, Topic} from '@/app/pub-sub/pubsub'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'

const topicSchema = z.nativeEnum(Topic)

const topicMap = new Map<Topic, PublishParams>([
  [Topic.Foo, {topic: Topic.Foo, args: 'bar'}],
  [Topic.Bar, {topic: Topic.Bar, args: true}],
  [Topic.Foobar, {topic: Topic.Foobar, args: 123}],
])

export default function TopicRadioGroup({
  setTopic,
}: {
  setTopic: Dispatch<SetStateAction<PublishParams>>
}) {
  const handleValueChange = (value: string) => {
    const parsed = topicSchema.safeParse(value)
    if (parsed.success) {
      const params = topicMap.get(parsed.data)

      if (params) {
        setTopic(params)
      }
    } else {
      console.error('Invalid topic selected')
    }
  }

  return (
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
  )
}
