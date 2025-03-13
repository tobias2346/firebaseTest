'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { createUserAction } from '../actions/actions'
import { toast } from 'sonner'
const CreateUser = () => {

  const call = async () => {
   const response = await createUserAction('test@test.com', 'test', 'test')
   if (response) {
    toast.success('Usuario creado correctamente')
   } else {
    toast.error('Error al crear el usuario')
   }
  }

  return (
    <section className='flex flex-col gap-4'>
      <Button onClick={call}>Crear Usuario</Button>
    </section>
  )
}

export default CreateUser