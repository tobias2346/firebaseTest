'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { registerUser } from '../actions/actions'
import { toast } from 'sonner'
const Register = () => {

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('email')
        const password = formData.get('password')
        const name = formData.get('name')
        console.log(email, password, name)
        const user = await registerUser(email as string, password as string, name as string)
        if (user) {
            toast.success('Usuario creado correctamente')
        } else {
            toast.error('Error al crear el usuario')
        }

    }

    return (
        <form onSubmit={handleRegister}>
            <Card className='bg-black text-white w-80 h-80 my-20'>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className='gap-y-4 flex flex-col'>
                <Input type="text" placeholder="Email" name='email' />
                <Input type="password" placeholder="Password" name='password' />
                <Input type="text" placeholder="Name" name='name' />
            </CardContent>
            <CardFooter>
                    <Button type='submit' variant='default' >Register</Button>
                </CardFooter>
            </Card>
        </form>

    )
}

export default Register