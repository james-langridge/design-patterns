import {Button} from '@/components/ui/button'
import {pubsub, Topic} from "@/app/pub-sub/pubsub";

export function PublishButtons() {
  return (
    <>
      <Button onClick={() => pubsub.publish(Topic.Foo, 'bar')}>
        Publish {Topic.Foo} event
      </Button>
      <Button onClick={() => pubsub.publish(Topic.Bar, true)}>
        Publish {Topic.Bar} event
      </Button>
      <Button onClick={() => pubsub.publish(Topic.Foobar, 123)}>
        Publish {Topic.Foobar} event
      </Button>
    </>
  )
}
