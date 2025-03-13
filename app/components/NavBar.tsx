import React from 'react'
import LoginButton from './auth/LoginButton'
import User from './auth/User'
import LogoutButton from './auth/LogoutButton'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

const NavBar = () => {
  return (
    <nav className='w-full h-20 bg-zinc-900 flex justify-end items-center gap-4 px-10'>
      <Button asChild >
        <Link href='/create' className='text-white'>Crear Nuevo</Link>
      </Button>
      <LoginButton />
      <LogoutButton />
      <User />
    </nav>
  )
}

export default NavBar