import { Button, TextInput } from '@ignite-ui/react'

import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form>
      <TextInput size="sm" prefix="ignite.com/" placeholder="your-user" />
      <Button size="sm" type="submit">
        Claim username
        <ArrowRight />
      </Button>
    </Form>
  )
}
