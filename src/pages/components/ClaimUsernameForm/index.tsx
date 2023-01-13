import { Button, TextInput } from '@ignite-ui/react'

import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './styles'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function claimUsernameForm(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(claimUsernameForm)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="your-user"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Claim username
        <ArrowRight />
      </Button>
    </Form>
  )
}
