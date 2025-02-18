"use client"

import { auth } from '@/firebase/client'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'

const GoogleButton = () => {

  const logOut = async () => {
    await auth.signOut()
  }

  return (
    <>
        <button type='button' onClick={() =>{
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
    }}>GoogleButton</button>

        <button type='button' onClick={logOut}>LogOut</button>
    </>

  )
}

export default GoogleButton