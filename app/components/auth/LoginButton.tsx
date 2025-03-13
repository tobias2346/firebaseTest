"use client"
import { auth } from '@/firebase/client'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { Button, buttonVariants } from "@/components/ui/button"

const LoginButton = () => {

  const login = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  return (
    <Button className={buttonVariants({ variant: "secondary" })} onClick={login}>Login</Button>
  )
}

export default LoginButton