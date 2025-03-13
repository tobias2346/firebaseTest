'use client'
import React from 'react'
import { deleteUser } from '../actions/actions'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const DeleteButton = ({ email }: { email: string }) => {
    const handleDelete = async () => {
        console.log(email)
        const response = await deleteUser(email)
        if (response) {
            toast.success('Usuario eliminado correctamente')
        } else {
            toast.error('Error al eliminar el usuario')
        }
    }

    return (
        <Button variant='destructive' onClick={handleDelete}>Delete</Button>
    )

}
export default DeleteButton