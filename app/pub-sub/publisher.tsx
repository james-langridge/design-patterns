import {PublishParams, pubsub} from '@/app/pub-sub/pubsub'
import {Button} from '@/components/ui/button'

export default function Publisher({topic}: {topic: PublishParams}) {
  return (
    <Button
      onClick={() => {
        if (topic) pubsub.publish(topic)
      }}
    >
      Publish
    </Button>
  )
}
