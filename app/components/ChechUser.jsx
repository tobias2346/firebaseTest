'use client'
import { auth } from '@/firebase/client';
import React, { useEffect, useState } from 'react'
import { deleteCookie, setToken } from './actions';

const ChechUser = () => {

  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged( async (user) => {
      if (user) {
        setLoggedUser(user.displayName)
        const tokenResult = await user.getIdTokenResult()
        const token = tokenResult.token;
        await setToken(token)
      } else {
        setLoggedUser(null)
        await deleteCookie('session')
      }
    })

    return () => unSuscribe()
  }, [])

  return (
    <div>
      {
        loggedUser ? loggedUser : 'deslogrado'
      }
    </div>
  )
}

export default ChechUser