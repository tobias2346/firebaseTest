'use client'
import { deleteCookie } from '@/app/actions/actions'
import { Button, buttonVariants } from '@/components/ui/button'
import { auth } from '@/firebase/client'
import React from 'react'

const LogoutButton = () => {
    
  const logOut = async () => {
    await auth.signOut()
    await deleteCookie('session')
  }

  return (
    <Button className={buttonVariants({ variant: "destructive" })}  type='button' onClick={logOut}>Logout</Button>
  )
}

export default LogoutButton